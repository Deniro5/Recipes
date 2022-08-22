import React from "react";
import { Home } from "../Home";
import { NewRecipe } from "../NewRecipe";
import { RecipeList } from "../RecipeList";
import { useAppSelector } from "../../hooks";
import { Page } from "../../constants";

//depending on what page we are on, render it from here

const routerMap = {
  [Page.HOME]: <Home />,
  [Page.ADD]: <NewRecipe />,
  [Page.RECIPE_LIST]: <RecipeList />,
};

const Router = ({}) => {
  const currPage = useAppSelector((state) => state.recipe.currentPage);
  return routerMap[currPage];
};

export { Router };
