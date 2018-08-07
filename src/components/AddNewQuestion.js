import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSavedQuestions } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class AddNewQuestion extends Component {

    state = {
        op1: '',
        op2: '',
        redirecthome: false
    };

    option1Change = (x) => {
        const txt = x.target.value;
        this.setState((state) => ({...state, op1: txt}));
    };

    option2Change = (x) => {
        const txt2 = x.target.value;
        this.setState((state) => ({...state, op2: txt2}));
    };

    submitQ = (x) => {
        const {op1, op2} = this.state;
        const {dispatch} = this.props;

        dispatch(handleSavedQuestions({ optionOneText: op1, optionTwoText: op2 }));
        this.setState(() => ({op1: "", op2: "", redirecthome: true}));
        //Added this to prevent the incorrect form submission warning
        x.preventDefault();
    };

    render() {
        const { op1, op2, redirecthome } = this.state;

        if (redirecthome === true) {
            return <Redirect to='/notanswered' />
        }

        return (
            <form onSubmit={this.submitQ}>
                <br/>
                <h2>Would You Rather</h2>
                <hr />
                <div>
                    <label>First Option:</label>
                    <div>
                        <textarea value={op1} onChange={this.option1Change} />
                    </div>
                </div>
                <div>
                    <label>Second Option:</label>
                    <div>
                        <textarea value={op2} onChange={this.option2Change} />
                    </div>
                </div>
                <hr />
                <div>
                    <button type='submit' disabled={op1 === "" || op2 === ""}>
                        <span>Submit</span>
                    </button>
                </div>
            </form>

        )
    }
}

export default connect()(AddNewQuestion)