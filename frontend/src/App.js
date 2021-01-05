import './App.css';
import LandingPage from './components/LandingPage/LandingPage'
import UserInput from './components/UserInput/UserInput'
import Navbar from './components/Navbar/Navbar'
import Explore from './components/Explore/Explore'
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
      <Route path="/userinput" exact component={UserInput} />
      <Route path="/test" exact component={Explore} />
    </Router>
  );
}
export default App;
