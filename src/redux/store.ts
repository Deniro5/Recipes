import { configureStore } from "@reduxjs/toolkit";

// Import the previously created search slice
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import recipeSliceReducer, { RecipeState } from "./slices/recipeSlice";

// Create the store, adding the search slice to it
export const store = configureStore({
  reducer: {
    recipe: recipeSliceReducer,
  },
});

// Export some helper types used to improve type-checking
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
