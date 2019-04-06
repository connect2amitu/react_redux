import React from 'react'
import Header from "./Header"
import Footer from "./Footer"


export default function Wrapper(ChildComponent) {
  return class Layout extends React.Component {
    render() {
      return (
        <>
          <Header />
          <div className="container">
            <ChildComponent {...this.props} />
          </div>
          <Footer />
        </>
      )
    }
  }
}

