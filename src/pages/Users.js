import React, { Component } from 'react'
import LightHeader from '../components/LightHeader'
import UserList from '../components/UserList'
import LightFooter from '../components/LightFooter'
class Users extends Component {
  render() {
    return (
      <React.Fragment>
        <LightHeader />
        <UserList />
        <LightFooter />
      </React.Fragment>
    )
  }
}

export default Users;