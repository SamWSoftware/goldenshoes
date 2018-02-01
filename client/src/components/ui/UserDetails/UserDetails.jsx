import React from "react";
import "./UserDetails.css";

const UserDetails = auth => {
  console.log(auth);
  if (auth && auth.user) {
    return (
      <div>
        <h4>My Details</h4>
        <form className="">
          <div className="row">
            <div className="input-field col s12">
              <input
                placeholder="Placeholder"
                id="first_name"
                type="text"
                className="validate"
                value={auth.user.firstName}
              />
              <label class="active" for="first_name">
                First Name
              </label>
            </div>
            <div className="input-field col s12">
              <input
                id="last_name"
                type="text"
                className="validate"
                value={auth.user.lastName}
              />
              <label class="active" for="last_name">
                Last Name
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                value={auth.user.email}
              />
              <label class="active" for="email">
                Email
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    return "";
  }
};

export default UserDetails;
