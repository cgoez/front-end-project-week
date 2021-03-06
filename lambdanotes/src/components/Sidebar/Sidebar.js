import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="sidebar">
    <ul className="sidebar__ul">
      <li>
        <h2 className="sidebar__title">Lambda Notes</h2>
      </li>
      <li>
        <Link to="/">
          <button className="sidebar__button">View Your Notes</button>
        </Link>
      </li>
      <li>
        <Link to="/create">
          <button className="sidebar__button">+ Create New Note</button>
        </Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
