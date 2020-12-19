import './App.css';
import LandingPage from './components/LandingPage/LandingPage'
import Navbar from './components/Navbar/Navbar'
import Cities from './components/Cities/Cities'
import {
  BrowserRouter as Router,
  Route
}
from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/landingpage" exact component={LandingPage} />
    </Router>
  );
}
export default App;
