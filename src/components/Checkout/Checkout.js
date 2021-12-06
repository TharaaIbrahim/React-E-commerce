import "./Checkout.css";
import React from "react";
import { withRouter } from "react-router";

const Checkout = ({ history }) => {
  const handleOrder = (event) => {
    event.preventDefault();
    console.log("hhhhhhhh");
    history.push({
      pathname: `/`,
    });
  };

  return (
    <div className="site-wrap">
      <div className="bg-light py-3">
        <div className="row test">
          <div className="col-md-7 mb-5 mb-md-0">
            <h2 className="h3 mb-3 text-black">Billing Details</h2>
            <form>
              <div className="p-3 p-lg-5 border">
                <div className="form-group">
                  <label htmlFor="c_city" className="text-black">
                    City <span className="text-danger">*</span>
                  </label>
                  <select id="c_country" className="form-control" required>
                    <option value="">select your city</option>
                    <option value="amman">Amman</option>
                    <option value="zarqa">Zarqa</option>
                    <option value="maan">Ma'an</option>
                    <option value="jarash">Jarash</option>
                    <option value="aqaba">aqaba</option>
                    <option value="mafraq">Mafraq</option>
                    <option value="irbid">Irbid</option>
                    <option value="karak">Karak</option>
                  </select>
                </div>
                <div className="form-group row">
                  <div className="col-md-6">
                    <label htmlFor="c_fname" className="text-black">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_fname"
                      name="c_fname"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="c_lname" className="text-black">
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_lname"
                      name="c_lname"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="c_companyname" className="text-black">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_companyname"
                      name="c_companyname"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="c_address" className="text-black">
                      Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_address"
                      name="c_address"
                      placeholder="Street address"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apartment, suite, unit etc. (optional)"
                  />
                </div>

                <div className="form-group row mb-5">
                  <div className="col-md-6">
                    <label htmlFor="c_email_address" className="text-black">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_email_address"
                      name="c_email_address"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="c_phone" className="text-black">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_phone"
                      name="c_phone"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="c_order_notes" className="text-black">
                    Order Notes
                  </label>
                  <textarea
                    name="c_order_notes"
                    id="c_order_notes"
                    cols="30"
                    rows="5"
                    className="form-control"
                    placeholder="Write your notes here..."
                  ></textarea>
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-primary btn-lg py-3 btn-block"
                    onSubmit={handleOrder}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Checkout);
