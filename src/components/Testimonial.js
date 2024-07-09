import * as React from "react"

const Testimonial = (props) => {
  return (
    <div className="single-testimonial">
      <div className="left">
        <img src={props.image} />
      </div>
      <div className="right">
        <div className="content">
          <p>{props.quote}</p>
        </div>
        <div className="info">
          <h6>{props.name}</h6>
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;
