import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form'

const required = (val) => val && val.length;

class ASL extends Component {

    handleSubmit(values) {
        this.props.postInputSentence(values);
        this.props.addEnglishInputText(values)
    }

    render() {
        return (
            <div className='content'>

                <LocalForm onSubmit={(values) => this.handleSubmit(values)} className='my-auto ml-0 mr-0 w-100 h-100'
                    initialState={{ englishInputText: this.props.vals.englishInputText }}>
                    <Row className="form-group my-auto h-100">
                        <Col md={10}>
                            <Row className="form-group mb-5">
                                <Col>
                                    <Control.textarea model='.englishInputText' name='englishInputText' id='englishInputText' rows='10'
                                        className='form-control border'
                                        placeholder='English text here...'
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors className='text-danger'
                                        model='.englishInputText'
                                        show='touched'
                                        messages={{
                                            required: 'Required'
                                        }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <p className='text-center border'>{this.props.vals.aslOutputText}</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='d-flex align-center'>
                            <Button type='submit' className='my-auto' color='primary'>Translate</Button>
                        </Col>
                    </Row>
                </LocalForm>
            </div>
        )
    }
}

export default ASL;