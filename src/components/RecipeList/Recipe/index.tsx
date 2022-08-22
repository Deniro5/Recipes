import React from "react";
import styled from "styled-components";
import { EditRecipe } from "./EditRecipe";
import { openRecipe, deleteRecipe } from "../../../redux/slices/recipeSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";

export interface RecipeProps {
  id: number;
  name: string;
  ingredients: string;
}

const Recipe = ({ id, name, ingredients }: RecipeProps) => {
  const dispatch = useAppDispatch();
  const openId = useAppSelector((state) => state.recipe.openId);
  const isOpen = id === openId;

  const handleEdit = () => {
    dispatch(openRecipe(id));
  };

  const handleDelete = () => {
    dispatch(deleteRecipe(id));
  };
  return (
    <Container>
      <Header>
        <div>{name}</div>
        <ButtonContainer>
          <SmallButton onClick={handleEdit}>Edit This Recipe</SmallButton>
          <SmallRemoveButton onClick={handleDelete}>Remove This Recipe</SmallRemoveButton>
        </ButtonContainer>
      </Header>
      <IngredientsHeader> Ingredients: </IngredientsHeader>
      <IngredientsText> {ingredients} </IngredientsText>
      {isOpen && <EditRecipe id={id} name={name} ingredients={ingredients} />}
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  margin-top: 30px;
  width: 980px;
  border-radius: 5px;
  background: yellow;
  width: 90%;
  padding: 10px 10px;
  font-size: 18px;
  text-align: left;
`;

const Header = styled.div`
  font-weight: 500;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  border-bottom: 1px solid black;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const SmallButton = styled.div`
  font-size: 16px;
  width: 150px;
  height: 32px;
  border: 1px solid black;
  background: mediumpurple;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  cursor: pointer;
  &:hover {
    background: purple;
  }
`;

const SmallRemoveButton = styled(SmallButton)`
  background: red;
  &:hover {
    background: darkred;
  }
`;

const IngredientsHeader = styled.div`
  margin-top: 20px;
  font-weight: 600px;
  font-size: 18px;
`;

const IngredientsText = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  font-size: 14px;
`;

export { Recipe };
