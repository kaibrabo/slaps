import React, {Component} from 'react';
import './landing.css';

class Landing extends Component {
    render() {
        return (
            <section className="landing">
                <section className="intro-header">
                    <p className="hero-title">your music. anywhere.</p>
                    <p className="hero-detail">
                        Add all your songs from your computer and stream them anywhere for free
                    </p>
                </section>
                <section className="selling-points">
                    <div className="selling-point">
                        <ion-icon className="icons" name="musical-notes"></ion-icon>
                        <p>choice is yours</p>
                        <p>Millions of songs. <br />Just search, click and go!</p>
                    </div>
                    <div className="selling-point">
                        <ion-icon className="icons" name="wifi"></ion-icon>
                        <p>unlimited ad-free streaming</p>
                        <p>No limits. No ads. <br/>Keep your memory space for more important things.</p>
                    </div>
                    <div className="selling-point">
                        <ion-icon className="icons" name="phone-portrait"></ion-icon>
                        <ion-icon className="icons" name="tablet-portrait"></ion-icon>
                        <ion-icon className="icons" name="desktop"></ion-icon>
                        <p>mobile, tablet & desktop</p>
                        <p>Any platform, no problem. <br /> On the go, at the office, hanging at home.</p>
                    </div>
                </section>
            </section>
        );
    }
}

export default Landing;
