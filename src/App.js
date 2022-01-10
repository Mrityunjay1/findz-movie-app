import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:imdbId" component={MovieDetail} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
