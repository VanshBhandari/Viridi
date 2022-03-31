import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { Home } from './pages';
import { UserContextProvider } from './contexts/user'
function App() {

  return (
    <UserContextProvider>
      <div className="App">
        <Home />
      </div>
    </UserContextProvider>
  );
}

export default App;
