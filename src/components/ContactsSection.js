import * as React from "react"
import Contact from "./Contact"

const ContactsSection = (props) => {
  return (
    <section id={props.fields.scroll_anchor_id} className="contacts-section">
      <div className="container">
        <div className="col">
          <div className="col-lg-5 col-md-10">
            <div className="contacts-title mb-60 text-white">
              <h2>{props.fields.headline}</h2>
            </div>
          </div>
          <div className="row">
            {props.fields.addresses.map((address, i) => <Contact key={i} {...address} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactsSection;
