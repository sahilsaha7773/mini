import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

function Navbar() {
    const [user, setUser] = useState(false);
    useEffect(() => {
        if(Cookies.get("token")) {
            setUser(true)
        }
    }, []);
    function handleLogout(e){
        e.preventDefault();
        Cookies.remove('token');
        setUser(false);
        window.location.href = '/#/login';
    }
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <Menu />
                </IconButton> */}
                <Typography variant="h6" className={classes.title}>
                    SML URL Shortener
                </Typography>
                {user ?
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                :(
                    <Button color="inherit" onClick={window.location.href = '/#/login'}>Login</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
