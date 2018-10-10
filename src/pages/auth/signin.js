import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { signInAction } from '../../redux/actions/signInAction'
import { Row, Col, Button, FormGroup, Label, Input, Alert } from 'reactstrap';
import './auth.scss';

class Signin extends Component {
  submit = (values) => {
    this.props.signInAction(values, this.props.history)
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
              <Input type="email" name="email" id="email" placeholder="john@example.com" />
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="password" placeholder="password" />
            </FormGroup>
            <FormGroup row>
              <Button color="primary">Sign In</Button>
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
