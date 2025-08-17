import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p className="text-center mt-10 text-gray-700">Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 hover:underline">&larr; Back to Home</Link>

      <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">{recipe.title}</h1>

        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full max-w-lg mx-auto rounded-lg mb-6 shadow-md"
        />

        <p className="text-gray-700 mb-6 text-center">{recipe.summary}</p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-4">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
