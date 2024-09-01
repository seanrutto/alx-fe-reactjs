import { useRecipeStore } from './recipeStore';
import { useHistory } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const history = useHistory();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    history.push('/'); // Redirect to home after deleting
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
