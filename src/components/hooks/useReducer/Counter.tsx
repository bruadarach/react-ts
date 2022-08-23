import React, { useReducer } from "react";

/* useReducer(reducer함수, 상태초기값)
    - useReducer : 상태를 관리 시, useState 말고도 가능한 또 다른 방법
    - reducer 는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수임.
    - reducer 에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태가 됨.
    - type 값을 대문자와 _ 로 구성하는 관습이 존재하기도 하지만, 꼭 따라야 할 필요는 없음
*/

type CounterState = {
  count: number;
};

// type CounterAction = {
//   type: "increment" | "decrement" | "reset";
//   payload?: number; // payload is not mandatory, and is optional
// };

/* discriminated unions in TypeScript and recommended typing for reducer function */
type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset": // no need payload
      return initialState;
    default:
      return state;
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Counter: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
      {/* in case payload is not mandatory */}
      <button onClick={() => dispatch({ type: "reset" })}></button>
    </>
  );
};

export default Counter;
