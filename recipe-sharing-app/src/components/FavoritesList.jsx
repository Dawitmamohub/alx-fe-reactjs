import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites.map(id =>
    state.recipes.find(recipe => recipe.id === id)
  ).filter(Boolean));

  if (favorites.length === 0) {
    return <div><h2>My Favorites</h2><p>No favorite recipes yet.</p></div>;
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList; 