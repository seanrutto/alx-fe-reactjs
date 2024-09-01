import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Manager</h1>
        <Switch>
          <Route path="/" exact>
            <AddRecipeForm />
            <RecipeList />
          </Route>
          <Route path="/recipe/:recipeId">
            <RecipeDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
