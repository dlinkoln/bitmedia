import React from 'react'
import { Link } from 'react-router-dom'
import phone from '../assets/phone.svg'
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo M_F">
          AppCo
          </div>
      </div>
      <div className="container header_aligner">
        <div className="header__info">
          <h1><span>Brainstorming</span> for desired perfect Usability</h1>
          <p>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>

          <Link to='/users' >
            <button className="appCo__btn appCo__btn_white">Users</button>
          </Link>

        </div>
        <div className="header__product">
          <img src={phone} alt="" />
        </div>
      </div>
    </header>
  )
}
export default Header;
