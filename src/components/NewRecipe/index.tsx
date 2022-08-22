import React, { useState } from "react";
import styled from "styled-components";
import { navigateTo, createRecipe } from "../../redux/slices/recipeSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Page } from "../../constants";

const NewRecipe = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (): void => {
    dispatch(
      createRecipe({
        name,
        ingredients,
      })
    );
  };

  const handleCancel = (): void => {
    setName("");
    setIngredients("");
    dispatch(navigateTo(Page.HOME));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleIngredientsChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setIngredients(e.target.value);
  };

  return (
    <Container>
      <Title onChange={handleNameChange} value={name} placeholder='Recipe' />
      <Ingredients
        onChange={handleIngredientsChange}
        value={ingredients}
        placeholder='Ingredients'
      />
      <Button onClick={handleSubmit}>Submit Recipe</Button>
      <CancelButton onClick={handleCancel}>Cancel</CancelButton>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  text-align: center;
  width: 530px;
  padding-top: 30px;
`;

const Title = styled.input`
  height: 60px;
  font-size: 22px;
  display: block;
  width: 520px;
  padding: 0px 6px;
  border: 1px solid black;
`;

const Ingredients = styled.textarea`
  resize: none;
  height: 170px;
  font-size: 22px;
  display: block;
  width: 520px;
  margin-top: 15px;
  border: 1px solid black;
  padding: 6px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;

const Button = styled.div`
  font-size: 24px;
  width: 350px;
  height: 60px;
  border: 1px solid black;
  background: darkgreen;
  margin: 15px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: green;
  }
`;

const CancelButton = styled(Button)`
  background: red;
  &:hover {
    background: darkred;
  }
`;

const Text = styled.div`
  padding-top: 30px;
  font-size: 24px;
`;

export { NewRecipe };
