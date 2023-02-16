import React, { useState } from "react";
import styled from "@emotion/styled";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useSelector } from "react-redux";
import {
  selectSelectedColumns,
  selectFilteredAvailable,
} from "../../redux/selectors";
import { selectColumn, discardColumn } from "../../redux/slice";
import { useDispatch } from "react-redux";
import ColumnPickerItem from "../ColumnPickerItem/ColumnPickerItem";
const Container = styled.div`
  display: flex;
`;

const TaskList = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
  min-width: 341px;
  border-radius: 5px;
  padding: 15px 15px;
  margin-right: 45px;
`;

const TaskColumnStyles = styled.div`
  margin: 8px;
  display: flex;
  width: 100%;
  min-height: 80vh;
`;

const Title = styled.span`
  color: #10957d;
  background: rgba(16, 149, 125, 0.15);
  padding: 2px 10px;
  border-radius: 5px;
  align-self: flex-start;
`;

const ColumnPicker = () => {
  const dispatch = useDispatch();
  const pickerColumns = {
    available: {
      items: useSelector(selectFilteredAvailable),
      title: "Available",
    },
    picked: { items: useSelector(selectSelectedColumns), title: "Picked" },
  };
  console.log(pickerColumns);
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const destColumnName = columns[destination.droppableId].title;
      const selectedItems = columns[source.droppableId].items[source.index];
      if (destColumnName === "Picked") {
        dispatch(selectColumn(selectedItems));
        console.log("add");
      } else {
        dispatch(discardColumn(selectedItems));
        console.log("remove");
      }

      //   const sourceColumn = columns[source.droppableId];
      //   const destColumn = columns[destination.droppableId];
      //   const sourceItems = [...sourceColumn.items];
      //   const destItems = [...destColumn.items];
      //   const [removed] = sourceItems.splice(source.index, 1);
      //   destItems.splice(destination.index, 0, removed);
      //   setColumns({
      //     ...columns,
      //     [source.droppableId]: {
      //       ...sourceColumn,
      //       items: sourceItems,
      //     },
      //     [destination.droppableId]: {
      //       ...destColumn,
      //       items: destItems,
      //     },
      //   })
    }
    // else {
    //   const column = columns[source.droppableId];
    //   const copiedItems = [...column.items];
    //   const [removed] = copiedItems.splice(source.index, 1);
    //   copiedItems.splice(destination.index, 0, removed);
    //   setColumns({
    //     ...columns,
    //     [source.droppableId]: {
    //       ...column,
    //       items: copiedItems,
    //     },
    //   });
    // }
  };

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result, pickerColumns)}>
      <Container>
        <TaskColumnStyles>
          {Object.entries(pickerColumns).map(([columnId, column], index) => {
            return (
              <Droppable key={columnId} droppableId={columnId}>
                {(provided, snapshot) => (
                  <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <Title>{column.title}</Title>
                    {column.items.map((item, index) => (
                      <ColumnPickerItem
                        key={item.key}
                        item={item}
                        index={index}
                      />
                    ))}
                    {provided.placeholder}
                  </TaskList>
                )}
              </Droppable>
            );
          })}
        </TaskColumnStyles>
      </Container>
    </DragDropContext>
  );
};

export default ColumnPicker;
