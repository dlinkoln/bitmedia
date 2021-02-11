import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import clean from '../assets/clean.svg'
import secure from '../assets/secure.svg'
import retina from '../assets/retina.svg'
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="services">
            <h2 className="services__title">
              Why <span>small business owners
              love</span> AppCo?
            </h2>
            <p className="services__benefits">
              Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
            </p>
            <div className="services__cards">
              <div className="AppCo__card">
                <div className="AppCo__card-icon">
                  <img src={clean} alt="" />
                </div>
                <div className="AppCo__card-title">
                  Clean Design
                </div>
                <div className="AppCo__card-descr">
                  Increase sales by showing true dynamics of your website.
                </div>
              </div>
              <div className="AppCo__card">
                <div className="AppCo__card-icon">
                  <img src={secure} alt="" />
                </div>
                <div className="AppCo__card-title">
                  Secure Data
                </div>
                <div className="AppCo__card-descr">
                  Build your online store’s trust using Social Proof & Urgency.
                </div>
              </div>
              <div className="AppCo__card">
                <div className="AppCo__card-icon">
                  <img src={retina} alt="" />
                </div>
                <div className="AppCo__card-title">
                  Retina Ready
                </div>
                <div className="AppCo__card-descr">
                  Realize importance of social proof in customer’s purchase decision.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}
export default Home