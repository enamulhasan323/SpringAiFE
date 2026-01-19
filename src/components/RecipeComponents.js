import React, {useState} from "react";

function RecipeComponents() {

    const [ingrediants, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('any');
    const [dietaryRestriction, setDietaryRestriction] = useState('');
    const [recipe, setRecipe] = useState('');

    const createRecipe = async () => {
                try {
          const response = await fetch(`http://localhost:8080/recipe-generator?ingredients=${ingrediants}&cuisine=${cuisine}&dietaryRestrictions=${dietaryRestriction}`);
          const data = await response.text();
          setRecipe(data);
        } catch (error) {
            console.error('Error generating Recipe:', error);
        }
    }
    return (
        <div>
        <h2>Create Recipe</h2>
        <input
            type="text"
            value={ingrediants}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter ingrediants (comma separated)"></input>
        <input
            type="text"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            placeholder="Enter cuisine type"></input>
        <input
            type="text"
            value={dietaryRestriction}
            onChange={(e) => setDietaryRestriction(e.target.value)}
            placeholder="Enter dietary restriction"></input>

            <button onClick={createRecipe}>Create Recipe</button>

        <div className="output">
            <pre className="recipe-text">{recipe}</pre>
        </div>
        </div>
    );
}

export default RecipeComponents;