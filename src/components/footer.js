import React, { Component } from "react";
import GoogleApiWrapper from './googlemaps'
import '../style/footer.css'

export default class footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <footer className="site-footer" id="footer">
          {/* <div className="container"> */}
            {/* <span>{this.props.siteName}</span> */}
            {/* <footer class="site-footer"> */}
              <div class="container">
                <div class="row">

                  <div class="col-xs-6 col-md-2">
                    <h6>Categories</h6>
                    <ul class="footer-links">
                      <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                      <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                      <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                      <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                      <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                      <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                    </ul>
                    <h6>Bize Ulasin</h6>
                    <p>adres adres adres adres adres adres</p>
                    <p>email</p>
                    <p>telefon</p>
                    
                  </div>

                  <div class="col-xs-6 col-md-4">
                    <h6>Quick Links</h6>
                    <ul class="footer-links">
                      <li><a href="http://scanfcode.com/about/">About Us</a></li>
                      <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                      <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                      <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                      <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                    </ul>
                    <h6>Quick Links</h6>
                    <ul class="footer-links">
                      <li><a href="http://scanfcode.com/about/">About Us</a></li>
                      <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                      <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                      <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                      <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                    </ul>
                  </div>
                  <div class="col-sm-12 col-md-6 footer-map-container">
                    <GoogleApiWrapper />
                  </div>
                </div>
                <br/>
                <hr style={{marginTop:'2rem'}}/>
                <br/>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-md-8 col-sm-6 col-xs-12">
                    <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by
         <a href="#">Scanfcode</a>.
            </p>
                  </div>

                  {/* <div class="col-md-4 col-sm-6 col-xs-12">
                  <ul class="social-icons">
                    <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                    <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                </div> */}
                </div>
              </div>
          {/* </div> */}
        </footer>
      </div>
    );
  }
}
