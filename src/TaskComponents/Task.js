
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import { withProvider } from './store/Store'

function Task() {

  return (
      <Box pt={3} pb={3} pr={2} pl={2}>
        <Grid container direction="column">
          <Grid item>
            <TaskInput />
          </Grid>
          <Grid item>
            <TaskList />
          </Grid>
        </Grid>   
      </Box>
  )
}

export default withProvider(Task);
