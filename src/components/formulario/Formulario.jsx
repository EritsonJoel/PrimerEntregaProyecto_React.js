import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AlertFailForm from './AlertFailForm'

const Formulario = ({ createOrder }) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '36ch',
            },
        },
    }))

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        adress: '',
        email: '',
        emailConfirmation: '',
        phone: '',
    })
    const [open, setOpen] = React.useState(false)

//funcion para capturar los que ingreso por los input

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
    }

    const handleOnclick = () => {
        const { firstName, lastName, adress, email, phone } = form
        createOrder({ firstName, lastName, adress, email, phone })
    }

    const classes = useStyles()

    const disabled = !(
        form.email.length &&
        form.firstName.length &&
        form.lastName.length &&
        form.adress.length &&
        form.emailConfirmation.length &&
        form.phone.length > 0 &&
        form.email === form.emailConfirmation
    )

    return (
        <>
            <Box display="flex" justifyContent="center" margin="60px 0">
                <form
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                    fullWidth={true}
                >
                    <h2>Complete sus datos!! por favor</h2>
                    <Box>
                        <TextField
                            required
                            label="Nombre"
                            Value={form.firstName}
                            placeholder="Andrea"
                            multiline
                            name="Nombre"
                            variant="outlined"
                            onChange={handleChange}
                            helperText="First name"
                        />
                        <TextField
                            required
                            label="Apellidos"
                            Value={form.lastName}
                            placeholder="Bernales Jorge"
                            multiline
                            name="Apellid"
                            variant="outlined"
                            onChange={handleChange}
                           
                        />
                    </Box>
                    <Box>
                        <TextField
                            required
                            label="Dirección"
                            Value={form.adress}
                            placeholder="Av manco capac Nº 1892 -  LIMA"
                            multiline
                            name="Dirección"
                            variant="outlined"
                            onChange={handleChange}
                           
                        />
                        <TextField
                            required
                            label="Correo Electronico"
                            Value={form.email}
                            placeholder="andrea@gmail.com"
                            multiline
                            name="Correo Electronico"
                            variant="outlined"
                            onChange={handleChange}
                        
                        />
                    </Box>
                    <Box>
                        <TextField
                            required
                            label="Repetir email"
                            Value={form.emailConfirmation}
                            placeholder="andrea@gmail.com"
                            multiline
                            name="emailConfirmation"
                            variant="outlined"
                            onChange={handleChange}
                            helperText="Repeat email"
                        />
                        <TextField
                            required
                            label="15111008"
                            Value={form.phone}
                            placeholder="Teléfono de contacto"
                            multiline
                            name="phone"
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </Box>
                    <Box display="flex" justifyContent=" flex-end" p={1}>
                        {disabled ? (
                            <AlertFailForm open={open} setOpen={setOpen} />
                        ) : (
                            <Button
                                variant="contained"
                                style={{
                                    backgroundColor: '#f7d04b',
                                    color: '#000',
                                }}
                                onClick={handleOnclick}
                            >
                                Finish buying
                            </Button>
                        )}
                    </Box>
                </form>
            </Box>
        </>
    )
}

export default Formulario
