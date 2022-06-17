import React from 'react';

const Slide = () => (
    <h1><b>Total Market Cap: <span className="green-text">$1001,056,234,480</span></b></h1>
<div id="carouselIndicators" className="carousel slide carousel-fade" data-ride="carousel">
    <ol className="carousel-indicators">
        <li data-target="#carouselIndicators" data-slide-to={0} className="active"/>
        <li data-target="#carouselIndicators" data-slide-to={1}/>
        <li data-target="#carouselIndicators" data-slide-to={2}/>
        <li data-target="#carouselIndicators" data-slide-to={3}/>
        <li data-target="#carouselIndicators" data-slide-to={4}/>
    </ol>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <div className="line-chart">
                <h4 className="text-center">
                    <img src="images/coins/btc.png" width={25} className="coin-icon" alt="icon"/>
                    Bitcoin
                </h4>
                <div className="marketcap-canvas" data-charts="[65,59,81,81,56,55,40,80,90]"
                     data-border="f8a036">
                    <canvas height={100}/>
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className="line-chart">
                <h4 className="text-center">
                    <img src="images/coins/eth.png" width={25} className="coin-icon" alt="icon"/>
                    Ethereum
                </h4>
                <div className="marketcap-canvas" data-charts="[30,57,42,81,73,65,40,59,73]"
                     data-border={000000}>
                    <canvas height={100}/>
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className="line-chart">
                <h4 className="text-center">
                    <img src="images/coins/doge.png" width={25} className="coin-icon" alt="icon"/>
                    Dogecoin
                </h4>
                <div className="marketcap-canvas" data-charts="[15,49,41,61,76,84,44,60,78]"
                     data-border="c8c8c8">
                    <canvas height={100}/>
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className="line-chart">
                <h4 className="text-center">
                    <img src="images/coins/tether.png" width={25} className="coin-icon" alt="icon"/>
                    Tether
                </h4>
                <div className="marketcap-canvas" data-charts="[45,37,41,41,66,54,44,60,78]"
                     data-border="94e4fb">
                    <canvas height={100}/>
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className="line-chart">
                <h4 className="text-center">
                    <img src="images/coins/solana.png" width={25} className="coin-icon" alt="icon"/>
                    Solana
                </h4>
                <div className="marketcap-canvas" data-charts="[55,47,41,66,79,54,23,60,78]"
                     data-border="fcb2d7">
                    <canvas height={100}/>
                </div>
            </div>
        </div>
    </div>
    <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"/>
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"/>
        <span className="sr-only">Next</span>
    </a>
</div>
)
export default Slide;