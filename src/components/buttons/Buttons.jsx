import React from 'react'
import { Box, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

//componente de los Butons : Continuar y ver mas

const Buttons = ({ setShowForm }) => {
    return (
        <>
            <Box display="flex" justifyContent=" flex-end" p={1}>
                <Button
                    variant="contained"
                    style={{ backgroundColor: '#73C6B6' }}
                    onClick={() => setShowForm(true)}
                >
                      CONTINUAR 
                </Button>
            </Box>
            <Box display="flex" justifyContent=" flex-end" p={1} mb={10}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: '##73C6B6' }}
                    >
                      VER MAS PRODUCTOS
                    </Button>
                </Link>
            </Box>
        </>
    )
}

export default Buttons
