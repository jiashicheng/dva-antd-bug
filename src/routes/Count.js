import React from 'react';
import { connect } from 'dva';
import styles from './Count.less';
import {Button} from 'antd';
const CountApp = ({countNNN, dispatch}) => {
  return (
    <div className={styles.normal}>
      <div className={styles.record}>Highest Record: {countNNN.record}</div>
      <div className={styles.current}>{countNNN.current}</div>
      <div className={styles.button}>
        <button onClick={() => { dispatch({type: 'countNNN/add'}); }}>+</button>
      </div>
      <Button type="primary">sdf</Button>
    </div>
  );
};
function mapStateToProps(state) {
  console.log(state);
  return { count: state.countNNN };
}
// const HomePage = connect(mapStateToProps)(CountApp);

// const HomePage = connect((countNNN) => {
//   return countNNN
// })(CountApp);

const HomePage = connect(({countNNN}) => ({
  countNNN
}))(CountApp);

export default HomePage;