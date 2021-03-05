import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import Slide, { SlideProps } from '@material-ui/core/Slide';

export interface State extends SnackbarOrigin {
    open: boolean;
  }
  
  export type TransitionProps = Omit<SlideProps, 'direction'>;
  
  export function TransitionLeft(props: TransitionProps) {
    return <Slide {...props} direction="left" />;
  }

  export const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      // border: '1px dashed grey',
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 50,
      width : 220,
      textAlign : "center",
      padding : 10,
    },
  });