import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import Details from './Details';
import SearchParams from './SearchParams';
import ThemeContext from './ThemeContext';
import Navbar from './Navbar'


const App = () => {
  const theme = useState("darkblue");
  return (
    // You have to wrap your app in a Provider.
    // This is the mechanism by which React will notify the higher components to re-render whenever our context changes.
    // Then whatever you pass into the value prop (we passed in the complete hook, the value and updater pair) will exit on the other side whenever we ask for it.
    <ThemeContext.Provider value={theme}>
      <div>
        <Navbar>
          <Link to="/">Adopt Me!</Link>
        </Navbar>
        ;
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  )
};
ReactDOM.render(<App />, document.getElementById("root"));

