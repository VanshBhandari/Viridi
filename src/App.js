import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { Home } from './pages';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
