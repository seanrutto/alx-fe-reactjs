import { useState } from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <h1>Recipe Manager</h1>
        <AddRecipeForm />
        <RecipeList />
      </div>
      
  )
}

export default App
