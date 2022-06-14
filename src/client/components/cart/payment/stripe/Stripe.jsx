import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Backdrop, Button, Container, Modal, Typography } from "@mui/material";
import axios from "axios";
import { Form, Field } from "react-final-form";
// REDUX + FILES
import { useSelector } from "react-redux"
// COMPONENTS
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from "./CardUtilsStripe";
// STYLES
import Card from "../../../../styles/Material_UI/components/cart/StylesCardStripe";
import Styles from "../../../../styles/Material_UI/components/cart/StylesBtn";



axios.defaults.baseURL = "/api";

const sleep = (ms) => new Promise(
    (resolve) => setTimeout(resolve, ms)
);


export default function Stripe({ email}) {

    // MODAL
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    // TOTAL CALCUL
    const [subTotal, setSubTotal] = useState(0.00)
    const [total, setTotal] = useState(0.00)
    const shipping = 10.00
    const items = useSelector(state => state.items)



    useEffect(() => {
      let totals = items.map(item => {
        return item.quantity * item.details.price
      })

      setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0))
      setTotal((subTotal + shipping).toFixed(2) * 100)
      // console.log(`Subtotal:  €${subTotal} `)
      // console.log(`You have ${items.length} in your cart`)
    //   console.log(`total:  €${total} `)
    }, [items, subTotal, total])




    
    useEffect(() => {
        if (!window.document.getElementById("stripe-script")) {
        var s = window.document.createElement("script");
        s.id = "stripe-script";
        s.type = "text/javascript";
        s.src = "https://js.stripe.com/v2/";
        s.onload = () => {
            // Clé Public
            window["Stripe"].setPublishableKey(
            "pk_test_51IMB74DCutNgHcFWaidAYqaR0regtqB4UnXtHZpYQWVF0F9k98zWZ0WP9ceBfRoE3SNZ4xiN8pjePOiHn6muiC5r00CdbpopJB"
            );
        };
        window.document.body.appendChild(s);
        }
    }, []);

    const navigate = useNavigate()

    const onSubmit = async (values) => {
        await sleep(200);
        try {
        // Je créer un token
        window.Stripe.card.createToken(
            {
            number: values.number,
            exp_month: values.expiry.split("/")[0],
            exp_year: values.expiry.split("/")[1],
            cvc: values.cvc,
            name: values.name,
            },
            (status, response) => {
            if (status === 200) {
                axios
                .post("/stripe-payment", {
                    token: response,
                    email: values.email,
                    amount: (total),
                    // amount: values.amount,
                })
                // .then((res) => window.alert(JSON.stringify(res.data, 0, 2)))

                .catch((err) => console.log(err));
            } else {
                console.log(response.error.message);
            }
            }
        );
        }catch (error) {}


        await sleep(300);

              var result = window.confirm("Paiment réussi !\n Merci de votre visite 😀😉\nVoulez-vous revenir sur le site ?");

              if(result)  {
                  window.back();
                  localStorage.clear();
                  navigate("/home")
              } else {
                  window.close();
                  localStorage.clear();
                  navigate("/home")
              }


        // alert("Paiment réussi !\n Merci de votre visite 😀😉");
    };

    return (
        <>
        <Button onClick={handleOpen}>PAYEZ</Button>
        

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
        <Styles>
        <Form
            onSubmit={onSubmit}
            render={({
            handleSubmit,
            form,
            submitting,
            pristine,
            values,
            active,
            }) => {
            return (

                <form onSubmit={handleSubmit}>
                <Card
                    number={values.number || ""}
                    name={values.name || ""}
                    expiry={values.expiry || ""}
                    cvc={values.cvc || ""}
                    focused={active}
                />
                <div>
                    <Field
                    name="email"
                    disabled="true"
                    component="input"
                    type="text"
                    placeholder={email}
                    />
                </div>
                <div>
                    <Field
                    name="number"
                    component="input"
                    type="text"
                    pattern="[\d| ]{16,22}"
                    placeholder="Card Number"
                    format={formatCreditCardNumber}
                    />
                </div>
                <div>
                    <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Name"
                    />
                </div>
                <div>
                    <Field
                    name="expiry"
                    component="input"
                    type="text"
                    pattern="\d\d/\d\d"
                    placeholder="Valid Thru"
                    format={formatExpirationDate}
                    style={{width: "50%"}}
                    />
                    <Field
                    name="cvc"
                    component="input"
                    type="text"
                    pattern="\d{3,4}"
                    placeholder="CVC"
                    format={formatCVC}
                    style={{width: "50%"}}
                    />
                </div>
                <div className="buttons">
                    <button
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                    >
                    EFFACEZ
                    </button>
                    <button type="submit" disabled={submitting}>
                    PAYEZ
                    </button>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Typography align="center" variant="h5">
                        CODE paiement le ligne :
                    </Typography>
                    <Typography align="center" variant="h5">
                        Numéro CB : "4242 4242 4242 4242"
                    </Typography>
                    <Typography align="center" variant="h5">
                        NOM : " MR EXEMPLE"
                    </Typography>
                    <Typography align="center" variant="h5" sx={{marginBottom: '200px'}}>
                        Valid : "12/24" & "123"
                    </Typography>     

                </div>
                {/* <h2>Values</h2> */}
                {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                </form>
            );
            }}

        />


        </Styles>

        </Modal>

        </>        
    )
}
