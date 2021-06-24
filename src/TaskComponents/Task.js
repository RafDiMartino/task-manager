
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TaskInput from './TaskInput';
import TaskList from './TaskList'

function Task() {
    return (
        <Box p={5}>
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

export default Task
