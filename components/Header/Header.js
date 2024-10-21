'use client';
 
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  InputBase,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
 
const Header = () => {
  const [anchorElMarket, setAnchorElMarket] = React.useState(null);
  const [anchorElPages, setAnchorElPages] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElVendor, setAnchorElVendor] = React.useState(null);
 
  const handleMenuOpen = (event, menuSetter) => {
    menuSetter(event.currentTarget);
  };
 
  const handleMenuClose = (menuSetter) => {
    menuSetter(null);
  };
 
  return (
    <AppBar position="static" sx={{ backgroundColor: '#f8f9fa', color: 'black', padding: '10px 0' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="/market.png" alt="Market" style={{ width: '30px', marginRight: '8px' }} />
          <Typography variant="h6" component="div" sx={{ color: 'black', fontWeight: 'bold' }}>
            Baazar
          </Typography>
        </Box>
 
        {/* Barra de Pesquisa */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', marginX: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#e0e0e0', borderRadius: 1, paddingRight: 2, width: '400px' }}>
            <SearchIcon sx={{ marginLeft: 2, color: 'gray' }} />
            <InputBase
              placeholder="Pesquisar…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ marginLeft: 1, flex: 1, padding: '8px 0' }}
            />
          </Box>
        </Box>
 
        {/* Menu de Opções */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Home Menu */}
          <Button
            endIcon={<ArrowDropDownIcon />}
            sx={{ color: 'black', textTransform: 'none', fontSize: '1rem', marginRight: 2 }}
            onClick={(event) => handleMenuOpen(event, setAnchorElMarket)}
          >
            Home
          </Button>
          <Menu
            anchorEl={anchorElMarket}
            open={Boolean(anchorElMarket)}
            onClose={() => handleMenuClose(setAnchorElMarket)}
          >
            {['Gadget', 'Grocery', 'Fashion', 'Furniture', 'Medical', 'Gift Store', 'Health and Beauty'].map(item => (
              <MenuItem key={item}>{item}</MenuItem>
            ))}
          </Menu>
 
          {/* Pages Menu */}
          <Button
            endIcon={<ArrowDropDownIcon />}
            sx={{ color: 'black', textTransform: 'none', fontSize: '1rem', marginRight: 2 }}
            onClick={(event) => handleMenuOpen(event, setAnchorElPages)}
          >
            Pages
          </Button>
          <Menu
            anchorEl={anchorElPages}
            open={Boolean(anchorElPages)}
            onClose={() => handleMenuClose(setAnchorElPages)}
          >
            {['Sale Page', 'Vendor', 'Shop', 'Auth'].map(item => (
              <MenuItem key={item}>{item}</MenuItem>
            ))}
          </Menu>
 
          {/* User Account Menu */}
          <Button
            endIcon={<ArrowDropDownIcon />}
            sx={{ color: 'black', textTransform: 'none', fontSize: '1rem', marginRight: 2 }}
            onClick={(event) => handleMenuOpen(event, setAnchorElUser)}
          >
            User Account
          </Button>
          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={() => handleMenuClose(setAnchorElUser)}
          >
            {['Orders', 'Profile', 'Address', 'Support Tickets', 'Wishlist'].map(item => (
              <MenuItem key={item}>{item}</MenuItem>
            ))}
          </Menu>
 
          {/* Vendor Account Menu */}
          <Button
            endIcon={<ArrowDropDownIcon />}
            sx={{ color: 'black', textTransform: 'none', fontSize: '1rem', marginRight: 2 }}
            onClick={(event) => handleMenuOpen(event, setAnchorElVendor)}
          >
            Vendor Account
          </Button>
          <Menu
            anchorEl={anchorElVendor}
            open={Boolean(anchorElVendor)}
            onClose={() => handleMenuClose(setAnchorElVendor)}
          >
            {['Dashboard', 'Products', 'Orders', 'Profile'].map(item => (
              <MenuItem key={item}>{item}</MenuItem>
            ))}
          </Menu>
        </Box>
 
        {/* Ícones do Usuário e Carrinho */}
        <IconButton sx={{ marginLeft: 2 }} href="/login">
          <AccountCircle sx={{ color: 'black' }} />
        </IconButton>
        <IconButton href="/cart">
          <ShoppingCartIcon sx={{ color: 'black' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
 
export default Header;
 