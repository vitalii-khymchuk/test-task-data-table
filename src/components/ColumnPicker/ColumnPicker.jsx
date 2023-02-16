import { Container, ColumnStyles, ApplyBtnWrap } from "./ColumnPicker.styled";
import Button from "../Button";
import DnDColumn from "./DnDColumn";
import { DragDropContext } from "@hello-pangea/dnd";
import { useSelector } from "react-redux";
import {
  selectSelectedColumns,
  selectAvailableColumns,
} from "../../redux/selectors";
import { setTableColumns } from "../../redux/slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const ColumnPicker = ({ closeModal }) => {
  const dispatch = useDispatch();
  const initColumns = {
    available: useSelector(selectAvailableColumns),
    picked: useSelector(selectSelectedColumns),
  };
  const [columns, setColumns] = useState(initColumns);

  //Handle DnD action
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  //Simulate dragging for pick column by click on it
  const pickItemByClick = (item) => {
    const from = columns.available.items?.findIndex(
      ({ key }) => key === item.key
    );
    const to = columns.picked.items?.length;
    const result = {
      source: { index: from, droppableId: "available" },
      destination: { droppableId: "picked", index: to },
    };
    onDragEnd(result, columns, setColumns);
  };

  //Simulate dragging for discard column by click on X button
  const discardItemByClick = (item) => {
    const from = columns.picked.items?.findIndex(({ key }) => key === item.key);
    const to = columns.available.items?.length;
    const result = {
      source: { index: from, droppableId: "picked" },
      destination: { index: to, droppableId: "available" },
    };
    onDragEnd(result, columns, setColumns);
  };

  const onAcceptClick = () => {
    dispatch(setTableColumns(columns));
    closeModal();
  };
  return (
    <>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <Container>
          <ColumnStyles>
            {Object.entries(columns).map(([columnId, column], index) => (
              <DnDColumn
                key={columnId}
                columnId={columnId}
                column={column}
                discardItemByClick={discardItemByClick}
                pickItemByClick={pickItemByClick}
              />
            ))}
          </ColumnStyles>
        </Container>
      </DragDropContext>
      <ApplyBtnWrap>
        <Button type="button" onClick={onAcceptClick}>
          Apply
        </Button>
      </ApplyBtnWrap>
    </>
  );
};

export default ColumnPicker;
