import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { connect, useDispatch } from "react-redux";

function MySnackbar(props) {
  const dispatch = useDispatch();

  const [transition, setTransition] = React.useState(undefined);

  const handleClose = () => {
    dispatch({
      type: "message",
      payload: {
        view: false,
        message: "",
        success: false,
      },
    });
  };

  return (
    <div>
      {props?.snackbar?.view === true && (
        <Snackbar
          open={props.snackbar.view}
          autoHideDuration={6000}
          onClose={handleClose}
          TransitionComponent={transition}
          message={props.snackbar.message}
          key={transition ? transition.name : ""}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    snackbar: state.userReducer.snackbar,
  };
};

export default connect(mapStateToProps, null)(MySnackbar);
