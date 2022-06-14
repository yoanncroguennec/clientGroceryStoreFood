import React, {useState} from 'react';
import { Backdrop, Box, Modal, Fade, ButtonGroup,Typography, Button, FormControl, MenuItem, Select, InputLabel, CardMedia, CardContent, CardActions, ToggleButton } from '@mui/material';
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
    border: '2px solid #000',        
    boxShadow: 24,
    left: '50%',
    padding: 4,    
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
};

export default function ModalProductDesktop({item}) {
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
                        <ButtonCloseModal variant="contained" sx={{}} onClick={handleClose}><CloseIcon /></ButtonCloseModal>
                        <CardMedia
                            component="img"
                            height="80"
                            width="40"
                            image={item.img}
                            alt={item.title}
                        />

                        <CardContent>
                            <Typography variant="h5">{item.title}</Typography>
                            <Typography>{item.desc}</Typography>
                            <Typography>{item.price} € / {item.unit}</Typography>
                        </CardContent>

                        <CardActions>
                            
                            {/* DROPDOWN */}
                            <FormControl fullWidth>
                                <InputLabel id="">Quantité(s)</InputLabel>
                                <Select
                                id=""
                                value={qty}
                                label="Quantité(s)"
                                onChange={handleChange}
                                >
                                {numbersQty.map((numberQty)=> {
                                    return(
                                        <MenuItem value={numberQty}>{numberQty}</MenuItem>
                                    )
                                })}
                                </Select>
                            </FormControl>
                            
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