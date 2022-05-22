import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./partials/Logo";
// import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";

import { Radio, Typography, Divider } from "antd";
import {
  CheckOutlined,
  HighlightOutlined,
  SmileOutlined,
  SmileFilled,
} from "@ant-design/icons";

import { Row, Col } from "antd";
const { Paragraph } = Typography;
const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer
      {...props}
      className={classes}
      style={{ background: "rgb(219,100,36)", color: "#ffff", height: "360px" }}
    >
      <Row style={{ padding: "40px 60px" }}>
        <Col span={6}>
          <div className="footer-top space-between text-xxs">
            <Logo />
          </div>
        </Col>
        <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <Typography.Title level={3} style={{ color: "#ffff" }}>
              Services
            </Typography.Title>
            <ul style={{ fontSize: "12px" }} className="list-reset">
              <li>Web design & development</li>
              <li style={{ margin: "8px 0px" }}>Point of Sales System</li>
              <li>Software Quality Assurance</li>
            </ul>
          </div>
        </Col>
        <Col
          span={3}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>
            <Typography.Title level={3} style={{ color: "#ffff" }}>
              About us
            </Typography.Title>
            <ul style={{ fontSize: "12px" }} className="list-reset">
              <li>
                {" "}
                We’re a team of enthusiastic tech experts determined to inflect
                change within the digital landscape, a team from diverse
                backgrounds that is always willing to come together, work with
                the grit, transparency and proactivity needed to change the tech
                landscape starting with you!
              </li>
            </ul>
          </div>
        </Col>
        <Col
          span={9}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <div style={{ width: "60%" }}>
            <Typography.Title level={3} style={{ color: "#ffff" }}>
              Our Office
            </Typography.Title>
            <ul style={{ fontSize: "12px" }} className="list-reset">
              <li>
                Office 1205, Grosvenor Business Tower, <br /> P.O. Box: 123439,
                Tecom, Dubai, UAE
              </li>
            </ul>
          </div>
          <div style={{ width: "60%" }}>
            <Typography.Title level={5} style={{ color: "#ffff" }}>
              CONTACT DETAILS
            </Typography.Title>
            <ul style={{ fontSize: "12px" }} className="list-reset">
              <li>Tel: +44 7960 572717 </li>
              <li>Email: ahmed@rocket-io.com</li>
            </ul>
          </div>
        </Col>
      </Row>
      {/* <div className="">
        <div className={classNames("site-footer-inner", topDivider && "")}>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterNav />
            <div className="footer-copyright">
              By
              <a
                style={{ color: "#ffff", margin: "0px 4px" }}
                href="https://cruip.com"
              >
                {" "}
                Rocket.io
              </a>
              All rights reserved
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
