import React from "react";
import { resetCounter } from "../../redux/slice/counterSlice";
import { resetDestination } from "../../redux/slice/destinationSlice";
import { useDispatch } from "react-redux";

function ResetApp() {
  const dispatch = useDispatch();
  const resetCounterAndDestination = () => {
    dispatch(resetDestination());
    dispatch(resetCounter());
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
