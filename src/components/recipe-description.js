import React from 'react'

const RecipeDescription = ({ location }) => {

    const recipe = location.state.recipe;

  return (
    <div>{recipe.name}</div>
  )
}

export default RecipeDescription