import React from 'react'
import { Link } from 'react-router-dom'
import rightArr from '../assets/rightArr.svg'
import leftPagination from '../assets/leftPagination.svg'
import rightPagination from '../assets/rightPagination.svg'

const someUser = [
  { id: 1, firstName: "Samuel", lastName: "Frost", email: 'sirious.sam@gmail.com', gender: 'male', ip: "192.168.32.05", totalClick: "290 883", totalView: '290 883' },
  { id: 2, firstName: "Samuel", lastName: "Frost", email: 'sirious.sam@gmail.com', gender: 'male', ip: "192.168.32.05", totalClick: "290 883", totalView: '290 883' },
  { id: 3, firstName: "Samuel", lastName: "Frost", email: 'sirious.sam@gmail.com', gender: 'male', ip: "192.168.32.05", totalClick: "290 883", totalView: '290 883' },
  { id: 4, firstName: "Samuel", lastName: "Frost", email: 'sirious.sam@gmail.com', gender: 'male', ip: "192.168.32.05", totalClick: "290 883", totalView: '290 883' },
  { id: 5, firstName: "Samuel", lastName: "Frost", email: 'sirious.sam@gmail.com', gender: 'male', ip: "192.168.32.05", totalClick: "290 883", totalView: '290 883' },
  { id: 6, firstName: "Samuel", lastName: "Frost", email: 'sirious.sam@gmail.com', gender: 'male', ip: "192.168.32.05", totalClick: "290 883", totalView: '290 883' },
  { id: 7, firstName: "Samuel", lastName: "Frost", email: 'sirious.sam@gmail.com', gender: 'male', ip: "192.168.32.05", totalClick: "290 883", totalView: '290 883' },
  { id: 8, firstName: "Samuel", lastName: "Frost", email: 'sirious.sam@gmail.com', gender: 'male', ip: "192.168.32.05", totalClick: "290 883", totalView: '290 883' },
  { id: 9, firstName: "Samuel", lastName: "Frost", email: 'sirious.sam@gmail.com', gender: 'male', ip: "192.168.32.05", totalClick: "290 883", totalView: '290 883' },
  { id: 10, firstName: "Samuel", lastName: "Frost", email: 'sirious.sam@gmail.com', gender: 'male', ip: "192.168.32.05", totalClick: "290 883", totalView: '290 883' },
  { id: 11, firstName: "Samuel", lastName: "Frost", email: 'sirious.sam@gmail.com', gender: 'male', ip: "192.168.32.05", totalClick: "290 883", totalView: '290 883' },
  { id: 12, firstName: "Samuel", lastName: "Frost", email: 'sirious.sam@gmail.com', gender: 'male', ip: "192.168.32.05", totalClick: "290 883", totalView: '290 883' },
  { id: 13, firstName: "Samuel", lastName: "Frost", email: 'sirious.sam@gmail.com', gender: 'male', ip: "192.168.32.05", totalClick: "290 883", totalView: '290 883' },
  { id: 14, firstName: "Samuel", lastName: "Frost", email: 'sirious.sam@gmail.com', gender: 'male', ip: "192.168.32.05", totalClick: "290 883", totalView: '290 883' },
  { id: 15, firstName: "Samuel", lastName: "Frost", email: 'sirious.sam@gmail.com', gender: 'male', ip: "192.168.32.05", totalClick: "290 883", totalView: '290 883' },
  { id: 16, firstName: "Samuel", lastName: "Frost", email: 'sirious.sam@gmail.com', gender: 'male', ip: "192.168.32.05", totalClick: "290 883", totalView: '290 883' },

]
function UserList(props) {
  const users = someUser.map(user => {
    return (
      <tr>
        <td>
          {user.id}
        </td>
        <td>
          {user.firstName}
        </td>
        <td>
          {user.lastName}
        </td>
        <td>
          {user.email}
        </td>
        <td>
          {user.gender}
        </td>
        <td>
          {user.ip}
        </td>
        <td>
          {user.totalClick}
        </td>
        <td>
          {user.totalView}
        </td>
      </tr>
    )
  })
  return (
    <section className="userlist">
      <div className="container">
        <div className="breadcrumb">
          <div className="breadcrumb__item">
            <Link to="/">Main page</Link>
          </div>
          <img src={rightArr} alt="" />
          <div className="breadcrumb__item breadcrumb__item_active">
            <Link to="/users" >Users statistic</Link>
          </div>
        </div>
        <div className="userlist__title">
          <h2>Users statistics</h2>
        </div>
        <table className="userlist__table">
          <thead>
            <tr>
              <td>Id</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email</td>
              <td>Gender</td>
              <td>IP adress</td>
              <td>Total clicks</td>
              <td>Total page views</td>
            </tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </table>
        <div className="userlist__pagination">
          <div className="numbers">
            <span className="left">
              <img src={leftPagination} alt="" />
            </span>
            <div className="numbers_1 active">
              1
            </div>
            <div className="numbers_2">
              2
            </div>
            <div className="numbers_3">
              3
            </div>
            <div className="numbers_4">
              4
            </div>
            <div className="numbers_5">
              5
            </div>
            <span className="right">
              <img src={rightPagination} alt="" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
export default UserList;
