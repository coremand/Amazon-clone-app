import React from 'react'
import Product from "./Product"
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                
                <Carousel className="home__image">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/sm/FallGuys_S01_D02/Gateway/V2/GW_Banner_1500x600_EN._CB411384274_.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/prime/2021_GTM/US2021D1155_GW_DesktopHero_1500x600_EN._CB659228198_.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MzBiNjIyYjgt/MzBiNjIyYjgt-NjFmMGEzYjMt-w1500._CB659232806_.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/C2A2_America_1500x600_H3._CB657825905_.jpg"
                            alt="Fourth slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="home__row">
                    <Product title="Lenovo" price={959.99} image = "https://images.indianexpress.com/2020/06/feature.jpg" rating={5} id="1"/>
                    <Product title="Apple iPhone" price={599.00} image="https://m.media-amazon.com/images/I/810DvHOZ9nL._AC_UY218_.jpg" rating={3} id="2"/>
                    <Product title="Xbox Console" price={599.99} image = "https://media.wired.com/photos/5fa5dc3dba670daaf8e97a8d/master/pass/games_gear_series-x.jpg" rating={2} id="3"/>
                    <Product title="Smart TV" price={199.99} image = "https://image.roku.com/blog/wp-content/uploads/2018/10/smartv_rokutv_FB.jpg" rating={5} id="4"/>
                    
                </div>
                <div className="home__row">
                    <Product title="Simple Joys" price={23.85} image="https://m.media-amazon.com/images/I/91ADeYn38qL._MCnd_AC_UL320_.jpg" rating={5} id="5"/>
                    <Product title="Hanes" price={6.89} image="https://m.media-amazon.com/images/I/81axdtc2TOL._AC_UL320_.jpg" rating={5} id="6"/>
                    <Product title="CALIDA" price={59.25} image="https://m.media-amazon.com/images/I/71+utRM8eKL._AC_UL320_.jpg" rating={4} id="7"/>
                    <Product title="Yvowming" price={16.99} image="https://m.media-amazon.com/images/I/61k5moL06DL._AC_UL320_.jpg" rating={4} id="8"/>
                </div>

                <div className="home__row">
                <Product title="Motivational" price={14.85} image="https://m.media-amazon.com/images/I/816wy3Sr-qL._AC_UL320_.jpg" rating={5} id="9"/>
                <Product title="Religious" price={12.95} image="https://m.media-amazon.com/images/I/71T+uPlp-KL._AC_UL320_.jpg" rating={5} id="10"/>
                <Product title="Woman Inspire" price={34.95} image="https://m.media-amazon.com/images/I/71Fr3-dXKEL._AC_UL320_.jpg" rating={5} id="11"/>
                <Product title="EBENG" price={16.85} image="https://m.media-amazon.com/images/I/71RAtC3-iYL._AC_UL320_.jpg" rating={3} id="12"/>
                <Product title="Gypsy" price={20.98} image="https://m.media-amazon.com/images/I/81e0+GfvfSL._AC_UL320_.jpg" rating={5} id="13"/>
                </div>
            </div>
            
        </div>
    )
}
