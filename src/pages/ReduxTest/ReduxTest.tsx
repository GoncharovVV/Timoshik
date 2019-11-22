import * as React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions/actions';
export interface ReduxTestProps {
  counter: number,
  inc: any,
  dec: any,
  rnd: any
};

const ReduxTest: React.FC<ReduxTestProps> = ({counter, inc, dec, rnd}) => {
  return (
    <div className="container">
      <span>{counter}</span>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={rnd}>Random</button>
    </div>
  );
}
const mapStateToProps = (state: any) => {
  return {
    counter: state
  }
};
// const mapDispatchToProps = (dispatch: any) => {
  // const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
  // return {
  //   inc,
  //   dec,
  //   rnd
  // }
  // or
  // return bindActionCreators(actions, dispatch);
// };
// можно передать обьект с екшенами вместо mapDispatchToProps функции
// mapDispatchToProps используеться для более гибкой настройки
// export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest);
export default connect(mapStateToProps, actions)(ReduxTest);