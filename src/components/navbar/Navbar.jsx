import React, { useEffect } from 'react'
import {
    Menu,
    IconButton,
    MenuItem,
    Typography,
    AppBar,
    Toolbar,
} from '@material-ui/core/'
import MoreIcon from '@material-ui/icons/MoreVert'
import CartIcon from '../cart/CartIcon'
import useStyles from './Style'
import { NavLink, Link } from 'react-router-dom'
import { getFirestore } from '../../firebase'

// const categories = [
//     { name: 'Notebooks', id: 'notebooks' },
//     { name: 'Audio', id: 'audio' },
//     { name: 'Smartwatches', id: 'smartwatches' },
// ]

const Navbar = () => {
    const classes = useStyles()

    // conectando categories con firebase:

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = db.collection('categories')
        itemCollection
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('no results')
                } else {
                    querySnapshot.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    }))
                }
            })
            .catch((error) => {
                console.log('Error searching categories', error)
            })
    }, [])

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }
//cmponnete menu

    const mobileMenuId = 'primary-search-account-menu-mobile'
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <Link
                className={classes.categoriaMobile}
                to="/categories/notebooks"
            >
                <MenuItem>LAPTOP</MenuItem>
            </Link>
            <Link className={classes.categoriaMobile} to="/categories/audio">
                <MenuItem>AURICULARES</MenuItem>
            </Link>
            <Link
                className={classes.categoriaMobile}
                to="/categories/smartwatches"
            >
                <MenuItem>RELOJ</MenuItem>
            </Link>
        </Menu>
    )

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <NavLink to="/">
                            <img
                                className={classes.title}
                                src="https://i.pinimg.com/736x/c3/a0/12/c3a012a8108948233efb036e1c169511.jpg"
                                alt="imagen-logo"
                            />
                        </NavLink>
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Link className={classes.categoria} to="/">
                            <MenuItem>PRODUCTOS</MenuItem>
                        </Link>
                        <Link
                            className={classes.categoria}
                            to="/categories/notebooks"
                        >
                            <MenuItem>LAPTOP</MenuItem>
                        </Link>
                        <Link
                            className={classes.categoria}
                            to="/categories/audio"
                        >
                            <MenuItem>AURICULARES</MenuItem>
                        </Link>
                        <Link
                            className={classes.categoria}
                            to="/categories/smartwatches"
                        >
                            <MenuItem>RELOJ</MenuItem>
                        </Link>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                    <NavLink to="/cart">
                        <CartIcon />
                    </NavLink>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    )
}

export default Navbar
