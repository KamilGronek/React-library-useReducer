import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import BorrowedBook from "./components/BorrowedBooks";
import ReturnedBooks from "./components/ReturnedBooks"
import ResultProvider from "./components/context"


function App() {
  return (
    <Router>
    <div className="grid">
      <ResultProvider>
      <Header/>
       <Menu/>
          <Route exact path="/" render={() =><BorrowedBook/>}/>
          <Route path="/returnedBooks" render={() =><ReturnedBooks/>} />
        <Navigation/>
        </ResultProvider>
    </div>
    </Router>
  );
}

export default App;
