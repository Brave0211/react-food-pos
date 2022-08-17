import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { Shop } from "../Libs/Shop";
import { Home } from "../Libs/Home";
import { Price } from "../Libs/Price";
import { Graph } from "../Libs/Graph";
import {Message} from "../Libs/Message"
import { Notification } from "../Libs/Notification";
import { Settings } from "../Libs/Settings";
import { Logout } from "../Libs/Logout";

export const Sidebar = () => {
   const handleAddClass = (evt) =>{
      const links = document.querySelectorAll(".sidebar__link-active");
  
      links.forEach((link) =>{
        link.classList.remove("sidebar__link-active")
      });
      evt.currentTarget.classList.add("sidebar__link-active");
    }
  return (
    <>
      <div className="sidebar">
        <NavLink to="/" className="logo" >
          <Shop />
        </NavLink>
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <NavLink onClick={handleAddClass} className="sidebar__link" to="/">
              <span>
               <Home/>
              </span>
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink onClick={handleAddClass} className="sidebar__link" to="/price">
              <span>
               <Price/>
              </span>
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink onClick={handleAddClass} className="sidebar__link" to="/graph">
              <span>
               <Graph/>
              </span>
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink onClick={handleAddClass} className="sidebar__link" to="/message">
              <span>
               <Message/>
              </span>
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink onClick={handleAddClass} className="sidebar__link" to="/notification">
              <span>
               <Notification/>
              </span>
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink onClick={handleAddClass} className="sidebar__link" to="/settings">
              <span>
               <Settings/>
              </span>
            </NavLink>
          </li>
        </ul>
        <button className="sidebar__btn" type="button" >
         <Logout />
        </button>
      </div>
    </>
  );
};
