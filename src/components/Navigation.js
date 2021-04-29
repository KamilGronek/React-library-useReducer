import React, { useContext } from 'react'
import "../styles/Navigation.css";
import { NavLink } from "react-router-dom";
import {ResultContext} from "./context"
const Navigation = () => {

  const context = useContext(ResultContext)


  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink exact to="/">
            Borrowed books <em>({context.resultsBorrowedBooks})</em>
          </NavLink>
        </li>
        <li>
          <NavLink to="/returnedBooks">Given books <em>({context.resultsReturnedBooks})</em></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
