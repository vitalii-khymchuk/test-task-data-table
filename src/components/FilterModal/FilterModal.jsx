import { useState } from "react";
import ModalPrototype from "../ModalPrototype";
import Button from "../Button";
import ColumnPicker from "../ColumnPicker";
import SearchInput from "../SearchInput";

const FilterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpenBtnClick = () => setIsOpen(true);
  const handleCancel = () => setIsOpen(false);

  return (
    <>
      <Button onClick={onOpenBtnClick}>Select Columns</Button>
      <ModalPrototype isOpen={isOpen} handleCancel={handleCancel}>
        <SearchInput />
        <ColumnPicker closeModal={handleCancel} />
      </ModalPrototype>
    </>
  );
};

export default FilterModal;
