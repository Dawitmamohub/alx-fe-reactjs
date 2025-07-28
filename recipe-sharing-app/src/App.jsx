import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <h1>Recipe Sharing App</h1>
      <Routes>
        <Route path="/" element={
          <>
            <SearchBar />
            <AddRecipeForm />
            <RecipeList />
            <FavoritesList />
            <RecommendationsList />
          </>
        } />
        <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </Router>
  );
}

// Wrapper to extract recipeId from URL params and pass to RecipeDetails
import { useParams } from 'react-router-dom';
function RecipeDetailsWrapper() {
  const { id } = useParams();
  const recipeId = Number(id);
  return <RecipeDetails recipeId={recipeId} />;
}

export default App;
