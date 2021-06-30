
import Grid from '@material-ui/core/grid';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core';
import Task from './TaskComponents/Task';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withTheme } from './Theme/Theme';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    position: "absolute",
    overflow: "auto",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.color,
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(2),
    },
  },
  header: {
    fontSize: 30,
    fontWeight: 600,
  }
}));

function App(props) {
  const { darkMode, setDarkMode } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid 
      className={classes.root}
      container
      justify="center"
      alignItems={matches ? "flex-start" : "center"}>
      <Grid item>
        <Paper elevation={3}>
          <Box pt={5} pb={2} display="flex" justifyContent="center" alignItems="center">
            <Typography className={classes.header} variant="h1" gutterBottom>
              Task Manager
            </Typography>
          </Box>
          <Task />
        </Paper>
        <Grid>
          <FormControlLabel
            control={
              <Switch 
                checked={darkMode} 
                color="primary"
                onChange={() => setDarkMode(!darkMode)} 
              />
            }
            label="Dark Mode"
          />
        </Grid>
      </Grid> 

    </Grid>
  );
}

export default withTheme(App);
