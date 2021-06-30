import { useState, useMemo } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { useTasks } from './store/Store'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";
import { Box } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    listItem: {
        width: 300,
        wordWrap: "break-word",
        paddingTop: 20,
        paddingBottom: 20, 
        [theme.breakpoints.down('xs')]: {
            width: 210,
        },
    },
    list: {
        paddingTop: 10,
        paddingBottom: 10
        
    },
    decoration: {
        paddingTop: 10,
        paddingBottom: 10,
        textDecoration: "line-through",
        color: "gray"
    }
}));


function TaskList() {
    const classes = useStyles();
    const [filter, setFilter] = useState("all");
    const { tasks, toggleTask, removeTask } = useTasks();
    const filteredTasks = useMemo(() => {
        
        if (filter === "all") {
            return tasks;
        }else if (filter === "completed") {
            return tasks.filter(t => t.completed);
        }else if (filter === "notCompleted") {
            return tasks.filter(t => !t.completed);
        }

    }, [tasks, filter]);

    return (
        <>
            <List className={classes.list}>
                {filteredTasks.map((task) => {
            
                    return (
                    <ListItem className={classes.listItem} key={task.id}>
                            <ListItemText primary={task.text} className={task.completed ? classes.decoration : classes.list}/>
                            <ListItemSecondaryAction>
                                <Checkbox 
                                color="primary"
                                inputProps={{ 'aria-label': 'checkbox with default color' }} 
                                checked={task.completed} 
                                onClick={() => toggleTask(task.id)}/>
                                <IconButton color="secondary" onClick={() => removeTask(task.id)} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                    </ListItem>
                    );
                })}
            </List>
            <Grid container justify= "center">
                <Box p={1}>
                    <Button variant="contained" color="primary" onClick={() => setFilter("all")}>All</Button>
                </Box>
                <Box p={1}>
                    <Button variant="contained" color="primary" onClick={() => setFilter("completed")}>Completed</Button>
                </Box>
                <Box p={1}>
                    <Button variant="contained" color="primary" onClick={() => setFilter("notCompleted")}>Due</Button>
                </Box>
            </Grid>
        </>
      );
    };

export default TaskList
