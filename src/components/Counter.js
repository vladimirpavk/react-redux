import { useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Counter.module.css';

const Counter = (props) => {
  const toggleCounterHandler = () => {   
    props.increment();
  };

  const showValue = ()=>{
    console.log(props.counterValue);
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{props.counterValue}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={showValue}>Show value</button>
    </main>
  );
};

const mapStateToProps = (state)=>{
  return{
    'counterValue': state.counter
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    'increment': ()=>dispatch({
      type:'increment'
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
