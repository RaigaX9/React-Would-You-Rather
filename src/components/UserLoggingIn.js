import React, { Component } from 'react'
import { connect } from "react-redux"
import { userLogin } from '../actions/users'
import {Redirect, Route} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import PageNotFound from "./404Page";

class UserLoggingIn extends Component {

    onClickEvent = (id) => {
        this.props.dispatch(userLogin(id))
    };

    render() {
        const { users, location } = this.props;

        if (location.pathname !== '/') {
            return <Route component={PageNotFound}/>

        }

        return (
            <div>

                {
                    <div>
                        <h1>Login into one of these users: </h1>
                        {Object.keys(users).map(userid => {
                            return users[userid]
                        }).map(user =>
                            <button type="button" key={user.id} onClick={() => this.onClickEvent(user.id)}>
                                <div>
                                    <div>{user.name}</div>
                                </div>
                            </button>)}
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, users }) => {
    return {
        users: users,
        authedUser
    }
};

export default withRouter(connect(mapStateToProps)(UserLoggingIn))