import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import { styled } from '@mui/system';

const useStyle = styled({
  root: {
    transition: "all 0.5s ease-out",
  },
  titleColorBg: {
    backgroundColor: "#275070",
    color: "yellow",
    textAlign: "center",
    fontWeight: "bold",
  },
  contentColor: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: "2px",
  },
});

export default function Warning({ open, handleClose, title, content }) {
  const classes = useStyle();

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"xs"}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.root}
    >
      <div className={classes.titleColorBg}>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText
            className={classes.contentColor}
            id="alert-dialog-description"
          >
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            className={classes.titleColorBg}
            autoFocus
          >
            ok
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}
