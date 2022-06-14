import React, {useState} from 'react'
import { Button, ButtonGroup, FormControl, InputLabel, List, ListItem, MenuItem, Select, Typography } from '@mui/material';
// REDUX 
import {useDispatch} from 'react-redux'
import {updateCart, removeFromCart} from '../../utils/redux/Actions'




export default function ExtendCardDesktop(props) {
    const { id, quantity, details } = props.item
    const item = details
    
    // Redux
    const dispatch = useDispatch()
    const update = quantity => {
        dispatch(updateCart(id, quantity))
    }
    const remove = id => {
        dispatch(removeFromCart(id))
    }

    // QUANTITY
    const numbersQty = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    const [qty, setQty] = useState(quantity)
    const handleChange = (event) => {
        setQty(event.target.value);
        update(event.target.value);
    };

  const ITEM_HEIGHT = 35;
  const ITEM_PADDING_TOP = 2;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 10,
      },
    },
  };

    return (
        <List sx={{display: "flex", flexWrap: "wrap", width: "450px"}}>
          <ListItem>
            <img
              width="70"
              height="70"
              src={item.img}
              alt={item.title}
            />

          <Typography sx={{marginRight: 1, width: 100}}>{item.title}</Typography>
          <>

            {/* DROPDOWN QUANTITY */}
            <FormControl sx={{marginRight: 5}}>
              <InputLabel id="">Quantité(s)</InputLabel>
              <Select
                value={qty}
                sx={{background: "white", width: 80}}
                align="center"
                label="Quantité(s)"
                onChange={handleChange}
                MenuProps={MenuProps}
              >
                {numbersQty.map((numberQty)=> {
                  return(
                    <MenuItem
                      key={numberQty}
                      value={numberQty}>
                      {numberQty}
                    </MenuItem>
                  )
                })}                            
              </Select>
            </FormControl>
          </>
          <Typography sx={{marginRight: 1, width: 100}}>{item.price} €</Typography>
          <Typography sx={{marginRight: 1, width: 100}}>
            {(quantity *  item.price).toFixed(2)} €
          </Typography>
            <Button variant="contained" sx={{background: "red", fontSize: 20, color: "black"}} onClick={() => remove(id)}>
              X
            </Button>
          </ListItem>
        </List>
    )
}
