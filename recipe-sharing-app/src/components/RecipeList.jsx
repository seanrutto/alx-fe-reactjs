import { useRecipeStore } from './sores/useRecipeStore'

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes)

    return(
        <div>
            {recipes.map(recipes => (
                <div key={recipe.id}>
                    ,<h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    )
}