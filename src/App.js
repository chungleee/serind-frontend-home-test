import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';

function App() {
	return (
		// Router setup
		<Router>
			<Route exact path='/' component={Movies} />
			<Route exact path='/:movieID' component={MovieDetails} />
		</Router>
	);
}

export default App;
