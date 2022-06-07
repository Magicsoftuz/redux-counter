import { createStore } from "redux";
import { initialState, reducer } from "../reducers/reducer";

export const store = createStore(reducer, initialState);
