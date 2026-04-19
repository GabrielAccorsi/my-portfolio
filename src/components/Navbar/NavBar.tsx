import {
  styled,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";

const StyledAppBar = styled(Toolbar)(() => ({
  display: "flex",
}));

const NavBar = () => {
  return (
    <AppBar position="relative">
    
        <StyledAppBar>
          <Box sx={{ display: "flex", gap: 2, justifyContent:"space-evenly", width:"100%" }}>
            <Button color="inherit">
              <Typography>About</Typography>
            </Button>
            <Button color="inherit">
              <Typography>Contact</Typography>
            </Button>
            <Button color="inherit">
              <Typography>Projects</Typography>
            </Button>
          </Box>
        </StyledAppBar>
    </AppBar>
  );
};

export default NavBar;
