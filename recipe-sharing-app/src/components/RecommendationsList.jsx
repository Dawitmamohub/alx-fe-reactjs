import { useRecipeStore } from './recipeStore';
import { useEffect } from 'react';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
    // Optionally, you could trigger this on favorites change
    // eslint-disable-next-line
  }, []);

  if (recommendations.length === 0) {
    return <div><h2>Recommended for You</h2><p>No recommendations yet.</p></div>;
  }

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList; 