import './App.css';
import LandingPage from './components/LandingPage/LandingPage'
import Navbar from './components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Route
}
from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={LandingPage} />
    </Router>
  );
}
export default App;
