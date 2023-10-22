"use client"
import theme from "../../theme/theme";
import { useTheme } from "@emotion/react"
import { Box, Button, Container, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { MenuPages } from "../../utils";
import * as MaterialIcon from "@mui/icons-material";
import Link from "next/link";

const Header = () => {

  const theme = useTheme();

  const showMenu = () => {
    let menu = document.getElementsByClassName("menu")[0];
    let menuButton = document.getElementsByClassName("menu-button")[0];

    menuButton.classList.toggle('menu-button-activate')
    menu.classList.toggle('menu-animated')
  }

  const hideMenu = () => {
    let menu = document.getElementsByClassName("menu")[0];
    let menuButton = document.getElementsByClassName("menu-button")[0];
    menuButton.classList.toggle('menu-button-activate')
    menu.classList.toggle('menu-animated')
  }

  return (
    <Box maxWidth='xl' sx={{ textAlign: 'left', zIndex: 2, position: 'fixed', top: 0 }}>
      <Box>
        <IconButton onClick={showMenu} className="menu-button" sx={{ p: { xs: '10px' }, borderRadius: 0, p: 2 }}>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </IconButton>
      </Box>
      <Box className="menu">
        <Box className="menu-container">
          {MenuPages.map(item => (
            <Link href={item.link} key={item.link} onClick={hideMenu}><Typography className="menu-item">{item.name}</Typography></Link>
          ))}
        </Box>
      </Box>

      {/* <Menu keepMounted open>
        <MenuItem>Teste</MenuItem>
        <MenuItem>Teste</MenuItem>
        <MenuItem>Teste</MenuItem>
        <MenuItem>Teste</MenuItem>
        <MenuItem>Teste</MenuItem>
      </Menu> */}
    </Box>

  )
}

export default Header