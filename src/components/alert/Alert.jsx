import React from 'react'
import { Button, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'



//componenete de alertaa , si no Hay productos seleccionados en el carrito , me mostrara esta alerta
const Alert = ({ text }) => {
    
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                padding="80px"
                margin="80px 0"
            >
                <div>
                    <h2 style={{ marginBottom: '20px' }}>{text}</h2>
                </div>
                <div>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: '#f7d04b' }}
                        >
                           VER PRODUCTOS
                        </Button>
                    </Link>
                </div>
            </Box>
        </>
    )
}

export default Alert
