import theme from "@/theme/theme"
import { useTheme } from "@emotion/react"
import { Box, Button, Container, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { MenuPages } from "@/utils";
import * as MaterialIcon from "@mui/icons-material";

const Header = () => {

  const theme = useTheme();

  const showMenu = () => {
    let menu = document.getElementsByClassName("menu")[0];
    let menuButton = document.getElementsByClassName("menu-button")[0];
    
    menuButton.classList.toggle('menu-button-activate')
    console.log('menu', menu)
    menu.classList.toggle('menu-animated')
  }

  return (
    <Box maxWidth='xl' sx={{ textAlign: 'left' }}>

      <Box>
        <IconButton onClick={showMenu} size="large" className="menu-button" sx={{ borderRadius: 0, p:2 }}>
          <span class="menu-line"></span>
          <span class="menu-line"></span>
          <span class="menu-line"></span>
        </IconButton>
      </Box>
      <Box className="menu">
        <Box className="menu-container">
          {MenuPages.map(item => (
            <Typography className="menu-item">{item.name}</Typography>
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