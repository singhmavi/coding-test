import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
  background: ${(props) => (props.selected ? "rgb(95, 61, 200)" : "white")};
  color: ${(props) => (props.selected ? "white" : "rgb(95, 61, 200)")};
`;

function CategorySelector({ category, handleOnClickCategory }) {
  return (
    <div>
      {" "}
      <Button
        selected={category === "cats" || category === ""}
        onClick={() => handleOnClickCategory("cats")}
      >
        Cat
      </Button>
      <Button
        selected={category === "sharks" || category === ""}
        onClick={() => handleOnClickCategory("sharks")}
      >
        Shark
      </Button>
    </div>
  );
}

export default CategorySelector;
