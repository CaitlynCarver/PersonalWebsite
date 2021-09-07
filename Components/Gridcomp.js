
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grow from '@material-ui/core/Grow';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Grow ref={ref} {...props} />;
  });

function Gridcomp(props) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(props.pic)
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} >
        <div >
          <div >
              <h5>Puzzle {props.num}</h5>
          </div>
          <div >
              <img alt="" src={props.pic} width='100px' height='100px'/>
          </div>
        </div>
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Puzzle #" + props.num}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Discription of Puzzle:
            {props.names}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Check
          </Button>
          <Button onClick={handleClose} color="primary">
            Quit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Gridcomp;