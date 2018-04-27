import React from 'react';
import landing from '../landing.jpg';

const Landing = () => (
    <section className="landing">
        <section className='landing-photo'>
            <img src={landing} alt={'landing'} />
        </section>

        <section className="intro-header">
            <h1 className='hero-title'>Bring your music along</h1>
            <p>
                Add all your songs from your computer and stream them anywhere for free
            </p>
        </section>


        <section className='selling-points'>
            <div className='point'>
                <h2 className='point-title'>Choose your music</h2>
                <p className='point-description'>
                    The world is full of music; why should you have to listen to music that someone else chose?
                </p>
            </div>
            <div className='point'>
                <h2 className='point-title'>Mobile Enabled</h2>
                <p className='point-description'>
                    Listen to your music on the go. This streaming service is available on all mobile platforms.
                </p>
            </div>
            <div className='point'>
                <h2 className='point-title'>Unlimited + Ad-free</h2>
                <p className='point-description'>
                    No Arbitrary Limits, No Distractions
                </p>
            </div>
        </section>
    </section>
);

export default Landing;
