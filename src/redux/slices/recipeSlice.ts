/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipeProps } from "../../components/RecipeList/Recipe";
import { Page } from "../../constants";

// Define the state of the slice as an object
export interface RecipeState {
  recipes: RecipeProps[];
  currentPage: Page;
  openId: number | null;
  currentId: number;
  displayId: number | null;
}

// Define an initial state
const initialState: RecipeState = {
  recipes: [],
  currentPage: Page.HOME,
  openId: null,
  currentId: 1,
  displayId: null,
};

// Create a slice containing the configuration of the state
// and the reducers functions
const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    createRecipe(
      state,
      action: PayloadAction<Pick<RecipeProps, "name" | "ingredients">>
    ) {
      state.recipes = [...state.recipes, { ...action.payload, id: state.currentId }];
      state.currentId++;
    },
    updateRecipe(state, action: PayloadAction<RecipeProps>) {
      const id = action.payload.id;
      state.recipes = state.recipes.map((recipe) =>
        recipe.id === id ? action.payload : recipe
      );
    },
    deleteRecipe(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.recipes = state.recipes.filter((recipe) => recipe.id !== id);
    },
    deleteAllRecipes(state) {
      state.recipes = [];
    },
    navigateTo(state, action: PayloadAction<Page>) {
      state.currentPage = action.payload;
    },
    openRecipe(state, action: PayloadAction<number>) {
      state.openId = action.payload;
    },
    closeRecipe(state) {
      state.openId = null;
    },
    setDisplay(state, action: PayloadAction<number | null>) {
      state.displayId = action.payload;
    },
  },
});

// Export each reducers function defined in createSlice
export const {
  createRecipe,
  updateRecipe,
  deleteRecipe,
  deleteAllRecipes,
  navigateTo,
  openRecipe,
  closeRecipe,
  setDisplay,
} = recipeSlice.actions;

// Export default the slice reducer
export default recipeSlice.reducer;
