import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import {
  MoreVertical,
  MessageSquare,
  Mail,
  ThumbsDown,
  Plus,
} from "react-feather";

class CardTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="outer-container" className="d-flex justify-content-center">
        <Row id="inner-container">
          <Col sm={11} style={{ maxWidth: "83%" }} id="left-col">
            <div id="section-1" className="d-flex">
              <div>
              <div id="topHr" />
              <div id="rect" />
              </div>
              <div className="ml-3">
                <h1 className="mb-0">Razikhrazi</h1>
                <div id="appDev" className="mb-1">
                  <strong>Application Developer</strong>
                </div>
              </div>
            </div>
            <hr className="mx-3 my-0" />
            <div id="section-2">
              <div className="text-center">
                <div className="mt-4 text-muted" style={{fontSize: "22px"}}>Candidate Calibration Score</div>
                <div id="loader" className="justify-content-center m-2">
                  <div>
                    <strong
                      className="text-muted text-center"
                      style={{ fontSize: "24px" }}
                    >
                      84.0%{" "}
                    </strong>
                  </div>
                  <div
                    class="rect1 rectangle ml-3"
                    style={{ backgroundColor: "#D1E8FA" }}
                  ></div>
                  <div
                    class="rect2 rectangle"
                    style={{ backgroundColor: "#A3D2F5" }}
                  ></div>
                  <div
                    class="rect3 rectangle"
                    style={{ backgroundColor: "#75BBF0" }}
                  ></div>
                  <div
                    class="rect4 rectangle"
                    style={{ backgroundColor: "#47A5EB" }}
                  ></div>
                  <div
                    class="rect5 rectangle"
                    style={{ backgroundColor: "#EEEEEE" }}
                  ></div>
                </div>
              </div>
              <div className="d-flex">
                <div id="addTag" className="d-flex">
                  <p className="m-0 p-1 pl-3">Add Tag</p>
                  <Plus className="plus p-0" />
                </div>
                <div id="webDev">
                  <p className="m-0 p-1 pl-3">Web Dev...</p>
                </div>
              </div>
            </div>
            <hr className="mx-3 my-0" />
            <div id="section-3" className="py-1 mt-1">
              <div className="text-muted">2 activities since last visit</div>
              <div className="text-muted">
                Uploaded{" "}
                <strong>
                  <span id="uploadedTime">7 days ago</span>
                </strong>
              </div>
            </div>
          </Col>
          <Col sm={1} style={{ maxWidth: "17%" }} id="right-col">
            <Row className="d-flex justify-content-center">
              <Col className="icon">
                <MoreVertical className="d-block mx-auto" color="#9B9B9B" />
              </Col>
              <Col className="icon ">
                <MessageSquare className="d-block mx-auto" color="#9B9B9B" />
              </Col>
              <Col className="icon">
                <Mail className="d-block mx-auto" color="#9B9B9B" />
              </Col>
              <Col className="icon">
                <ThumbsDown className="d-block mx-auto" color="#9B9B9B" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CardTemplate;
