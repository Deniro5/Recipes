import React from "react";
import styled from "styled-components";

import { useAppSelector } from "../../hooks";
import { Recipe } from "./Recipe";

const RecipeList = ({}) => {
  const recipes = useAppSelector((state) => state.recipe.recipes);
  const displayId = useAppSelector((state) => state.recipe.displayId);

  const filteredRecipes = displayId
    ? recipes.filter((recipe) => recipe.id === displayId)
    : recipes;

  return (
    <Container>
      {filteredRecipes.map((recipe) => (
        <Recipe key={recipe.id} {...recipe} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  text-align: center;
  padding-top: 1px;
`;

export { RecipeList };
