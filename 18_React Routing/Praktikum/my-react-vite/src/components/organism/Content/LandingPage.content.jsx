import React from 'react'
import "./LandingPage.style.css";
import hero from '../../../assets/img/hero-img.png.svg'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <>
            <main className='py-5'>
                <div className="d-flex justify-content-evenly align-items-center">
                    <div className="p-2">
                        <h1>
                            Better Solution For Your <br />
                            Bussines
                        </h1>
                        <p>
                            We are team of talented designers making websites with <br />
                            Bootstrap
                        </p>
                        <Link to="/createproduct">
                            <button type="button" className="btn btn-primary px-4 py-2">
                                Create Product
                            </button>
                        </Link>
                        <button
                            type="submit"
                            className="btn btn-light mx-4 px-4 py-2"
                            id="btn-watch-video"
                        >
                            Watch Video
                        </button>
                    </div>
                    <div className="p-2">
                        <img src={hero} alt="hero" />
                    </div>
                </div>
            </main>
            <div className="newsletter pt-5">
                <div className="newsletter-text pt-4">
                    <h2>
                        <b>Join Our Newsletter</b>
                    </h2>
                    <p>
                        Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                    </p>
                    <form action="">
                        <input id="insubs" type="text" required="" />
                        <button id="subs" type="submit">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LandingPage