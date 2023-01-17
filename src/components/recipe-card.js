import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/RecipeCard.module.css';

import dummyPic from '../assets/recipe.jpg';

const recipeCard = (props) => {
  const name = props.recipe.name;
  const description = props.recipe.description || 'Sorry there is no description for this one :('
  const thumbnailUrl = props.recipe.thumbnail_url || dummyPic

  // Calculate maximum description length based on description length
  let maxDescriptionLength = 250;

  // Truncate description if necessary
  let truncatedDescription = description
  if (description.length > maxDescriptionLength) {
    truncatedDescription = description.substring(0, maxDescriptionLength) + '...'
  }

  return (
    <div className={styles.outerContainer}>
        <div className={styles.imgContainer}>
            <img src={thumbnailUrl} alt="Thumbnail" className={styles.tumbnailImg} />
        </div>
        <div className={styles.descContainer}>
          <div className={styles.ellipsis}>
              <h3>{name}</h3>
              <p>{truncatedDescription}</p>
          </div>
          <Link to={{ pathname: '/description', state: { recipe: props.recipe } }}><button className={styles.button}>View Recipe</button></Link> 
        </div>
    </div>
  ) 
}

export default recipeCard