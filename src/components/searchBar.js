import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import myclasses from "../CSS/progress.module.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      color: 'white',
    },
  });

export default function SearchBar() {
    const classes = useStyles();
  return (
    <div  className={myclasses.SearchBox} >
      <Autocomplete
      className={classes.root}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={searchData.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
          className={classes.root}
            {...params}
            label={<span className={myclasses.Text}>Search by name, id or concept</span>}
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}

const searchData = [
    {name: 'Mark',id:'1',concept:'Addition'},
    {name: 'Ram',id:'2',concept:'Subtraction'},
    {name: 'Sam',id:'3',concept:'Multiplication'},
    {name: 'Ganesh',id:'4',concept:'Division'},
    {name: 'Jack',id:'5',concept:'Percentage'},
]