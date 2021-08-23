import React from 'react';
import './Nav.css';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <div className="navBar">
      <div className="leftDiv">
        <h1 className="title">Bookstore CMS</h1>
        <ul className="links">
          {links.map((link) => <li key={link.id}><NavLink to={link.path} className="link" activeClassName="active-link" exact>{link.text}</NavLink></li>)}
        </ul>
      </div>
      <div className="rightDiv">
        <FaUser />
      </div>
    </div>
  );
};

export default NavBar;