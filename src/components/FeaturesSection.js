import * as React from "react"
import Feature from "./Feature"

const FeaturesSection = (props) => {
  return (
    <section id={props.fields.scroll_anchor_id} className="feature-section">
      <div className="container">
        <div className="col">
          <div className="col-lg-5 col-md-10">
            <div className="section-title mb-60 text-white">
              <h4>{props.fields.subheadline}</h4>
            </div>
          </div>
          <div className="row">
            {props.fields.features.map((feature, i) => <Feature key={i} {...feature} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection;
