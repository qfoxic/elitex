import React from "react"
import Testimonial from "./Testimonial"

const TestimonialSection = (props) => {

  return (
    <section id={props.fields.scroll_anchor_id} className="testimonial-section">
      <div className="container">
          <div className="section-title text-white">
            <h2 className="mb-20">{props.fields.headline}</h2>
          </div>

          <div className="testimonial-active">
            {props.fields.testimonial.map(testimonial => <Testimonial key={testimonial.title} {...testimonial} />)}
          </div>
      </div>
    </section>
  )
}

export default TestimonialSection;
