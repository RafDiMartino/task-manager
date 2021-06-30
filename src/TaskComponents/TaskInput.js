import { useState } from "react";
import { Grid } from "@material-ui/core"
import { TextField } from "@material-ui/core"
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core";
import { useTasks } from './store/Store'


const useStyles = makeStyles((theme) => ({
    textField: {
        width: 300,
        paddingRight: 10,
        [theme.breakpoints.down('xs')]: {
          width: 215,
        },
    },
    button: {
        padding: 15.5,
    }
}));

function TaskInput() {
    const { addTask } = useTasks();
    const classes = useStyles();
    const [newTask, setNewTask] = useState("");
    const handleClick = () => {
        addTask(newTask);
        setNewTask("");
    };

    return (
        <Grid container>
            <Grid item>
                <TextField
                    className={classes.textField} 
                    id="outlined-basic" 
                    label="Today's task" 
                    variant="outlined" 
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    />
            </Grid>
            <Grid item >
                <Button 
                    disabled={newTask.length === 0}
                    className={classes.button}
                    variant="contained" 
                    color="primary"
                    onClick={handleClick}> 
                        Add Task
                </Button>
            </Grid>
        </Grid>
    )
}

export default TaskInput
