import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { set } from "../actions/action";

const SetCounter = () => {
  const dispatch = useDispatch();

  const [counter, setCounter] = useState(0);
  const getCount = (val) => {
    setCounter(val);
  };

  // useEffect(() => {
  //   setCounter(data);
  // }, [counter]);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(Number(counter)));
        }}
      >
        <input
          type="number"
          value={counter}
          onChange={(event) => {
            getCount(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SetCounter;
