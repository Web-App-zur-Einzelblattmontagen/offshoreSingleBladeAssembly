import React from 'react';
import classNames from 'classnames';
import {SectionSplitProps} from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
    ...SectionSplitProps.types
}

const defaultProps = {
    ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

    render() {

        const {
            className,
            topOuterDivider,
            bottomOuterDivider,
            topDivider,
            bottomDivider,
            hasBgColor,
            invertColor,
            invertMobile,
            invertDesktop,
            alignTop,
            imageFill,
            ...props
        } = this.props;

        const outerClasses = classNames(
            'features-split section',
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color',
            className
        );

        const innerClasses = classNames(
            'features-split-inner section-inner',
            topDivider && 'has-top-divider',
            bottomDivider && 'has-bottom-divider'
        );

        const splitClasses = classNames(
            'split-wrap',
            invertMobile && 'invert-mobile',
            invertDesktop && 'invert-desktop',
            alignTop && 'align-top'
        );

        const sectionHeader = {
            title: 'Have a better understanding of offshore single blade installation',
            paragraph: ''
        };

        return (
            <section
                {...props}
                className={outerClasses}
            >
                <div className="container">
                    <div className={innerClasses}>
                        <SectionHeader data={sectionHeader} className="center-content"/>
                        <div className={splitClasses}>

                            <div className="split-item">
                                <div className="split-item-content center-content-mobile reveal-from-left"
                                     data-reveal-container=".split-item">
                                    <h3 className="mt-0 mb-12">
                                        Customizable Dashboard
                                    </h3>
                                    <p className="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                                <div className={
                                    classNames(
                                        'split-item-image center-content-mobile reveal-from-bottom',
                                        imageFill && 'split-item-image-fill'
                                    )}
                                     data-reveal-container=".split-item">
                                    <Image
                                        className="has-shadow"
                                        src={require('./../../assets/images/black.jpg')}
                                        alt="Features split 01"
                                        width={528}
                                        height={396}/>
                                </div>
                            </div>

                            <div className="split-item">
                                <div className="split-item-content center-content-mobile reveal-from-right"
                                     data-reveal-container=".split-item">
                                    <h3 className="mt-0 mb-12">
                                        Interactive data visualization
                                    </h3>
                                    <p className="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                                <div className={
                                    classNames(
                                        'split-item-image center-content-mobile reveal-from-bottom',
                                        imageFill && 'split-item-image-fill'
                                    )}
                                     data-reveal-container=".split-item">
                                    <Image
                                        className="has-shadow"
                                        src={require('./../../assets/images/black.jpg')}
                                        alt="Features split 02"
                                        width={528}
                                        height={396}/>
                                </div>
                            </div>

                            <div className="split-item">
                                <div className="split-item-content center-content-mobile reveal-from-left"
                                     data-reveal-container=".split-item">
                                    <h3 className="mt-0 mb-12">
                                        Detailed scientific documentation
                                    </h3>
                                    <p className="m-0">

                                        In order to make the data analysis process and the functioning of the
                                        neural networks as transparent as possible, there is a
                                        <a target="_blank"
                                           style={{ textDecoration: 'none', fontWeight: 'bold' }}
                                           href="https://github.com/Web-App-zur-Einzelblattmontagen/offshoreSingleBladeAssembly/wiki"> Wiki </a>
                                        that is freely available on Github. This can also be found directly on the
                                        dashboard.
                                    </p>
                                </div>
                                <div className={
                                    classNames(
                                        'split-item-image center-content-mobile reveal-from-bottom',
                                        imageFill && 'split-item-image-fill'
                                    )}
                                     data-reveal-container=".split-item">
                                    <Image
                                        className="has-shadow"
                                        src={require('./../../assets/images/black.jpg')}
                                        alt="Features split 03"
                                        width={528}
                                        height={396}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;