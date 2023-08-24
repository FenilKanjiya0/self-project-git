import React, { useState } from "react";

const Ragistration = () => {
  const [user, setUser] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
  });

  let name, value;
  const ragister = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
      const { name, address, email, password } = user;

      const res = await fetch(
        "https://git-practice-b549f-default-rtdb.firebaseio.com/dummy.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            address,
            email,
            password,
          }),
        }
      );
      if (res) {
        setUser({
          name: "",
          address: "",
          email: "",
          password: "",
        });
        alert("ragister successufull");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="container my-5">
        <h3>Ragistration Form</h3>
        <form method="POST" onSubmit={postData}>
          <div className="row">
            <div className="col-6 my-3">
              <div class="mb-3">
                <input
                  placeholder="Enter your name"
                  type="text"
                  class="form-control"
                  name="name"
                  value={user.name}
                  onChange={ragister}
                  required
                />
              </div>
            </div>
            <div className="col-6 my-3">
              <div class="mb-3">
                <input
                  placeholder="Enter Address"
                  type="text"
                  class="form-control"
                  name="address"
                  value={user.address}
                  onChange={ragister}
                  required
                />
              </div>
            </div>
            <div className="col-6 my-3">
              <div class="mb-3">
                <input
                  placeholder="Enter Email"
                  type="email"
                  class="form-control"
                  name="email"
                  value={user.email}
                  onChange={ragister}
                  required
                />
              </div>
            </div>
            <div className="col-6 my-3">
              <div class="mb-3">
                <input
                  placeholder="Password"
                  type="text"
                  class="form-control"
                  name="password"
                  value={user.password}
                  onChange={ragister}
                  required
                />
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Ragistration;
