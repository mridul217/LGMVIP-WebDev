import React from "react";
import "./style.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div class="contain">
          <div class="col">
            <h1>Mrisar Classes</h1>
            <ul>
              <li>
                Contact: <a href="mailto:xyz@gmail.com">contact@mrisar.com</a>
              </li>
              <li>
                Tel: <a href="tel: +123456789012">+91 345-678-9012</a>
              </li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </>
  );
}
export default Footer;
