import React from "react";
import styled from "styled-components";
import { navigateTo, deleteAllRecipes, setDisplay } from "../../redux/slices/recipeSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Page } from "../../constants";

const Sidebar = ({}) => {
  const dispatch = useAppDispatch();
  const currPage = useAppSelector((state) => state.recipe.currentPage);
  const recipes = useAppSelector((state) => state.recipe.recipes);
  const displayId = useAppSelector((state) => state.recipe.displayId);

  const handleGoToAdd = () => {
    dispatch(navigateTo(Page.ADD));
  };

  const handleGoToRecipeList = () => {
    dispatch(
      navigateTo(
        currPage === Page.RECIPE_LIST && !displayId ? Page.HOME : Page.RECIPE_LIST
      )
    );
    dispatch(setDisplay(null));
  };

  const handleRemoveAll = () => {
    dispatch(deleteAllRecipes());
  };

  const handleRecipeClick = (id: number) => {
    dispatch(setDisplay(id));
    dispatch(navigateTo(Page.RECIPE_LIST));
  };

  return (
    <SidebarContainer>
      <Title>FCC Recipe Box</Title>
      <Button onClick={handleGoToAdd}>Add a New Recipe</Button>
      <Button onClick={handleGoToRecipeList}>
        {currPage === Page.RECIPE_LIST && !displayId
          ? "Hide All Recipes"
          : "Show All Recipes"}
      </Button>
      <RemoveButton onClick={handleRemoveAll}> Remove All Recipes </RemoveButton>
      <RecipeListHeader>
        {recipes.length ? "Recipe List:" : "The List is Empty"}
      </RecipeListHeader>
      <RecipeListContainer>
        {recipes.map((recipe) => (
          <RecipeButton
            key={recipe.id}
            onClick={(): void => handleRecipeClick(recipe.id)}>
            {recipe.name}
          </RecipeButton>
        ))}{" "}
      </RecipeListContainer>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 299px;
  position: fixed;
  background: purple;
  border: 1px solid black;
  height: 100vh;
  text-align: center;
  font-size: 24px;
`;

const Title = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
`;

const Button = styled.div`
  width: 270px;
  height: 45px;
  border: 1px solid black;
  background: darkgreen;
  margin: 5px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: green;
  }
`;

const RemoveButton = styled(Button)`
  background: red;
  &:hover {
    background: darkred;
  }
`;

const RecipeButton = styled(Button)`
  background: yellow;
  &:hover {
    background: orange;
  }
`;

const RecipeListHeader = styled.div`
  margin-top: 50px;
`;

const RecipeListContainer = styled.div`
  margin-top: 10px;
`;

export { Sidebar };
