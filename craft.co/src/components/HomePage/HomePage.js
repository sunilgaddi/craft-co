import './HomePage.css'
import NavBar from '../NavBar/NavBar'

function HomePage() {

    return (
        <>  <NavBar/>
            <section className="homepage__section">

                <div className='learnmore__section'>
                        <p className='learnmore__description'>Fly Faster and Build Better with Craft's supply<br />Chain Intelligence for Aerospace and Defence</p>
                        <span className='learnmore__btn'>Learn more</span>
                </div>

                <div className='banner'>
                    <span className='banner__content'>
                        <h1 className='banner__heading'>The most comprehensive supplier<br/>intelligence platform</h1>
                        <p className='banner__description'>Better supplier discovery, evaluation, and monitoring<br/>for stronger supply chain resilience</p>
                        <span className='banner__btn'>Start a Free Account</span>
                    </span>
                </div>

                <div className='section2'>
                    <div className='section2__content'>

                        <div className='left__section'>
                            <h1 className='left__heading'>Comprehensive and Accurate<br/>Supplier Data</h1>
                            <p className='left__desc'>Deeper, more holistic, verified data for all your current<br/>(and potential) suppliers.</p>
                        </div>

                        <div className='right__section'>
                            <p>Craft tracks analyzes 350+ unique data points</p>
                            <div className='right__box'>
                                <ul>
                                    <li>ESG exposure</li>
                                    <li>Cyber risk</li>
                                    <li>Court filings</li>
                                    <li>Financials & revenues</li>
                                    <li>Company revenues</li>
                                    <li>Human capital</li>
                                </ul>
                                <ul>
                                    <li>Digital footprint</li>
                                    <li>Technology stack</li>
                                    <li>Operating metrics</li>
                                    <li>Filed patents</li>
                                    <li>Company structure</li>
                                    <li>Locations</li>
                                </ul>
                            </div>
                        </div> 

                    </div>
                </div>

            </section>
        </>
    )
}

export default HomePage