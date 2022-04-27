import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './footer.css'

const Footer = () => {
    return (
        <footer className="page-footer font-small mdb-color pt-4" >
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left mt-3 pb-3">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase FooterTitle font-weight-bold">Our Vibrant Campuses</h6>
                        <p id="footer_p1"><a id="footer_a1" href="#!">SEGi College Kuala Lumpur</a></p>
                        <p id="footer_p1"><a id="footer_a1" href="#!">SEGi College Subang Jaya</a></p>
                        <p id="footer_p1"><a id="footer_a1" href="#!">SEGi College Penang</a></p>
                        <p id="footer_p1"><a id="footer_a1" href="#!">SEGi College Sarawak</a></p>
                        <p id="footer_p1"><a id="footer_a1" href="#!">SEGi College Kota Damansara</a></p>
                        <p id="footer_p1"><a id="footer_a1" href="#!">SEGi University Kota Damansara</a></p>
                    </div>
                    <hr className="w-100 clearfix d-md-none" />
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="text-uppercase FooterTitle font-weight-bold">Explore</h6>
                        <p id="footer_p1"><a id="footer_a1" href="#!">Virtual Tour</a></p>
                        <p id="footer_p1"><a id="footer_a1" href="#!">IR 4.0</a></p>
                        <p id="footer_p1"><a id="footer_a1" href="#!">News</a></p>
                        <p id="footer_p1"><a id="footer_a1" href="#!">Events</a></p>
                        <p id="footer_p1"><a id="footer_a1" href="#!">Valued Corporate Partners</a></p>
                    </div>
                    <hr className="w-100 clearfix d-md-none" />
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="text-uppercase FooterTitle font-weight-bold">Contact Us</h6>
                        <p id="footer_p1">1800 88 8028 (Toll Free)</p>
                        <p id="footer_p1">+603 2070 2078 (Local Students)</p>
                        <p id="footer_p1">+60 12 988 7482</p>
                        <p id="footer_p1">infokl@segi.edu.my</p>
                    </div>
                    <hr className="w-100 clearfix d-md-none" />
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase FooterTitle font-weight-bold">CMCO Channel</h6>
                        <p id="footer_p1">+60 10 310 0101 (WhatsApp/Call)</p>
                        <p id="footer_p1">logeswariramadas@segi.edu.my (Blackboard Matters)</p>
                        <p id="footer_p1">sckl-student.affairs@segi.edu.my</p>
                    </div>
                </div>
                <div className="footer_div1">
                    <div className="footer_div2">
                        © 2021 SEGi College Kuala Lumpur 197801005118 (42114-V). All Rights Reserved.
                        <a id="footer_a1" href="#!">Privacy Policy</a> | <a id="footer_a1" href="#!">Privacy Notice</a>
                    </div>
                    <div className="footer_div2">
                        <a id="footer_a1" href="#!"><img className="social_media_icons" src={require("./assets/images/sm_fb.png")} alt="" /></a>
                        <a id="footer_a1" href="#!"><img className="social_media_icons" src={require("./assets/images/sm_in.png")} alt="" /></a>
                        <a id="footer_a1" href="#!"><img className="social_media_icons" src={require("./assets/images/sm_yt.png")} alt="" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer