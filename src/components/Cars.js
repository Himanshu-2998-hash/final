import React ,{Component} from 'react';
import Navbar from './Navbar';
class Cars extends Component{
    render(){
        return(
            <div>
            <section id="page-title-area" class="section-padding overlay">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title  text-center">
                        <h2>Our Cars</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="car-list-area" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="car-list-content">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="single-car-wrap">
                                    <div class="car-list-thumb car-thumb-1"></div>
                                    <div class="car-list-info without-bar">
                                        <h2><a href="#">Hyundai Elite i10</a></h2>
                                        <h5>350 Rent /per a day</h5>
                                        <p>From fluid aesthetics to the modern appeal and premium interiors, nothing was compromised. Hyundai proudly presents another ambitious design of ELITE i20</p>
                                         
                                        <p class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star unmark"></i>
                                        </p>
                                        <form>
                                        <button formaction="/details" class="rent-btn">Details</button>
                                        <button formaction="/bookings" class="rent-btn" disabled>Book It</button></form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="single-car-wrap">
                                    <div class="car-list-thumb car-thumb-2"></div>
                                    <div class="car-list-info without-bar">
                                        <h2><a href="#">Hyundai Grand i20</a></h2>
                                        <h5>Rs450 Rent /per a day</h5>
                                        <p>From fluid aesthetics to the modern appeal and premium interiors, nothing was compromised. Hyundai proudly presents another ambitious design of ELITE i20</p>
                                        <p class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star unmark"></i>
                                        </p>
                                        <a href="/hyundai_i20" class="rent-btn">Details</a>
                                        <a href="/bookings" class="rent-btn">Book It</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="single-car-wrap">
                                    <div class="car-list-thumb car-thumb-3"></div>
                                    <div class="car-list-info without-bar">
                                        <h2><a href="#">Maruti Suzuki Dzire </a></h2>
                                        <h5>Rs.450 Rent /per a day</h5>
                                         <p>Perfect combination of Sporty style, comfort and bold look. Know More. Discover more fun, more style and more thrill</p>
                                        <p class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star unmark"></i>
                                        </p>
                                        <a href="/dzire" class="rent-btn">Details</a>
                                        <a href="/bookings" class="rent-btn">Book It</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="single-car-wrap">
                                    <div class="car-list-thumb car-thumb-4"></div>
                                    <div class="car-list-info without-bar">
                                        <h2><a href="#">Ford EcoSport</a></h2>
                                        <h5>RS Rs.550 Rent /per a day</h5>
                                        <p>Perfect combination of Sporty style, comfort and bold look. Know More. Discover more fun, more style and more thrill</p>
                                         
                                        <p class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star unmark"></i>
                                        </p>
                                        <form>
                                        <button formaction="/ecosport" class="rent-btn">Details</button>
                                        <button formaction="/bookings" class="rent-btn" disabled>Book It</button></form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                </section>
            </div>
        );
    }
}
export default Cars;