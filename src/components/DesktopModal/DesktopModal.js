import React from "react";
import Button from "material-ui/Button";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";

export default function DesktopModal(props) {
  return (
    <Dialog
      open={props.isOpen}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"This is site was built for mobile"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          You can still use the site on your desktop, but to take full advantage of the PWA features
          like homescreen shortcuts, splash screen and offline first functionality, try it out on
          your mobile phone!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
}
