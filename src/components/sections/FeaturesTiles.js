import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Services We offer',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
              style={{
                background: "#ffff",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                margin: "16px 16px",
                borderRadius: "20px",
              }}
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Point Of Sale System (POS)                    
                  </h4>
                  <p className="m-0 text-sm">
                    Industry approved and battle tested POS systems customized to your needs just how you would like it. Allowing you to have total traceability, increase operational performance and be on top of your stocking schedules. Always!
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
              style={{
                background: "#ffff",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                margin: "16px 16px",
                borderRadius: "20px",
              }}
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Quality Assurance Services (SQA)
                  </h4>
                  <p className="m-0 text-sm">
                    Our seasoned and battle hardened QA Engineers are ready to test all aspects of your platform; functional, integration and useability. Promising to be your strategic quality partner throughout your transformation  journey. 
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
              style={{
                background: "#ffff",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                margin: "16px 16px",
                borderRadius: "20px",
              }}
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Quality Assurance Services (SQA)
                  </h4>
                  <p className="m-0 text-sm">
                    Our seasoned and battle hardened QA Engineers are ready to test all aspects of your platform; functional, integration and useability. Promising to be your strategic quality partner throughout your transformation  journey. 
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;