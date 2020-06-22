// import React from 'react';
// import { useFormik } from 'formik';
// import { Row, Col, Button } from 'reactstrap';

// const FormikTest = ({aslOutputText, postInputSentence}) => {
//     const formik = useFormik({
//         initialValues: {
//             englishInputText: ''
//         },
//         mapPropsToValues: () => ({
//             aslOutputText: aslOutputText
//         }),
//         onSubmit: values => {
//             alert('Input: ' + values.englishInputText);
//             postInputSentence(values);
//         }
//     })

//     return (
//         <form onSubmit={formik.handleSubmit} className='my-auto ml-0 mr-0 w-100 h-100'>
//             <Row className="form-group my-auto h-100">
//                 <Col md={8}>
//                     <Row className="form-group mb-5">
//                         <Col>
//                             <textarea name='englishInputText' id='englishInputText' rows='10'
//                                 className='form-control border'
//                                 placeholder='English text here...'
//                                 onChange={formik.handleChange}
//                                 value={formik.values.englishInputText}
//                             // validators={{
//                             //     required
//                             // }}
//                             />
//                             {/* <Errors className='text-danger'
//                                 model='.englishInputText'
//                                 show='touched'
//                                 messages={{
//                                     required: 'Required'
//                                 }} /> */}
//                         </Col>
//                     </Row>
//                     <Row className="form-group">
//                         <Col>
//                             <p className='text-center border'>{aslOutputText}</p>
//                         </Col>
//                     </Row>
//                 </Col>
//                 <Col className='d-flex align-center'>
//                     <Button type='submit' className='my-auto' color='primary'>Translate</Button>
//                 </Col>
//             </Row>
//         </form>
//     )
// }

// export default FormikTest;

import React from 'react'
import { Field, reduxForm } from 'redux-form';

const renderInput = props =>
    <input {...props.input} type='textarea' rows='10' />

let TestForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field component={renderInput} name='englishInputText' id='englishInputText' />
            <button className='btn btn-primary' type='submit'>Click</button>
        </form>
    )
}

export default reduxForm({
    form: 'test',
})(TestForm);

// function TestComponent({ postInputSentence, aslOutputText }) {
//     return (
//         <TestForm onSubmit={postInputSentence} />
//     )
// }
// export default TestComponent;