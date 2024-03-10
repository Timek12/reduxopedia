import React from "react";
import { resetReduxOPedia } from "../../redux/action/actions";
import { useDispatch } from "react-redux";

function ResetApp() {
  const dispatch = useDispatch();
  const resetCounterAndDestination = () => {
    dispatch(resetReduxOPedia());
  };

  return (
    <div className="text-center">
      <button
        className="btn btn-warning"
        onClick={resetCounterAndDestination}
      >
        Reset App
      </button>
    </div>
  );
}

export default ResetApp;
