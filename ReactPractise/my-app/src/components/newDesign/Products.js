import { Grid } from "@material-ui/core"
import React from "react"
import Product from "./Product"

const Products = () => {
    return (
        <Grid container xs={12} lg={6} >
            <Product imageUrl={`/images/leather-images/IMG-20210730-WA0027.jpg`} price="599.00"/>
            <Product imageUrl={`/images/leather-images/IMG-20210730-WA0014.jpg`} price="999.00"/>
            <Product imageUrl={`/images/leather-images/IMG-20210730-WA0018.jpg`} price="699.00"/>
        </Grid>
    )
}

export default Products
