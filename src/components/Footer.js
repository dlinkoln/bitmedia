import React from 'react'
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <form className="footer__subscribe">
          <input type="text" placeholder="Enter your email" />
          <button className="appCo__btn appCo__btn_blue">Subscribe</button>
        </form>
      </div>
      <div className="container footer__aligner">
        <div className="footer__logo">
          AppCo
          </div>
        <div className="footer__rights">
          All rights reserved by ThemeTags
          </div>
        <div className="footer__copyright">
          Copyrights © 2019.
          </div>
      </div>
    </footer>
  )
}

export default Footer