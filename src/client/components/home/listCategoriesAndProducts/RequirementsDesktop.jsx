import React, {useState} from 'react';
import { Container, Box, Grid, Typography, TextField } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { CircleLoader } from 'react-spinners'
// HOOKS
import useFetch from "../../../utils/hooks/useFetch";
// STYLES
import { Image, ImageBackdrop, ImageButton, ImageMarked, ImageSrc } from '../../../styles/Material_UI/components/home/listCategoryAndProducts/StylesRequirements';
// COMPONENTS
import SearchItemDesktop from './SearchItemDesktop';




export default function RequirementsDesktop({loadCategory}) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const [typeProduct, setTypeProduct] = useState("");
    const [titleProduct, setTitleProduct] = useState("");
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    // IMPORT DATA API
    const {categories } = useFetch("/products/countByType");
    // console.log(categories)

    const {data, loading, error, reFetch } = useFetch(`/products?type=${typeProduct}&min=${min || 0}&max=${max || 999}`)
    // console.log(data);

    // IMGS CATEGORIES
    const imgs = [
        "/assets/imgs/menuCategoryProducts/fruits.jpg",
        "/assets/imgs/menuCategoryProducts/vegetables.jpg",
        "/assets/imgs/menuCategoryProducts/freshProducts.png",
        "/assets/imgs/menuCategoryProducts/grocery.jpeg",
        "/assets/imgs/menuCategoryProducts/drinks.jpg"
    ]


    return (
        <>
            <Box
                id="products"
                sx={{
                    // backgroundColor: "red",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    height: "300px",
                }}
            >
                <Typography variant='h4' sx={{paddingTop: 5, paddingBottom: 5}}>
                    Cliquez sur une catégorie, pour voir les Produits :
                </Typography>

                {/* SECTION LIST irementsDesktop matches={matches}/>CATEGORIES */}
                <Container>
                    {categories && imgs.map((img, i) => {
                        return(
                            <ImageButton
                                focusRipple
                                key={categories[i]?.type}
                                style={{
                                    height: 150,
                                    width: "20%",
                                }}
                                onClick={() => setTypeProduct(
                                    ([categories[i]?.type.toLowerCase()]),
                                    console.log((categories[i]?.type))
                                )}
                            >
                                <ImageSrc style={{ backgroundImage: `url(${img})` }} />
                                <ImageBackdrop className="MuiImageBackdrop-root" />
                                <Image>
                                    <Typography
                                        component="span"
                                        variant="subtitle1"
                                        color="inherit"
                                        sx={{
                                            position: 'relative',
                                            p: 4,
                                            pt: 2,
                                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                        }}
                                    >
                                        {categories[i]?.type}
                                        <ImageMarked className="MuiImageMarked-root" />
                                    </Typography>
                                </Image>
                            </ImageButton>
                    )
                })}
                </Container>
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

                <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    onChange={e => setMin (e.target.value)}  
                    placeholder="Prix Minimun"
                    step="0.01"
                    style={{border: "2px solid blue", borderRadius: 10, padding: 7, textAlign: "center",width: "100px"}}
                />
                <input
                    type="number"
                    min={0}
                    max={999}
                    className="lsOptionInput"
                    onChange={e => setMax (e.target.value)}  
                    placeholder="Prix Maximum"
                    step="0.01"
                    style={{border: "2px solid red", borderRadius: 10, padding: 7, textAlign: "center",width: "100px"}}
                />
            </Container>

            {/* SECTION DISPLAYING PRODUCTS ACCORDING TO THE SEARCH */}
            <Box sx={{ width: '60%', margin: "0 auto" }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {loading ? (
                        <div style={{margin: "0 auto", height: 50, width: 200, padding: 50}}>
                            <CircleLoader size={100} color={"#3d2514"} /> 
                        </div>
                   ) : (
                        <>
                            {data.map((item) => (
                                <Grid item xs={3}>
                                    <SearchItemDesktop item={item} key={item._id} />
                                </Grid>
                            ))}
                        </>
                    )}
                </Grid>
            </Box>
        </> 
    );
}