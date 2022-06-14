import React, { useContext } from 'react'
import {menuItems} from "../data/menuItems/dataSidebar"
import { Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
// IMPORT "TIPPY" => SHOW TOOLTIP
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
// CONTEXT
import { DarkModeContext } from "../utils/context/darkModeContext";
// ICONS
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../utils/context/AuthContext';



export default function Sidebar() {

  const {user, dispatch} = useContext(AuthContext)

  const navigate = useNavigate();

    // BTN LOGOUT
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
        navigate("/home");
    };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">Epicerie en Ligne</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <nav>
              {menuItems.map((menuItem, index) => (
                  <Link to={menuItem.to} >
                      <li className="items">
                          {menuItem.icon}
                          <span>{menuItem.name}</span>
                      </li>
                  </Link>
              ))}
          </nav>
        </ul>
      </div>

        <Tippy content={            
          <span style={{color: "orange"}}>
            SE DECONNECTER 😥
          </span>            
        }>
          <Button onClick={handleClick}>
            <LogoutIcon fontSize="large" />
          </Button>
        </Tippy>

      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  )
}
