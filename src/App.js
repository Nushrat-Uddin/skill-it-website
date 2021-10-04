import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/courses">
          <Courses></Courses>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
         <Contact></Contact> 
        </Route>
        <Route path="*">
        <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
