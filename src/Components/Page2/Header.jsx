import styles from "./Header.module.css";

import logo from "D:/React Learning/Assignment Project/Assignment Project/src/assets/Cat-N-Dog-Logo copy.png";
import fb from "D:/React Learning/Assignment Project/Assignment Project/src/assets/FB-icon-black@2x.png";
import linkedin from "D:/React Learning/Assignment Project/Assignment Project/src/assets/linkedin-icon-black@2x.png";
import x from "D:/React Learning/Assignment Project/Assignment Project/src/assets/Twitter-icon-black@2x.png";

const Header = () => {
  return (
    <>
      <nav className="navbar" style={{ top: "0", left: "0" }}>
        <div className="container-fluid p-3" id={styles.items}>
          <img src={logo} alt="" />
          <div id="items">
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content" id={styles.mcontent}>
            <p className="mx-3 my-3">
              <center>
                <h1>Contact</h1>
              </center>
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
                facere.
              </span>
            </p>
            <div class="form-floating mb-2">
              <input
                type="text"
                class="form-control"
                id={styles.finput}
                placeholder="Enter Name"
              />
              <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating mb-2">
              <input
                type="email"
                class="form-control"
                id={styles.finput}
                placeholder="Enter Email"
              />
              <label for="floatingPassword">Email</label>
            </div>
            <div class="form-floating mb-2">
              <input
                type="text"
                class="form-control"
                id={styles.finput}
                placeholder="Enter Message"
              />
              <label for="floatingPassword">Message</label>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-outline-secondary">
                Save changes
              </button>
            </div>
            <div id={styles.bottom}>
              <span>Need more help ? Mail at xyz@gmail.com </span>
              <span id={styles.icons}>
                <img src={fb} alt="" />
                <img src={linkedin} alt="" />
                <img src={x} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
