import React from 'react'
import { connect } from "react-redux";
import { NavLink, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { userLogin } from '../actions/users'

const mapStateToProps = ({ authedUser, users }) => {
    return {
        authedUser,
        users
    }
};

const NavigationBar = ({ dispatch, authedUser, users }) => {
    return (
        <div>
            <nav className='nav'>
                <ul>
                    <li>
                        <div>
                            Logged in as <span className="bold_txt">{`${users[authedUser].name}`}</span>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <NavLink to='/'>
                            Questions Not Answered
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/answered'>
                            Questions Answered
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/leaderboard'>
                            Leaderboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add'>
                            Add New Question
                        </NavLink>
                    </li>
                    <li className="hideLi">
                        <NavLink to='/404'>
                            404
                        </NavLink>
                    </li>
                    <li>
                        <Link to='/' onClick={() => {dispatch(userLogin(null))}}>
                            Log Out
                        </Link>

                    </li>
                </ul>
            </nav>
        </div>

    )
};

export default withRouter(connect(mapStateToProps)(NavigationBar));
