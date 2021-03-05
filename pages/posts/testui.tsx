import * as React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("체크됨 ")
    setChecked(event.target.checked);
  };

  return (
    <>
    <head>
    <title>Checkboxes Material Demo</title>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
  </head>
    <div>
      <Checkbox
        // checked={checked}
        color="default"
        onChange={handleChange}
        inputProps={{
          'aria-label': 'checkbox with default color',
        }}
      />
    </div>
    </>
  );
}