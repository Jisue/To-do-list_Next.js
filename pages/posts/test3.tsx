import * as React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide, { SlideProps } from '@material-ui/core/Slide';

type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}
export default function DirectionSnackbar() {

  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleClick = () => () => {
    setTransition(() => TransitionLeft);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick()}>Right</Button>

  <Snackbar open={open} onClose={handleClose} TransitionComponent={transition}>
        <div>
          리스트에 복구됨
        </div>
      </Snackbar>
    </div>
  );

  
}