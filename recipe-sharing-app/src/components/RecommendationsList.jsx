import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  if (recommendations.length === 0) {
    return (
      <div>
        <h2>Recommendations</h2>
        <p>No recommendations available yet. Add some favorites to get personalized suggestions!</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Recommendations</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList; 