import { Container, List, ColumnStyles, Title } from "./ColumnPicker.styled";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useSelector } from "react-redux";
import {
  selectSelectedColumns,
  selectFilteredAvailable,
} from "../../redux/selectors";
import { selectColumn, discardColumn } from "../../redux/slice";
import { useDispatch } from "react-redux";
import ColumnPickerItem from "../ColumnPickerItem/ColumnPickerItem";

const ColumnPicker = () => {
  const dispatch = useDispatch();
  const pickerColumns = {
    available: {
      items: useSelector(selectFilteredAvailable),
      title: "Available",
    },
    picked: {
      items: useSelector(selectSelectedColumns),
      title: "Picked",
    },
  };

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId === destination.droppableId) return;
    const destColumnName = columns[destination.droppableId].title;
    const selectedItems = columns[source.droppableId].items[source.index];
    if (destColumnName === "Picked") {
      dispatch(selectColumn(selectedItems));
    } else {
      dispatch(discardColumn(selectedItems));
    }
  };

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result, pickerColumns)}>
      <Container>
        <ColumnStyles>
          {Object.entries(pickerColumns).map(([columnId, column], index) => {
            const isSelected = column.title === "Picked";
            return (
              <Droppable key={columnId} droppableId={columnId}>
                {(provided, snapshot) => (
                  <List ref={provided.innerRef} {...provided.droppableProps}>
                    <Title>{column.title}</Title>
                    {column.items.map((item, index) => (
                      <ColumnPickerItem
                        isSelected={isSelected}
                        key={item.key}
                        item={item}
                        index={index}
                      />
                    ))}
                    {provided.placeholder}
                  </List>
                )}
              </Droppable>
            );
          })}
        </ColumnStyles>
      </Container>
    </DragDropContext>
  );
};

export default ColumnPicker;
