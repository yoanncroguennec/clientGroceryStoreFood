import React, { useState, useContext, useEffect } from 'react';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Box, Button, ButtonGroup, CardActions, Container, Divider, Typography } from '@mui/material';
import { Link, useLocation } from "react-router-dom"
// CONTEXT
import { UserProfileContext } from "../../utils/context/UserProfileContext"
// REDUX + FILES
import { useSelector, useDispatch } from "react-redux"
import { resetCart } from "../../utils/redux/Actions"
// STRIPE
import Stripe from '../../components/cart/payment/stripe/Stripe';



export default function SummaryCheckout(){
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

    const [subTotal, setSubTotal] = useState(0.00)
    const [total, setTotal] = useState(0.00)
    const shipping = 10.00
    const items = useSelector(state => state.items)
    // console.log(items)

    let location = useLocation();

    useEffect(() => {
      let totals = items.map(item => {
        return item.quantity * item.details.price
      })
      setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0))
      setTotal(subTotal + shipping)
      // console.log(`Subtotal:  €${subTotal} `)
      // console.log(`You have ${items.length} in your cart`)
    }, [items, subTotal, total]) 


    const userProfile = useContext(UserProfileContext)


    

    // REDUX
    const dispatch = useDispatch()

    const reset = () => {
        dispatch(resetCart())
    }


    return (
        <Box
          component="form"
          width= {matches ? "90%" : 450}
          sx={{
            alignItems: "center",
            backgroundImage: "url('/assets/imgs/cart/bgSummaryCheckout.jpg')",
            backgroundSize: "cover",
            border: "3px solid black",
            borderRadius: 10,
            boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "0 auto",
            opacity: "0.9",
            mb: 5,
            mt: 5,
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant='h4' style={{padding: 2, fontWeight: "bold"}}>RÉCAPITULATIF :</Typography>

          <div>
            <Container style={{backgroundColor: "#000", borderRadius: 15, color: "#fff", opacity: "0.5", display: "flex", flexDirection: "column"}}>
              <Typography style={{marginTop: 10, marginBottom: 10}}>
                {location.state.lastNameUpperCase} {location.state.firstCapitalLetterFirstName}
              </Typography>
              <Typography>{location.state.email}</Typography>
              {userProfile && 
                <>
                  <Typography style={{marginTop: 10, marginBottom: 10}}>{userProfile.address}</Typography>
                  <Typography>{userProfile.zipCode} {userProfile.city}</Typography>
                </>
              }
            </Container>            
          </div>

          <div>
          <Container sx={{backgroundColor: "#000", borderRadius: 5, color: "#fff", opacity: "0.5", width: "90%" }}>
            <Container sx={{ display: "flex", flexWrap: "wrap" }}>
              <Typography variant= {matches ? "h6" : "h5"} style={{padding: 20}}>Liste de vos courses :</Typography>

            {/* LIST OF PRODUCTS PURCHASED */}
            {items.map(item => {
              return(
                <div style={{display: "flex", backdropFilter: "blur(10px)", flexWrap: "wrap", marginBottom: 2}}>
                  <img
                    width= {matches ? "50" : "70"}
                    height= {matches ? "50" : "70"}
                    src={item.details.img}
                    alt={item.details.title}
                  />
                  <div style={{display: "flex", flexDirection: "column"}}>
                    <Typography>{item.quantity} {item.details.title}</Typography>
                    <Typography>{(item.quantity *  item.details.price).toFixed(2)} €</Typography>
                  </div>
                </div>
              )
            })}

            
          </Container> 
                  <Divider orientation="horizontal" sx={{background: "white", marginBottom: 3}} />
          <Typography align='center'> Frais de livraison : {shipping} €</Typography>
          <Typography align='center' sx={{fontWeight: "bold", fontSize: "1.8em", textShadow: "2px 2px #FF0000"}}>Total : {total.toFixed(2)}</Typography>
          </Container>

          <ButtonGroup disableElevation sx={{margin: "0 auto"}} variant="contained">
            <Link to="/home">
              <Button onClick={() => reset()}>ANNULEZ</Button>
            </Link>
            <Link to="/checkoutStripe"></Link>
            <Stripe email={location.state.email} /> 
          </ButtonGroup>
          </div>
      </Box>
    );
}