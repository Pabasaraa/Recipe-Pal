import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../styles/AllRecipes.module.css'

import RecipeCard from "./recipe-card.js";

import HomeImage from '../assets/homeImg.png';

const AllRecipes = () => {
    const [recipes, setRecipes] = useState();

    useEffect(() => {
        getRecipes();
    }, []);
      
    const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a2f5f28180msh9d2b772ccbb680ap16008djsnf5852bf84904',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
      }
    };
    
    // Function to get all recipes and set them to state
    async function getRecipes() {
        const response = await fetch(url, options)
            .then(res => res.json())
            .catch(err => console.error('error:' + err));

        setRecipes(response.results);
    }

    return (
        <div>
            <div className={styles.homeImageContainer}>
                <div className={styles.homeTextContainer}>
                    <h1 className={styles.homeImageText}>Discover a World of Delicious Recipes!</h1>
                    <h5 className={styles.homeImageSubText}>You'll have access to a vast collection of dishes from around the world. From classic comfort foods to exotic international cuisine, our app has something for every taste and occasion. Plus, with easy-to-follow instructions and customizable ingredient lists, it's never been easier to cook up a delicious meal. So why wait? Download our app today and start exploring the delicious world of cooking!</h5>
                    <button className={styles.homeButton}>Start Cooking</button>
                </div>
                <img src={HomeImage} alt="Home Image" className={styles.homeImage}/>
            </div>
            {recipes ? 
                <div className={styles.recipesContainer}>
                    <Container>
                        <Row>
                            {recipes && recipes.map((recipe) => (
                                <Col xs={3} sm={3} md={3} lg={3} key={recipe}>
                                    <RecipeCard recipe={recipe}/>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div> 
                : 
                <div>
                    <h1>Loading...</h1>    
                </div>
            }
        </div>
    );
};

export default AllRecipes;
  