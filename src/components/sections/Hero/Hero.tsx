import {
  styled,
  Container,
  Grid,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Avatar from "../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import MailIcon from "@mui/icons-material/Mail";
import { AnimatedBackground } from "../../AnimatedBackground/AnimatedBackground";

const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  alignItems: "center",
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "80%",
  borderRadius: "50%",
  maxWidth: "500px",
  border: `1px solid ${theme.palette.primary.contrastText}`,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.contrastText}`,
  padding: "5px 15px",
  gap: "10px",
  width: "100%",
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Hero = () => {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 5 }} sx={{ textAlign: "center" }}>
            <Box sx={{ position: "relative", pb: 3 }}>
              <Box
                sx={{
                  position: "absolute",
                  width: "150%",
                  top: -100,
                  right: 0,
                  zIndex: 0,
                }}
              >
                <AnimatedBackground />
              </Box>

              <Box
                sx={{
                  textAlign: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <StyledImg src={Avatar} alt="Hero Image" />
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              sx={{
                color: "primary.contrastText",
                textAlign: "center",
                pb: 2,
              }}
              variant="h1"
            >
              Gabriel Accorsi
            </Typography>

            <Typography
              sx={{
                color: "primary.contrastText",
                textAlign: "center",
              }}
              variant="h2"
            >
              Desenvolvedor Full Stack
            </Typography>
            <Grid
              container
              sx={{ display: "flex", justifyContent: "center", pt: 3 }}
              spacing={3}
            >
              <Grid
                size={{ xs: 12, md: 4 }}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <StyledButton>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>

              <Grid
                size={{ xs: 12, md: 4 }}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <StyledButton>
                  <MailIcon />
                  <Typography>Contact me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
