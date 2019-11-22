import * as React from 'react';
import { createStore, bindActionCreators } from 'redux';
import * as actions from '../../store/actions/actions';
import reducer from '../../store/reducer/reducer';
export interface ReduxTestProps {};

const ReduxTest: React.FC<ReduxTestProps> = () => {


  const store = createStore(reducer);
  const { dispatch, subscribe } = store;

  const { inc: incDispatch, dec: decDispatch, rnd: rndDispatch } = bindActionCreators(actions, dispatch);
  let state = 0;
  // const [state, setstate] = React.useState(0);
  subscribe(() => {
    console.log(store.getState());
  });
  const onRnd = () => {
    const payload: number = Math.floor(Math.random()*10);
    rndDispatch(payload);
  }

  return (
    <div className="container">
      <span>{state}</span>
      <button onClick={incDispatch}>Increment</button>
      <button onClick={decDispatch}>Decrement</button>
      <button onClick={onRnd}>Random</button>
    </div>
  );
}

export default ReduxTest;