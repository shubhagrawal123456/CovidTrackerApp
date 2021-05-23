import React, { Component } from "react";
import "../footer/footer.css";
import { FaInstagram } from "react-icons/fa";

export default class footer extends Component {
  render() {
    return (
      <div>
        <center>
          <div>
            This Data Is Provided By:-
            <a href="https://www.covid19india.org/" target="_blank">
              https://www.covid19india.org/
            </a>
          </div>
          <div className="footerdiv">
            <footer className="footer_text">
              <label className="copyright">
                <br />
              </label>
              <label className="soc_acc_txt">
                <a href="https://www.instagram.com/shubh5480/" target="_blank">
                  <FaInstagram /> Shubh
                </a>
                |
                
              </label>
            </footer>
          </div>
        </center>
      </div>
    );
  }
}
