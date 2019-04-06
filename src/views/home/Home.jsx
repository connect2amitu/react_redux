import React, { Component } from 'react'
import Wrapper from '../../container/Wrapper';
import { connect } from 'react-redux';
import { increment } from '../../action/app'
class Home extends Component {
  incrementHandler = () => {
    const { dispatch } = this.props;
    dispatch(increment());
  }
  render() {
    console.info('------------------------------------');
    console.info('home this.props => ', this.props);
    console.info('------------------------------------');

    const { counter } = this.props;
    return (
      <div>
        <h1>Home</h1>
        <p>Counter: {counter}</p>
        <button onClick={() => this.incrementHandler()}>Increment</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  counter: state.app.get('counter'),
})
export default connect(mapStateToProps)(Wrapper(Home))