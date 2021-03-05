import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import { State, TransitionLeft, TransitionProps, useStyles } from './snackbar';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import Slide, { SlideProps } from '@material-ui/core/Slide';

const Restore = ({ list_index }) => {

  const [transition, setTransition] = useState<React.ComponentType<TransitionProps> | undefined>(undefined);

  const classes = useStyles();

  const [state, setState] = useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });


  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleUpdate = (update_index) => {

    setTransition(() => TransitionLeft);
    setState({ ...state, open: true });

    const restoreRequest = async () => {
      console.log(update_index + "복구됨");
      try {
        const response1 = await axios({
          method: 'put',
          url: 'http://localhost:3001/trashs/' + update_index,
          params: {
            list_index: update_index,
          },
        })
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };
    restoreRequest();
    setTimeout(function () {
      location.reload();
    }, 500);
  }

  return (
    <>
      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => handleUpdate(list_index)}>Restore</button>
      <Snackbar open={open} anchorOrigin={{ vertical, horizontal }} TransitionComponent={transition} onClose={handleClose} key={vertical + horizontal}>
        <div className={classes.root}>
          리스트에 복구됨
        </div>
      </Snackbar>
    </>

  );
};

export default Restore