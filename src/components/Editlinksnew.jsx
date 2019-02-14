import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import Clear from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
const styles = {
  textField: {
    marginLeft: "203px",
    backgroundColor: "#D1D1D1",
    borderColor: "#D1D1D1",
    height: "50px",
    width: "834px",
    marginBottom: "34px"
  },
  head: {
    textAlign: "center",
    fontSize: "38px",
    fontFamily: "Sans-serif",
    color: "rgba(72, 67, 73, 1)",
    marginBottom: "72px"
  },
  icon: {
    color: "#12B6A6"
  },
  button: {
    color: "#12B6A6",
    border: "1px solid rgba(18, 182, 166, 1)",
    width: "180px",
    height: "52px",
    //fontSize: "24px",
    fontFamily: "Sans-serif",
    marginRight: "220px"
  },
  iconbutton: {
    color: "#12B6A6",
    position: "absolute",
    right: "0"
  }
};

class Editlinksnew extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Open form dialog
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth="lg"
          className={classes.size}
        >
          <IconButton className={classes.iconbutton} onClick={this.handleClose}>
            <Clear />
          </IconButton>
          <DialogTitle id="form-dialog-title" />
          <header className={classes.head}>Edit Social links</header>
          <DialogContent>
            <div>
              <TextField
                className={classes.textField}
                id="outlined"
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i
                        class="fab fa-github"
                        style={{ color: "#12B6A6", fontSize: "36px" }}
                      />
                    </InputAdornment>
                  )
                }}
              />

              <TextField
                className={classes.textField}
                id="outlined"
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i
                        class="fab fa-linkedin"
                        style={{ color: "#12B6A6", fontSize: "36px" }}
                      />
                    </InputAdornment>
                  )
                }}
              />

              <TextField
                className={classes.textField}
                id="outlined"
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i
                        class="fab fa-stack-overflow"
                        style={{ color: "#12B6A6", fontSize: "36px" }}
                      />
                    </InputAdornment>
                  )
                }}
              />

              <TextField
                className={classes.textField}
                id="outlined"
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i
                        class="fab fa-twitter-square"
                        style={{ color: "#12B6A6", fontSize: "36px" }}
                      />
                    </InputAdornment>
                  )
                }}
              />
              <br />
            </div>
          </DialogContent>

          <DialogActions>
            <Button
              onClick={this.handleClose}
              className={classes.button}
              variant="outlined"
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(Editlinksnew);
