import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import { TaskInformation, RemoveBtn } from "./ColumnPickerItem.styled";
import { AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";

const ColumnPickerItem = ({
  item,
  index,
  isSelected,
  pickItemByClick,
  discardItemByClick,
}) => {
  const onRemoveClick = () => {
    discardItemByClick(item);
  };
  const onItemClick = () => {
    if (!isSelected) pickItemByClick(item);
  };
  const itemName = item.key.toUpperCase();
  return (
    <Draggable key={item.key} draggableId={item.key} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskInformation onClick={onItemClick}>
            <h3>{itemName}</h3>
            {isSelected && (
              <RemoveBtn onClick={onRemoveClick}>
                <AiOutlineClose size={16} />
              </RemoveBtn>
            )}
          </TaskInformation>
        </div>
      )}
    </Draggable>
  );
};

ColumnPickerItem.propTypes = {
  item: PropTypes.shape({
    key: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  pickItemByClick: PropTypes.func,
  discardItemByClick: PropTypes.func,
};

export default ColumnPickerItem;
