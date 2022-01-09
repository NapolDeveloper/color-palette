import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// material ui
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';

import Colors from '../../styles/Colors';

const useStyles = makeStyles({
  headerContainer: {
    backgroundColor: Colors.primaryColor,
    color: Colors.colorBlack
  }
});

// const pages = ['MyBox', 'Others', 'list3'];
const pages = [
  {
    text: 'MyBox',
    router: 'mybox'
  },
  { text: 'Others', router: 'others' }
];
// const settings = ['Profile', 'Account', 'Dashboard', 'Login'];

const settings = [
  { text: 'Profile', router: 'profile' },
  { text: 'Account', router: 'account' },
  { text: 'Dashboard', router: 'dashboard' },
  { text: 'Login', router: 'login' }
];

const Header: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  // Menu
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // navigate
  const handleClickPage = (router: string) => {
    navigate(`/${router}`);
    handleCloseNavMenu();
  };
  const handleClickMenu = (router: string) => {
    navigate(`/${router}`);
    handleCloseUserMenu(); // 메뉴 클릭시 메뉴 닫힘
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl' className={classes.headerContainer}>
        <Toolbar disableGutters>
          <Typography
            onClick={() => {
              navigate('/');
            }}
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            COLOR-BOX
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={() => handleClickPage(page.router)}>
                  <Typography textAlign='center'>{page.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            COLOR-BOX
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.text}
                onClick={() => handleClickPage(page.router)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.text}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.text} onClick={() => handleClickMenu(setting.router)}>
                  <Typography textAlign='center'>{setting.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
