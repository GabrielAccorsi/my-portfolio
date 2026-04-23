import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import theme from "../../../Theme";

const StyledAbout = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  height: "70vh",
  display: "flex",
}));
const StyledCard = styled(Card)(({ theme }) => ({
  padding: "10px 10px",
  textAlign: "center",
  marginBottom: "10px",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const skillsSet = [
  "Javascript",
  "Typescript",
  "React",
  "Next",
  "Git",
  "HTML",
  "CSS",
  "Cypress",
  "AWS",
  "GCP",
  "Material UI",
  "Figma",
];

const About = () => {
  return (
    <>
      <StyledAbout>
        <Container maxWidth="lg">
          <Box sx={{ pb: 3, pt: 5, display: "flex", justifyContent: "center" }}>
            <Typography variant="h2">About Me</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              width: "80%",
              mx: "auto",
              pt: 3,
            }}
          >
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              alias aliquam sint veniam magnam fugit, rerum officia adipisci rem
              distinctio totam nisi laborum ullam labore, maiores impedit unde
              blanditiis recusandae. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolores consequatur, nobis, reprehenderit unde,
              officiis rem dolorem asperiores ad officia blanditiis perferendis
              doloremque cupiditate itaque quo earum at dignissimos soluta
              saepe.
            </Typography>
          </Box>
          <Divider
            sx={{
              my: 5,
              borderColor: `${theme.palette.primary.main}`,
              width: "80%",
              justifyContent: "center",
              mx: "auto",
            }}
          />
          <Box sx={{ pb: 3, pt: 5, display: "flex", justifyContent: "center" }}>
            <Typography variant="h3">Skills</Typography>
          </Box>
          <Box sx={{spacing: 2}}>
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
              {skillsSet.map((skill, index) => (
                <Grid key={index} size={ {xs:5, sm:4, md:2 ,lg:2 } }>
                  <StyledCard variant="outlined">{skill}</StyledCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
