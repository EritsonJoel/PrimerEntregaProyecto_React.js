import React from 'react'
import { Box, Button } from '@material-ui/core' ///importacion de 
import { Link } from 'react-router-dom'

const Item = ({ item: { id, name, description, price, img } }) => (
    <Box flexDirection="colum" marginTop="60px">
        <h2>{name}</h2>
        <div style={{ paddingBottom: '20px' }}>
            <span>Precio: ${price}</span>
        </div>
        <div>
            <Link to={`/item/${id}`}>
                <img src={img} alt="img" width="350" />
            </Link>
        </div>
        <Link
            to={`/item/${id}`}
            style={{ textDecoration: 'none', color: 'blak' }}
        >
            <Button variant="contained" style={{ backgroundColor: '	#000080' , color: 'white' }}>
                DETALLE DE PRODUCTO
            </Button>
        </Link>
    </Box>
)

export default Item
