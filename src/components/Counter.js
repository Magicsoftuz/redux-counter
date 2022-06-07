import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, set } from "../actions/action";

const Counter = () => {
  const data = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="extra">
      <label className="number">{data}</label>
      <div className="box__btn">
        <button className="btn" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="btn" onClick={() => dispatch(set(100))}>
          Reset
        </button>
        <button className="btn" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
