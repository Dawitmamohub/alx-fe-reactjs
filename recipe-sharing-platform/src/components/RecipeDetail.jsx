import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find(r => r.id === parseInt(id));

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 hover:underline">&larr; Back to Home</Link>
      <h1 className="text-3xl font-bold my-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full max-w-lg mx-auto rounded-lg mb-4"/>
      <p className="text-gray-700 mb-4">{recipe.summary}</p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
      </div>
      <div className="mt-4 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p>Step 1: ...</p>
        <p>Step 2: ...</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
