import React, {useState} from 'react';
import { Container, Box, Grid, Typography, TextField, InputLabel, MenuItem, FormControl, Select} from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
// HOOKS
import useFetch from "../../../utils/hooks/useFetch";
// COMPONENTS
import SearchItemMobile from './SearchItemMobile';






export default function RequirementsMobile({loadCategory}) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const [typeProduct, setTypeProduct] = useState("");
    const [max, setMax] = useState(undefined);

    // IMPORT DATA API
    const {categories } = useFetch("/products/countByType");
    // console.log(categories)

    const {data, loading, error, reFetch } = useFetch(`/products?type=${typeProduct}&max=${max || 999}`)
    // console.log(data);


    return (
        <>
            <Box sx={{ minWidth: 120, paddingTop: 5}}>
                <FormControl fullWidth>
                    <InputLabel id="">Choissir une Catégorie</InputLabel>
                    <Select
                    id=""
                    >
                        {categories.map((ctegory, i) => {
                            return(
                                <MenuItem
                                    key={categories[i]?.type}
                                    onClick={() => setTypeProduct(
                                        ([categories[i]?.type.toLowerCase()]),
                                        // console.log((categories[i]?.type))
                                    )}
                                    value={categories[i]?.type}
                                >{categories[i]?.type}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </Box>


            {/* SECTION TEXTFIELD SEARCH PRODUCT & BY PRICE */}
            <Container
                component="form"
                sx={{
                    alignItems: "center",
                    display: "flex",
                    flexWrap: "nowrap",
                    height: "120px",
                    '& > :not(style)': { m: 1, width: '20ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Nom du produit" variant="outlined" onChange={e => setTypeProduct (e.target.value)}  />
                <TextField
                    id="outlined-number"
                    label="Prix Maximum"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => setMax (e.target.value)} 
                />
            </Container>


            {/* SECTION DISPLAYING PRODUCTS ACCORDING TO THE SEARCH */}
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {loading ? (
                        "loading"
                    ) : (
                        <>
                            {data.map((item) => (
                                <Grid item xs={6}>
                                    <SearchItemMobile item={item} key={item._id} />
                                </Grid>
                            ))}
                        </>
                    )}
                </Grid>
            </Box>
        </> 
    );
}