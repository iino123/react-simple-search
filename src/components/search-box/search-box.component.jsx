import React from "react";
import "./search-box.style.css";

// propsからプロパティを抽出するための{}
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  ></input>
  // ↑jsの世界に行くための{}
);
