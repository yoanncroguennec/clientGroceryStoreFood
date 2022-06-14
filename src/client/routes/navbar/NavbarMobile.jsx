import { useContext } from "react";
import { Divider, ListItemButton, ListItemIcon, Typography, Button } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
// IMPORT "TIPPY" => SHOW TOOLTIP
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
// ICONS
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from '@mui/icons-material/Logout';
// STYLES
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from "../../styles/Material_UI/routes/StylesNavbarAndMobile";
// CONTEXT
import { AuthContext } from "../../../admin/utils/context/AuthContext";





export default function NavbarMobile({matches}) {
  const items = useSelector(state => state.items)

  const {user, dispatch} = useContext(AuthContext)

  const navigate = useNavigate();

  // BUTTON LOGOUT
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    navigate("/home");
  };

  return (
    <ActionIconsContainerMobile style={{ background: "linear-gradient(to right top, #370528, #5f083d, #8c0950, #bb0b5e, #eb1267)", color: "black"}}>
        
      <MyList type="row">

        {/* BTN HOME */}
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && "grey",
            }}
          >
            <Link to="/home">
              <HomeIcon fontSize="large" style={{textDecoration: "none", color: "black"}}/>
            </Link>
          </ListItemIcon>
        </ListItemButton>

        <Divider orientation="vertical" flexItem />

        {/* BTN LOGIN */}
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && "grey",
            }}
          >

            {user
            ? (<div>
                  <Button onClick={handleClick}>
                    <LogoutIcon fontSize="large" />
                  </Button>
                </div>)
            : (
                <div style={{paddingBottom: "20px"}}>
                  <Link to="/login">
                    <PersonIcon style={{textDecoration: "none", color: "black"}} fontSize="large"/>
                  </Link>
                </div>
            )}
            
          </ListItemIcon>
        </ListItemButton>

        <Divider orientation="vertical" flexItem />

        {/* BTN CART */}
        <ListItemButton
          sx={{
            justifyContent: "center", display: "flex" 
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "center",
            }}
          >
            <Link to="/cart" style={{
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "center",
              color: "black",
              textDecoration: "none"
            }}>
              <div>
                <ShoppingCartIcon fontSize="large" sx={{textDecoration: "none", color: "black"}}/>
              </div>
              <div>
                <Typography variant="h5">{items.length > 0 && items.length}</Typography>                
              </div>
            </Link>
          </ListItemIcon>
        </ListItemButton>

        <Divider orientation="vertical" flexItem />

      </MyList>
    </ActionIconsContainerMobile>
  );
}
