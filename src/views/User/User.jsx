import React, { Component } from 'react'
import Wrapper from '../../container/Wrapper';
import { addUserStart } from '../../action/user'
import { connect } from 'react-redux';
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      about: "",
    }
  }
  onSubmitHandler = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(addUserStart(this.state));
  }
  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { loading, error, user } = this.props;
    console.info('------------------------------------');
    console.info('user => ', user);
    console.info('------------------------------------');

    return (
      <div>
        <h1>User</h1>
        <p>{loading && "Saving.."}</p>
        <p>{error && `${error}`}</p>
        <form onSubmit={(e) => this.onSubmitHandler(e)}>
          <div className="row">
            <div className="col-sm-1">
              Name:
          </div>
            <div className="col-sm-4">
              <input name="name" className="form-control" onChange={(e) => this.onChangeHandler(e)} type="text" placeholder="Enter Name" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              Age:
          </div>
            <div className="col-sm-4">
              <input name="age" className="form-control" onChange={(e) => this.onChangeHandler(e)} type="text" placeholder="Enter Age" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              About:
          </div>
            <div className="col-sm-4">
              <textarea name="about" className="form-control" onChange={(e) => this.onChangeHandler(e)} ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
            </div>
            <div className="col-sm-4">
              <input type="submit" className="btn btn-primary" value="Submit" />&nbsp;
              <input type="reset" className="btn btn-info" value="RESET" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
const mapStatetoProps = (state) => ({
  user: state.user.get('user'),
  loading: state.user.get('loading'),
  error: state.user.get('error'),
})
export default connect(mapStatetoProps)(Wrapper(User))