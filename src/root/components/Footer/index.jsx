import React, { Fragment } from 'react';
import GitHubSVG from '../../../assets/githubSVG';
import LinkedInSVG from '../../../assets/linkedInSVG';
import './index.scss';

/**
 * Page Footer
 * @returns React.Component
 */
function Footer() {
    return (
        <Fragment>
            <section className="contact-area" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="contact-content text-center">
                                <img src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2018/10/Blog_Full-stack-dev.jpg.webp" alt="logo" />
                                <p><strong>Rajesh Sivanesan</strong></p>
                                <div>Email: rajeshsivacse@gmail.com</div>
                                <p>Senior Fullstack Engineer @ Compass</p>
                                <div className="hr"></div>
                                <h6>F2-103, Provident Green Park, Muthusamy Colony Extension, Perur Main Road, Coimbatore, Tamil Nadu - 641026</h6>
                                <h6>+91<span>-</span>9600235512</h6>
                                <div className="contact-social">
                                    <ul>
                                        <li><a target="_blank" rel="noreferrer" className="hover-target" href="https://www.linkedin.com/in/rajesh-sivanesan-b858ab66"><LinkedInSVG /></a></li>
                                        <li><a target="_blank" rel="noreferrer" className="hover-target" href="https://github.com/RajeshSivanesan"><GitHubSVG /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Footer;
