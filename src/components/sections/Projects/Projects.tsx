import {
  Box,
  Container,
  styled,
  Typography,
  Card,
  Grid,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

const StyledProjects = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  minHeight: "80vh",
  display: "flex",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  padding: "20px",
  border: `0.5px solid ${theme.palette.primary.contrastText}`,
  backgroundColor: "transparent",
  color: theme.palette.primary.contrastText,
}));

const ProjectsList = [
  {
    title: "Project Exemple",
    subtitle: "Jul 2023 - Dez 2023",
    srcImg: "https://picsum.photos/300/400?random=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
    technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
    websiteURL: "https://trello.com/",
    codeURL: "https://github.com/",
  },
  {
    title: "Project Exemple",
    subtitle: "Jul 2023 - Dez 2023",
    srcImg: "https://picsum.photos/300/400?random=2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
    technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
    websiteURL: "https://trello.com/",
    codeURL: "https://github.com/",
  },
  {
    title: "Project Craze Maze",
    subtitle: "Jul 2019 - May 2019",
    srcImg: "https://picsum.photos/300/400?random=3",
    description:
      "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game",
    technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
    websiteURL:
      "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
    codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
  },
  {
    title: "Project Blotting",
    subtitle: "Jul 2019 - May 2019",
    srcImg: "https://picsum.photos/300/400?random=4",
    description:
      "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game",
    technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
    websiteURL:
      "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
    codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
  },
];

const Projects = () => {
  return (
    <>
      <StyledProjects>
        <Container>
          <Box sx={{ pb: 3, pt: 5, textAlign: "center" }}>
            <Typography variant="h2" sx={{ color: "primary.contrastText" }}>
              Projects
            </Typography>
          </Box>
          <Box>
            <Grid
              container
              spacing={5}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {ProjectsList.map((project, index) => (
                <Grid key={index} size={{ xs: 10, sm: 8, md: 6, lg: 6 }}>
                  <StyledCard variant="outlined">
                    <CardContent sx={{ p: 2 }}>
                      <Typography variant="h5">{project.title}</Typography>

                      <Typography>{project.subtitle}</Typography>
                      <Box sx={{ py: 2 }}>
                        <CardMedia
                          sx={{
                            width: "100%",
                            backgroundSize: "contain",
                            height: {
                              xs: "60vw",
                              md: "45vh",
                            },
                            padding: "10px 0",
                            py: 2,
                          }}
                          image={project.srcImg}
                          title="green iguana"
                        />
                      </Box>
                      <Typography variant="body2">
                        {project.description}
                      </Typography>
                    </CardContent>

                    <CardActions sx={{ p: 2 }}>
                      <Button
                        color="inherit"
                        variant="outlined"
                        startIcon={<LinkIcon />}
                        onClick={() => window.open(project.websiteURL)}
                        sx={{
                          "&:hover": {
                            backgroundColor: "secondary.main",
                          },
                        }}
                      >
                        View Project
                      </Button>
                      <Button
                        color="inherit"
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        onClick={() => window.open(project.codeURL)}
                        sx={{
                          "&:hover": {
                            backgroundColor: "secondary.main",
                          },
                        }}
                      >
                        
                        View Code
                      </Button>
                    </CardActions>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </StyledProjects>
    </>
  );
};

export default Projects;
