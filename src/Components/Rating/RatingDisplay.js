import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function HalfRating() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name="half-rating-read"
        defaultValue={3.2}
        precision={0.1}
        readOnly
      />
    </div>
  );
}
