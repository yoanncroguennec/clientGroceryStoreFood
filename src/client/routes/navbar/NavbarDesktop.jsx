import { useContext } from "react";
import { Container } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import { Typography, Button } from "@mui/material";
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
import { ActionIconsContainerDesktop, AnimationIconRotate, BoutonNavigationSticky, BoutonPseudoSticky } from '../../animations/CartLoginFloat';
// REDUX
import { useDispatch, useSelector } from 'react-redux'
// CONTEXT
import { AuthContext } from "../../../admin/utils/context/AuthContext";






export default function NavbarMobile() {
    
    const items = useSelector(state => state.items)

    const {user, dispatch} = useContext(AuthContext)

    const navigate = useNavigate();

    // BTN LOGOUT
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
        navigate("/home");
    };


    return (
        <ActionIconsContainerDesktop>

            {/* DISPLAY PSEUDO IF LOGIN */}
            
            {user
                ? (
                    <BoutonPseudoSticky>
                        <Typography variant="h5">
                            bonjour {user.details.username}
                        </Typography>
                    </BoutonPseudoSticky>
                )
                : (<> </>)
            }


            {/* BTN HOME */}
            <BoutonNavigationSticky style={{ background: "linear-gradient(to right top, #370528, #5f083d, #8c0950, #bb0b5e, #eb1267)", color: "black", top: "120px"}}>

                <Tippy content={
                    <span style={{color: "orange"}}>
                    ACCUEIL
                    </span>
                }>
                <Link to="/home">
                    <AnimationIconRotate>
                    <HomeIcon fontSize="large"/>
                    </AnimationIconRotate>
                </Link>
                </Tippy>

            </BoutonNavigationSticky>

            {/* BTN LOGIN */}
            <BoutonNavigationSticky style={{  background: "linear-gradient(to right top, #370528, #811b33, #ba521f, #cd9b00, #a8eb12)", color: "red", top: "200px"}}>
            {user
            ? (<div>
                    <Tippy content={
                        <span style={{color: "orange"}}>
                            Se Déconnecter 😥
                        </span>
                    }>
                        <Button onClick={handleClick}>
                            <LogoutIcon fontSize="large" />
                        </Button>
                    </Tippy>
                </div>)
            : (
                <div style={{paddingBottom: "20px"}}>
                    <Tippy content={
                        <span style={{color: "orange"}}>
                        SE CONNECTER 😀
                        </span>
                    }>
                        <Link to="/login">
                            <AnimationIconRotate>
                                <PersonIcon fontSize="large"/>
                            </AnimationIconRotate>
                        </Link>
                    </Tippy>
                    </div>

            )
            }
            </BoutonNavigationSticky>

            {/* BTN CART */}
            <BoutonNavigationSticky style={{ background: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)', top: "280px"}}>
                <Tippy content={
                    <span style={{color: "orange"}}>
                    MON PANIER
                    </span>
                }>
                <Link to="/cart">
                    <AnimationIconRotate>

                    <Container sx={{alignItems: "center", display: "flex", flex: "nowrap", marginLeft: "-25px"}}>
                        <div>
                            <ShoppingCartIcon fontSize="large"/>
                        </div>
                        <div style={{alignItems: "center", background: "red", borderRadius: "50%", display: "flex", color: "black", flex: "nowrap", fontSize: "1.5em", fontWeight: "bold", justifyContent: "center", height: "30px", marginLeft: "-0px", marginBottom: "25px", width: "50px"}}>
                            {items.length > 0 ? items.length : "0" }
                        </div>
                    </Container>


                    </AnimationIconRotate>
                </Link>
                </Tippy>
            </BoutonNavigationSticky>
        </ActionIconsContainerDesktop>
    )
}
