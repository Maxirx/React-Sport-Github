import React from "react";
import Swal from "sweetalert2";

import { connect } from "react-redux";
import { useDispatch } from "react-redux";

function Sweetalert(props) {
  const dispatch = useDispatch();
  console.log(props);
  return (
    <div>
      {props.sweetalert.view === true && (
        <div>
          {Swal.fire("Welcome again")}
          {typeof props.sweetalert.message === "string" ? (
            <p>{props.sweetalert.message}</p>
          ) : (
            <ul>
              {props.sweetalert.message.map((message) => (
                <li>{message.message}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sweetalert: state.userReducer.sweetalert,
  };
};

export default connect(mapStateToProps, null)(Sweetalert);
