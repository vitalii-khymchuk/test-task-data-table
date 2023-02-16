import ColumnPickerItem from "../ColumnPickerItem/ColumnPickerItem";
import { List, Title } from "./ColumnPicker.styled";
import { Droppable } from "@hello-pangea/dnd";
import { useSelector } from "react-redux";
import { selectFilterAvailable } from "../../redux/selectors";
import PropTypes from "prop-types";

const DnDColumn = ({
  columnId,
  column,
  pickItemByClick,
  discardItemByClick,
}) => {
  const filterValue = useSelector(selectFilterAvailable);
  const isPicked = column.title === "Picked";
  return (
    <Droppable key={columnId} droppableId={columnId}>
      {(provided, snapshot) => (
        <List ref={provided.innerRef} {...provided.droppableProps}>
          <Title>{column.title}</Title>
          {column.items
            .filter(
              ({ key }) =>
                isPicked ||
                key.toLowerCase().includes(filterValue.toLowerCase().trim())
            )
            .map((item, index) => (
              <ColumnPickerItem
                isSelected={isPicked}
                key={item.key}
                item={item}
                index={index}
                pickItemByClick={pickItemByClick}
                discardItemByClick={discardItemByClick}
              />
            ))}
          {provided.placeholder}
        </List>
      )}
    </Droppable>
  );
};

DnDColumn.propTypes = {
  columnId: PropTypes.string.isRequired,
  column: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  pickItemByClick: PropTypes.func,
  discardItemByClick: PropTypes.func,
};

export default DnDColumn;
