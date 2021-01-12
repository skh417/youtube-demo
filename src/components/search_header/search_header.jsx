import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log(e.key);
      handleSearch();
    }
  };
  const onClick = () => {
    handleSearch();
  };

  return (
    <header className={styles.header}>
      <input
        ref={inputRef}
        className={styles.input}
        type='text'
        placeholder='검색어를 입력하시오'
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type='submit' onClick={onClick}>
        검색
      </button>
    </header>
  );
};

export default SearchHeader;
