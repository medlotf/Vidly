import React, { Component } from 'react';
import Movies from './Components/movies';
import NavBar from './Components/navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Customers from './Components/customers';
import Rentals from './Components/rentals';
import NotFound from './Components/notFound';
import MovieForm from './Components/movieForm';
import Login from './Components/login';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container mt-5">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/movie/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/customers" component={Customers} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

