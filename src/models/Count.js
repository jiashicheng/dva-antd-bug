function delay(timeout){
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
export default {
  namespace: "countNNN",
  state: {
    record: 0,
    current: 0
  },
  effects: {
    *add(action, { call, put }) {
      yield put({ type: 'add1' });
      yield call(delay, 1000);
      yield put({ type: 'minus' });  //put发送一个action 类似于dispatch
    },
  },
  reducers: {
    add1(state) {
      const newCurrent = state.current + 1;
      return {
        ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent
      };
    },
    minus(state) {
      console.log(state.current);
      return { ...state, current: state.current - 1 };
    }
  }
};