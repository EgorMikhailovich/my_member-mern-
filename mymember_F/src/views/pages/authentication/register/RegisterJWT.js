import React from "react"
import { Form, FormGroup, Input, Label, Button, Toast, ToastBody,CustomInput } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import { connect } from "react-redux"
import { signupWithJWT , SIGN_UP_JWT} from "../../../../redux/actions/auth/registerActions"
import { history } from "../../../../history"


const Notification = () => {
  return <>
  <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastBody>
            Your account created successfully!
          </ToastBody>
        </Toast>
      </div>
  </>
}


class RegisterJWT extends React.Component {
  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone:"",
    // confirmPass: "",
    bussinessname: "",
    bussinessAddress:"",
    industry : "",
    // industrytype:"",
    username:""
  }

  changeHandler = (e) => {
     this.setState({...this.state, [e.target.name] : e.target.value});
  }

  handleRegister = e => {
    e.preventDefault();
    if(this.state.firstname==""){
      this.setState({
        error: true,
        errorMsg: "Kindly fill first name" 
      })
    }
    else if(this.state.lastname==""){
      this.setState({
        error: true,
        errorMsg: "Kindly fill last name" 
      })
    }
    else if(this.state.email==""){
      this.setState({
        error: true,
        errorMsg: "Kindly fill email" 
      })
    }
    else if(this.state.phone==""){
      this.setState({
        error: true,
        errorMsg: "Kindly fill phone" 
      })
    }
    else if(this.state.bussinessname==""){
      this.setState({
        error: true,
        errorMsg: "Kindly fill bussiness name" 
      })
    }
    else if(this.state.bussinessAddress==""){
      this.setState({
        error: true,
        errorMsg: "Kindly fill bussiness address" 
      })
    }
    else if(this.state.username==""){
      this.setState({
        error: true,
        errorMsg: "Kindly fill user name" 
      })
    }
    else if(this.state.password==""){
      this.setState({
        error: true,
        errorMsg: "Kindly fill password" 
      })
    }
    else{
      this.setState({
        error: false,
        errorMsg: "" 
      })
    
    
    this.props.SIGN_UP_JWT({...this.state});
    }
  }
  
  render() {
    
    return (
      <>
      {
          this.props.register.status && <Notification/>
      }
      <Form action="/" onSubmit={this.handleRegister}>
        <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="First Name"
            required
            name="firstname"
            
            value={this.state.firstname}
            onChange={this.changeHandler}
          />
          <Label>First Name</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="Last Name"
            required
            name="lastname"
            
            value={this.state.lastname}
            onChange={this.changeHandler}
          />
          <Label>Last Name</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="email"
            placeholder="Email"
            required
            name="email"
            
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <Label>Email</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="Phone"
            required
            name="phone"
            
            value={this.state.phone}
            onChange={this.changeHandler}
          />
          <Label>Phone</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="Bussiness Name"
            required
            name="bussinessname"
            
            value={this.state.bussinessname}
            onChange={this.changeHandler}
          />
          <Label>Bussiness Name</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="Bussiness Address"
            required
            name="bussinessAddress"
            
            value={this.state.bussinessAddress}
            onChange={this.changeHandler}
          />
          <Label>Bussiness Address</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
            <CustomInput onChange={(e)=>this.changeHandler(e, 'industry')} type="select" name="industry" id="industry" >
                <option>General Business</option>
                <option>Real Estate</option>
                <option>Fitness</option>
                <option>Martial Arts</option>
                <option>Dance</option>
                <option>Yoga</option>
            </CustomInput>
            <Label>Industry</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="User Name"
            required
            name="username"
            
            value={this.state.username}
            onChange={this.changeHandler}
          />
          <Label>User Name</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="password"
            placeholder="Password"
            required
            name="password"
            
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <Label>Password</Label>
        </FormGroup>
        <FormGroup>
          <Checkbox
            color="primary"
            icon={<Check className="vx-icon" size={16} />}
            label=" I accept the terms & conditions."
            defaultChecked={true}
          />
        </FormGroup>
        <div className="d-flex justify-content-between">
          <Button.Ripple
            color="primary"
            outline
            onClick={() => {
              history.push("/pages/login")
            }}
          >
            Login
          </Button.Ripple>
          <Button.Ripple color="primary" type="submit">
            Register
          </Button.Ripple>
        </div>
      </Form>
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    register: state.auth.register
  }
}
export default connect(mapStateToProps, { signupWithJWT, SIGN_UP_JWT })(RegisterJWT)
