import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch } from 'react-redux';
import {fetchUsers } from '../Reducer/User/Action'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));



export default function PaginationRounded() {
  const classes = useStyles();
  const dispatch = useDispatch()

  const handleChange=(preval,nextval)=>{
    dispatch(fetchUsers(nextval))
  }
  return (
    <div className={classes.root} >
      <Pagination count={370} onChange={ handleChange } shape="rounded"  />
    
    </div>
  );
}