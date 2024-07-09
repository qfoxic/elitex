import * as React from "react"

const Contact = (props) => {
  return (
    <div className="col">
      <div className="single-contact">
        <div>
          <h5 className="mb-30">{props.headquater_country}</h5>
          <p className="mb-10">{props.headquater_address}</p>
          <p className="phone-icon pl-20">{props.headquater_phone}</p>
        </div>
      </div>
    </div>
  )
}

export default Contact;
