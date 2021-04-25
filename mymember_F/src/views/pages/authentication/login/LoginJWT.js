import React from "react"
import { Link, withRouter } from "react-router-dom";
import { CardBody, FormGroup, Form, Input, Button, Label } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Mail, Lock, Check } from "react-feather"
import { loginWithJWT, LOGIN_WITH_JWT } from "../../../../redux/actions/auth/loginActions"
import { connect } from "react-redux";
import { compose } from 'redux';
import { history } from "../../../../history"

class LoginJWT extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false
  }
  componentDidMount(){
    if(!!localStorage.getItem("access_token")){
      console.log("history" , this.props.history)
      this.props.history.push('/dashboard');
    }
  }
  handleLogin = e => {
    e.preventDefault()
    this.props.LOGIN_WITH_JWT(this.state)
  }
  handleRemember = e => {
    this.setState({
      remember: e.target.checked
    })
  }
  render() {
    return (
      <React.Fragment>
        <CardBody className="pt-1">
          <Form onSubmit={this.handleLogin}>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="username"
                placeholder="Username"
                value={this.state.username}
                onChange={e => this.setState({ username: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Mail size={15} />
              </div>
              <Label>User Name</Label>
            </FormGroup>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Lock size={15} />
              </div>
              <Label>Password</Label>
            </FormGroup>
            <FormGroup className="d-flex justify-content-between align-items-center">
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label="Remember me"
                defaultChecked={false}
                onChange={this.handleRemember}
              />
              <div className="float-right">
                <Link to="/pages/forgot-password">Forgot Password?</Link>
              </div>
            </FormGroup>
            <div className="d-flex justify-content-between">
              <Button.Ripple
                color="primary"
                outline
                onClick={() => {
                  history.push("/pages/register")
                }}
              >
                Register
              </Button.Ripple>
              <Button.Ripple color="primary" type="submit">
                Login
              </Button.Ripple>
            </div>
            {/* {!this.pass ? (
                  <p className="alert">Invalid UserName or Password</p>
                ) : (
                  ""
                )} */}
          </Form>
        </CardBody>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    values: state.auth.login
  }
}
export default compose(withRouter, connect(mapStateToProps, { loginWithJWT, LOGIN_WITH_JWT }))(LoginJWT);
