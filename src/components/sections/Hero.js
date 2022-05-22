import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import { Typography } from "antd";

const { Title } = Typography;
const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container head">
        <div className={innerClasses}>
          <div className="hero-content">
            <Title
              className="mt-0 mb-12 reveal-from-bottom"
              data-reveal-delay="200"
            >
              <span className="text-color-basic font-sm ">
                Inspiring Possibilities and Delivering The Craftsmanship You
                Need
              </span>
            </Title>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                With success being a long term commitment, we promise to deliver
                the most digitally advanced and optimized solutions to grow and
                impact the digital tomorrow together.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <Button
                  className="ant-btn-primary"
                  tag="a"
                  color="primary"
                  wideMobile
                  href="/"
                  style={{ borderRadius: "24px" }}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
