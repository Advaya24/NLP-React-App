import React, { Component } from 'react';
import { postAnalogyInput, postInputSentence, addEnglishInputText, addAnalogyInput } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Analogy from './AnalogyComponent';
import ASL from './ASLComponent';
import '../Main.css';
import Header from './HeaderComponent';


const mapStateToProps = state => {
    return {
        analogyForm: state.analogyForm,
        aslForm: state.aslForm
    }
}

const mapDispatchToProps = (dispatch) => ({
    postAnalogyInput: (formInput) => dispatch(postAnalogyInput(formInput)),
    postInputSentence: (formInput) => dispatch(postInputSentence(formInput)),
    addEnglishInputText: (formInput) => dispatch(addEnglishInputText(formInput)),
    addAnalogyInput: (formInput) => dispatch(addAnalogyInput(formInput))
})

class Main extends Component {

    constructor(props) {
        super(props);

        console.log('Main constructed');
    }


    render() {

        const AnalogyPage = () => {
            return (
                <Analogy postAnalogyInput={this.props.postAnalogyInput}
                    vals={this.props.analogyForm}
                    addAnalogyInput={this.props.addAnalogyInput} />
            );
        }

        const ASLPage = () => {
            console.log("ASLPage called");
            return (
                <ASL postInputSentence={this.props.postInputSentence}
                    vals={this.props.aslForm}
                    addEnglishInputText={this.props.addEnglishInputText} />
            );
        }
        return (
            <div className='m-0'>

                <Header />
                {/* <div className='container d-flex my-auto'> */}
                <div className='content'>
                    <Switch>
                        <Route path='/analogy' component={AnalogyPage} />
                        <Route exact path='/asl' component={ASLPage} />
                        <Redirect to='/analogy' />
                    </Switch>
                </div>
            </div>
            // </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));