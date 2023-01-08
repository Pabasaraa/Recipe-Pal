import React from 'react'
import styles from '../styles/RecipeCard.module.css'

import dummyPic from '../assets/recipe.jpg'

const recipeCard = (props) => {

  const shortenDesc = (desc) => {
    if (desc && desc.length > 200) {
      return desc.substring(0, 200) + '...'
    }
    return desc
  }

  const shortenedDesc = shortenDesc(props.recipe.description)

  return (
    <div className={styles.outerContainer}>
        <div className={styles.imgContainer}>
            <img src={props.recipe.thumbnail_url || dummyPic} alt="recipe" className={styles.tumbnailImg} />
        </div>
        <div className={styles.descContainer}>
            <div>
                <h1>{props.recipe.name}</h1>
                <p>{shortenedDesc.length > 0 ? shortenedDesc : 'Sorry there is no description for this one :('}</p>
            </div>
            <button className={styles.button}>View Recipe</button> 
        </div>
    </div>
  ) 
}

export default recipeCard