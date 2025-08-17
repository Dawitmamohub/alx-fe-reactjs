import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !instructions) {
      alert('Please fill all fields');
      return;
    }
    console.log({ title, ingredients, instructions });
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <textarea
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={e => setIngredients(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={e => setInstructions(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Submit</button>
    </form>
  );
}

export default AddRecipeForm;
