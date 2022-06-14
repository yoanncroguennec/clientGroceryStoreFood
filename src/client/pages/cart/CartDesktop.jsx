import React, { useContext, useEffect, useState } from 'react';
import { Box, Container, Typography, Button, List, ListItem, ListItemText, Divider } from "@mui/material";
import { useNavigate } from 'react-router-dom';
// COMPONENTS
import ExtendCardDesktop from "../../components/cart/ExtendCardDesktop";
// REDUX + FILES
import { useSelector, useDispatch } from 'react-redux'
import { resetCart } from "../../utils/redux/Actions"
// CONTEXT
import { AuthContext } from '../../../admin/utils/context/AuthContext';
// ROUTES
import Navbar from '../../routes/navbar/Index';





export default function CartDesktop({matches}) {
    
    const items = useSelector(state => state.items)
    const [subTotal, setSubTotal] = useState(0.00)
    const [total, setTotal] = useState(0.00)
    const [roundTaxes, setRoundTaxes] = useState(0.1) // Car "10%" = "0.1" = "10/100"
    const shipping = 10.00

    useEffect(() => {
      let totals = items.map(item => {
        return item.quantity * item.details.price
      })
      setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0))
      setTotal(subTotal + shipping)
      // console.log(`Subtotal:  €${subTotal} `)
      // console.log(`You have ${items.length} in your cart`)
    }, [items, subTotal, total]) 


    function ccyFormat(num) {
    return `${num.toFixed(2)}`;
    }

    // BTN RESET
    const dispatch = useDispatch()
    const reset = () => {
        dispatch(resetCart())
        navigate("/home");
    }
    // SECTION BTN PAY REDIRECTED USER IF NOT LOGGED IN
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleClick = () => {
        if (user) {
        navigate("/confirmCart");
        } else {
        navigate("/login");
        }
    };

    return (
        <>
            <Navbar />

            <Box sx={{ marginBottom: 10, paddingTop: 15}}>

                <Container sx={{border: "3px solid black", borderRadius: 10,backgroundImage: "url(/assets/imgs/cart/bgCart.jpg)", backgroundSize: "cover", width: "550px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;", opacity: "0.9"}}>
                    <Container sx={{}}>
                        <Typography align='center' variant='h4' sx={{color: "white"}}>MON PANIER</Typography>
                    </Container>
                    
                    <Container sx={{backgroundColor: "#fff", borderRadius: 5, color: "#000", opacity: "0.7", width: "100%"}}>

                        {items.map(item => {
                        return(
                            <>
                                <ExtendCardDesktop item={item}/>
                            </>
                        )
                        })}

                    </Container>

                        <List sx={{height: 180, backgroundColor: "#fff", borderRadius: 5, color: "#000", opacity: "0.6", margin: "0 auto", maxWidth: 150, mt: 3}} component="nav" aria-label="mailbox folders">
                        <ListItem sx={{height: 45}}>
                            <ListItemText align="center"  primary="Sous-total" secondary={ccyFormat(subTotal)}/>
                        </ListItem>
                        <Divider />
                        <ListItem divider sx={{height: 45}}>
                            <ListItemText align="center" primary="Expédition" secondary={ccyFormat(shipping)}/>
                        </ListItem>
                        <ListItem sx={{height: 45}}>
                            <ListItemText align="center"  primary="10 % de TVA"/>
                        </ListItem>
                        <Divider light />
                        <ListItem sx={{height: 45}}>
                            <ListItemText align="center"  primary="Total" secondary={total.toFixed(2)} />
                        </ListItem>
                        </List>

                        <Button variant="contained" onClick={() => reset()}>Annuler Commande</Button>
                        <Button variant="contained" onClick={handleClick}>Payer</Button>

                </Container>

            </Box>
        </>
    );
}
