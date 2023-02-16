import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import { TaskInformation, RemoveBtn } from "./ColumnPickerItem.styled";
import { AiOutlineClose } from "react-icons/ai";

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

export default ColumnPickerItem;
