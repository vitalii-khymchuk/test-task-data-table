import React from "react";
import { StyledInput } from "./SearchInput.styled";
import { setFilter } from "../../redux/slice";
import { useDispatch } from "react-redux";

const SearchInput = () => {
  const dispatch = useDispatch();
  const onInputChange = (e) => {
    const value = e.target.value;
    dispatch(setFilter(value));
  };
  return (
    <StyledInput
      placeholder="Search available columns..."
      onChange={onInputChange}
      maxLength={15}
    />
  );
};

export default SearchInput;
