import { connect } from 'react-redux';

import classes from './Counter.module.css';

const Counter = (props) => {
  /* const dispatch = useDispatch(); */

  const toggleCounterHandler = () => {   
     props.increment();
  };

  const showValue = ()=>{
    //console.log(props.counterValue.counter);
    console.log(props);
  }

  const incrementBy5 = ()=>{
    props.increase(5);
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{props.counterValue}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementBy5}>Increment by 5</button>
      <button onClick={showValue}>Show value</button>
    </main>
  );
};

const mapStateToProps = (state)=>{
  return{
    'counterValue': state.counterReducer.value
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    'increment': ()=>dispatch({type: 'increment'}),
    'increase': (value)=>dispatch({type: 'increase', value:value})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
