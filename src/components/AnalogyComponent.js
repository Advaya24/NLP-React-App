import React, { Component } from 'react';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Row, Col, Button } from 'reactstrap';
import '../Main.css';

const required = (val) => val && val.length;

class Analogy extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        console.log("Analogy constructed");
    }

    handleSubmit(values) {
        // console.log("Current state is: " + JSON.stringify(values));
        // alert("Current state is: " + JSON.stringify(values));
        this.props.postAnalogyInput(values);
        this.props.addAnalogyInput(values);
        // this.props.resetForm();
    }


    render() {
        return (
            <div className='content'>

                <LocalForm onSubmit={(values) => this.handleSubmit(values)} className='my-auto h-100'
                    initialState={{
                        x1: this.props.vals.x1,
                        x2: this.props.vals.x2,
                        y1: this.props.vals.y1
                    }}>
                    <Row className="form-group">
                        <Col md={4} className="d-flex justify-content-center">
                            <Control.text model='.x1' name='x1' id='x1'
                                placeholder='Cat'
                                className='form-control text-center'
                                validators={{
                                    required
                                }} />
                            <Errors className='text-danger'
                                model='.x1'
                                show='touched'
                                messages={{
                                    required: "Required"
                                }} />
                        </Col>
                        <Col md={4} className="d-flex justify-content-center">
                            <p className='text-center'>is to</p>
                        </Col>
                        <Col md={4} className="d-flex justify-content-center">
                            <Control.text model='.x2' name='x2' id='x2'
                                placeholder='Kitten'
                                className='form-control text-center'
                                validators={{
                                    required
                                }} />
                            <Errors className='text-danger'
                                model='.x2'
                                show='touched'
                                messages={{
                                    required: "Required"
                                }} />
                        </Col>
                    </Row>
                    <Row className='form-group'>
                        <Col className="d-flex justify-content-center">
                            <p className='text-center'>what</p>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={4} className="d-flex justify-content-center">
                            <Control.text model='.y1' name='y1' id='y1'
                                placeholder='Dog'
                                className='form-control text-center'
                                validators={{
                                    required
                                }} />
                            <Errors className='text-danger'
                                model='.y1'
                                show='touched'
                                messages={{
                                    required: "Required"
                                }} />
                        </Col>
                        <Col md={4} className="d-flex justify-content-center">
                            <p className='text-center'>is to</p>
                        </Col>
                        <Col md={4} className="d-flex justify-content-center">
                            <p className='form-control'>{this.props.vals.y2}</p>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <Button type="submit" color="primary">Find out</Button>
                        </Col>
                    </Row>
                </LocalForm>
            </div>
        );
    }
}

export default Analogy;