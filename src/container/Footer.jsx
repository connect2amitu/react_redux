import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const style = {
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
      backgroundColor: "#343a40",
      color: "white",
      textAlign: "center",
    }
    return (
      <div className="footer" style={style} >
        <p>{`Copyright ${new Date().getFullYear()}`}</p>
      </div>
    )
  }
}
