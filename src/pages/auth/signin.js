import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { signInAction } from '../../redux/actions/auth/signInAction'
import { Row, Col, Button, FormGroup, Label, Input, Alert } from 'reactstrap';
import './auth.scss';

class Signin extends Component {
  submit = (values) => {
    console.log('Form submitted')
    console.log(values)
    return this.props.signInAction(values, this.props.history)
  }
  
  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <Alert color="danger">
          {this.props.errorMessage}
        </Alert>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Row className='mt-5'>
        <Col sm='12' md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
          <FormGroup row>
            <h2>Sign In</h2>
          </FormGroup>
          <FormGroup row>
            {this.errorMessage()}
          </FormGroup>
          <form onSubmit={handleSubmit(this.submit)}>
            <FormGroup row>
              <Label for="exampleEmail">Email</Label>
              <Field name="email" component="input" type="text" placeholder="john@example.com" autoComplete="on" className="form-control" />
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword">Password</Label>
              <Field name="password" component="input" type="password" placeholder="Password" autoComplete="on" className="form-control" />
            </FormGroup>
            <FormGroup row>
              <Button color="primary" type="submit">Sign In</Button>
            </FormGroup>
          </form>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

const reduxFormSignin = reduxForm({
  form: 'signin'
})(Signin)

export default connect(mapStateToProps, {signInAction})(reduxFormSignin)
