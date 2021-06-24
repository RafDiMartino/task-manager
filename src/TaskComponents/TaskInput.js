import { Grid } from "@material-ui/core"
import { TextField } from "@material-ui/core"
import Button from '@material-ui/core/Button';

function TaskInput() {
    return (
        <Grid container>
            <Grid item>
                <TextField id="filled-basic" label="Today's task" variant="filled" />
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary"> 
                    Add Task
                </Button>
            </Grid>
        </Grid>
    )
}

export default TaskInput
