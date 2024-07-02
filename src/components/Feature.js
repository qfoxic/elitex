import * as React from "react"

const Feature = (props) => {
  return (
    <div className="col">
      <div className="single-feature">
        <div className="feature-icon">
          <img src={props.icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Feature;
