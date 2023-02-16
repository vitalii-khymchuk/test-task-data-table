import { useState } from "react";
import ModalPrototype from "../ModalPrototype";
import Button from "../Button";
import ColumnPicker from "../ColumnPicker/ColumnPicker";

const FilterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpenBtnClick = () => setIsOpen(true);
  const handleCancel = () => setIsOpen(false);

  return (
    <>
      <Button onClick={onOpenBtnClick}>Select Columns</Button>
      <ModalPrototype isOpen={isOpen} handleCancel={handleCancel}>
        <ColumnPicker />
      </ModalPrototype>
    </>
  );
};

export default FilterModal;
