import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import myclasses from "../CSS/dashboard.module.css";

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));

export default function ThisWeek() {
  const classes = useStyles();
  const [age, setAge] = React.useState('This Week');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div >
      <FormControl style={{backgroundColor:"#F1F1F5",padding:"0.5%",borderRadius:"7px",fontSize:"0.7rem"}} className={classes.formControl}>
        <Select
         
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={"This Week"}>
            This Week
          </MenuItem>
          <MenuItem value={"Today"}>Today</MenuItem>
          <MenuItem value={"This month"}>This month</MenuItem>
          <MenuItem value={"All time"}>All time</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
