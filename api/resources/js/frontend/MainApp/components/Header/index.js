import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logout from "./Logout";
import useWindowWidth from "../useWindowWidth";
import "./header.scss";
import { useGlobalContext } from "../../../context";
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const StyledMenu = withStyles({
  paper: {
        backgroundColor: '#fdd46d',
        borderRadius: '0px',
        width: '200px',
        margin: 0,
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        backgroundColor: '#fdd46d',
        '&:hover': {
            backgroundColor: 'brown',  
    }, 
    
    '&:focus': {
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
    
  },
}))(MenuItem);

const useStyles = makeStyles({
    root: {
        color: 'black',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        '&:hover': {
            color: 'white',
        },
    
        '&:focus': {
            color: 'white',
        },
    }, 
});

const Header = () => {
    const { user } = useGlobalContext();
    const { pathname } = useLocation();
    const width = useWindowWidth();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    console.log(width)

    if (width <= 700) {
        return (
            <header>
            <div className="logo">
                <img src="/logo/toast.svg" alt="" />
                <h3>Micro Brew</h3>
                </div>
                
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
                >
                <MenuIcon />
            </IconButton>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemText>
                        <Link to={`/dashboard/${user.id}`} className={classes.root}>Dashboard</Link>
                    </ListItemText>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText >
                        <Link to="/feed" className={classes.root}>Feed</Link>
                    </ListItemText>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText >
                        <Link to="/map" className={classes.root}>Map</Link>
                    </ListItemText>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText >
                        <Link to="/profile" className={classes.root}>Profile</Link>
                    </ListItemText>
                    </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText >
                         <Logout className={classes.root}/>
                    </ListItemText>
                </StyledMenuItem>
            </StyledMenu>    
        </header>
        )
    } else {
        return (
            <header>
                <div className="logo">
                    <img src="/logo/toast.svg" alt="" />
                    <h3>Micro Brew</h3>
                </div>
                <nav>
                    <ul>
                        <li className={/dashboard/.test(pathname) ? "active" : ""}>
                            <Link to={`/dashboard/${user.id}`}>Dashboard</Link>
                        </li>
                        <li className={pathname == "/feed" ? "active" : ""}>
                            <Link to="/feed">Feed</Link>
                        </li>
                        <li className={pathname == "/map" ? "active" : ""}>
                            <Link to="/map">Map</Link>
                        </li>
                        <li className={pathname == "/profile" ? "active" : ""}>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                </nav>
    
                <Logout />
            </header>
        );
    }

};

export default Header;
