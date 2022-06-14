import React, {useState} from 'react';
import { Backdrop, Box, Modal, Fade, ButtonGroup,Typography, Button, FormControl, MenuItem, Select, InputLabel, CardMedia, CardContent, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
// REDUX + FILES
import {useDispatch} from 'react-redux'
import {addtoCart} from '../../../utils/redux/Actions'
// ICONS
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
// STYLES
import { ButtonAddCardModal, ButtonCloseModal } from '../../../styles/Material_UI/components/home/listCategoryAndProducts/StylesModalProduct';




const style = {
    bgcolor: 'white',
    border: '5px solid #000', 
    borderRadius: 10,       
    boxShadow: "rgb(38, 57, 77) 0px 20px 90px 20px",
    left: '50%',
    padding: 4,    
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 150,
};

export default function ModalProductMobile({item}) {
    const numbersQty = [0,1,2,3,4,5,6,7,8,9,10]


    const dispatch = useDispatch()
    const add = (item, quantity) => {
        dispatch(addtoCart(item, quantity))
    }

    // MODAL
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // QUANTITY
    const [qty, setQty] = useState(1); 
    const handleChange = (event) => {
        setQty(event.target.value);
    };

    return (
        <>
        <Button onClick={handleOpen}>Voir Produit</Button>
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
                <Fade in={open}>
                    <Box sx={style}>
                        <ButtonCloseModal variant="contained" sx={{}} onClick={handleClose}>
                            <CloseIcon />
                        </ButtonCloseModal>
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.img}
                            alt={item.title}
                        />

                        <CardContent>
                            <Typography variant="h5">{item.title}</Typography>
                            <Typography>{item.desc}</Typography>
                            <Typography>{item.price} € / {item.unit}</Typography>
                        </CardContent>

                        <CardActions
                            style={{
                                display: "flex",
                                flexDirection: "column"
                            }}
                        >

                            {/* BTNS QUANTITY VERSUS MOBILE */}
                            <ButtonGroup disableElevation variant="contained" style={{margin: 20}}>
                                <Button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</Button>
                                {qty}
                                <Button onClick={() => setQty(qty +1)}>+</Button>
                            </ButtonGroup>
                            
                            {/* BTN ADD CART */}
                            <Link to="/home">
                                <ButtonAddCardModal
                                    variant="contained"
                                    onClick={() => {
                                        add(item, qty)
                                        setOpen(false);
                                    }}>
                                    
                                    <AddShoppingCartIcon />
                                    
                                </ButtonAddCardModal>                    
                            </Link>

                        </CardActions>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}