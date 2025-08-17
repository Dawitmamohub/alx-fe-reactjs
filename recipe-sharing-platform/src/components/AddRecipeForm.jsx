import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!ingredients.trim() || ingredients.split(',').length < 2)
      newErrors.ingredients = 'Please provide at least 2 ingredients, separated by commas';
    if (!steps.trim()) newErrors.steps = 'Steps are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      id: Date.now(),
      title: title.trim(),
      ingredients: ingredients.split(',').map(item => item.trim()),
      steps: steps.split('.').map(item => item.trim()).filter(Boolean),
      summary: steps.split('.')[0],
      image: 'https://via.placeholder.com/150'
    };

    if (onAddRecipe) onAddRecipe(newRecipe);

    // Reset form
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});

    navigate('/');
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">Add New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-full sm:max-w-md md:max-w-lg mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg space-y-4"
      >
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border rounded px-3 py-2 sm:py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold mb-1">Ingredients (comma separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full border rounded px-3 py-2 sm:py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.ingredients ? 'border-red-500' : 'border-gray-300'
            }`}
            rows={3}
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Steps */}
        <div>
          <label className="block font-semibold mb-1">Steps (period separated)</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full border rounded px-3 py-2 sm:py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.steps ? 'border-red-500' : 'border-gray-300'
            }`}
            rows={5}
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg hover:bg-blue-500 transition-colors duration-300 text-sm sm:text-base md:text-lg"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;

