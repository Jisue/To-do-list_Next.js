import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Slide, { SlideProps } from '@material-ui/core/Slide';
import { State, TransitionLeft, TransitionProps, useStyles } from './snackbar';

const Delete = ({ list_index }) => {

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

    const handleDelete = (delete_index) => {

      setTransition(() => TransitionLeft);
      setState({ ...state, open: true });
      

        const trashRequest = async () => {
            console.log(delete_index + "휴지통");
            try {
                const response1 = await axios({
                    method: 'delete',
                    url: 'http://localhost:3001/todos/' + delete_index,
                    params: {
                        list_index: delete_index,
                    },
                })
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        };
        trashRequest();
        setTimeout(function() {
          location.reload();
        }, 500);
    }
    
    return (
        <>
        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => handleDelete(list_index)}>Delete</button>
      <div >
      <Snackbar open={open} anchorOrigin={{ vertical, horizontal }} TransitionComponent={transition} onClose={handleClose} key={vertical + horizontal}>
        <div className={classes.root}>
          휴지통으로 이동됨
        </div>
      </Snackbar>
      </div>
        </>

    );
};

export default Delete