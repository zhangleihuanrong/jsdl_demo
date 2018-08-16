import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'

import logo from './logo.svg';
import MenuIcon from '@material-ui/icons/Menu'

// interface Prop {
//     root: {flexGrow: Number};
//     flex: {flexGrow: Number};
//     menuButton: {marginLeft: Number, marginRight: Number};
//   };

// const styles: Prop = {
//     root: {
//       flexGrow: 1,
//     },
//     flex: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginLeft: -12,
//       marginRight: 20,
//     },
//   };
  
const NavBar = () => {
    //const classes = prop;
    return(
        <div /*className={classes.root}*/>
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" /*className={classes.flex}*/>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
                    <Typography variant="title" color="inherit">
                    <img src={logo} width='32px' height='32px'/>React & Material-UI Sample Application
                    </Typography>
                </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar;