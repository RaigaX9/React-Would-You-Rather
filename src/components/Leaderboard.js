import React from "react"
import { connect } from "react-redux"

const Leaderboard = ({users}) => {
    return (
        <div>
            <br/>
            <div>
                <div>
                    <hr/>
                    {users.map(user =>
                    <div key={user.id} >
                        <div className="bold_txt">{user.name}</div>
                        <div><img alt='avatar' className='avatar' src={user.avatarURL} /></div>
                        <div>Asked Questions: {user.questions.length}</div>
                        <div>Questions Answers: {Object.keys(user.answers).length}</div>
                        <hr/>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = ({users}) => {

    return {
        users: Object.keys(users).map(user => {
                return {
                    ...users[user],
                    score: (users[user].questions.length + Object.keys(users[user].answers).length)
                }
            }).sort((x, y) => {
                return y.score - x.score;
            })
    }
};

export default connect(mapStateToProps)(Leaderboard);