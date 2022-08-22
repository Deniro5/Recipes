import React, { useState } from "react";
import { RecipeProps } from ".";
import styled from "styled-components";
import { updateRecipe, closeRecipe } from "../../../redux/slices/recipeSlice";
import { useAppDispatch } from "../../../hooks";

type EditRecipeProps = Pick<RecipeProps, "name" | "id" | "ingredients">;

const EditRecipe: React.FC<EditRecipeProps> = ({
  id,
  name,
  ingredients,
}: EditRecipeProps) => {
  const [newName, setNewName] = useState(name);
  const [newIngredients, setNewIngredients] = useState(ingredients);

  const dispatch = useAppDispatch();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewName(e.target.value);
  };

  const handleIngredientsChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setNewIngredients(e.target.value);
  };

  const handleCancel = () => {
    //dispatch the handle Close
    dispatch(closeRecipe());
  };

  const handleSubmit = (): void => {
    dispatch(
      updateRecipe({
        id,
        name: newName,
        ingredients: newIngredients,
      })
    );
    handleCancel();
    //dispatch handle close
  };

  return (
    <Container>
      <InputLabel>Edit Title:</InputLabel>
      <Title value={newName} onChange={handleNameChange} />
      <InputLabel>Edit Ingredients:</InputLabel>
      <Ingredients value={newIngredients} onChange={handleIngredientsChange} />
      <ButtonContainer>
        <LargeButton onClick={handleSubmit}> Submit Edit </LargeButton>
        <CancelButton onClick={handleCancel}> Cancel Edit </CancelButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 5px;
  padding: 10px;
  padding-bottom: 20px;
  background: black;
  margin-top: 20px;
`;

const InputLabel = styled.div`
  color: white;
  font-size: 22px;
  margin-top: 20px;
`;

const Title = styled.input`
  margin-top: 20px;
  height: 50px;
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
  width: 875px;
  margin-top: 20px;
  border: 1px solid black;
  padding: 6px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
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

const LargeButton = styled(SmallButton)`
  width: 200px;
  height: 50px;
`;

const CancelButton = styled(LargeButton)`
  background: red;
  &:hover {
    background: darkred;
  }
  margin-left: 10px;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
`;

export { EditRecipe };
