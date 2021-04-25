import React from "react"
import {
  Card,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label
} from "reactstrap"
import { User, Users, Upload, File } from "react-feather"
import { connect } from "react-redux"
import { EDIT_MEMBER } from "../../../redux/actions/newmember/index"
import { GET_CATEGORIES } from "../../../redux/actions/programe/index"




class EditMember extends React.Component {
  constructor(){
    super();
    this.myRef = React.createRef();
  }
  state = {
    disable:false
  }

  componentDidMount(){
    this.props.GET_CATEGORIES();
  }  
  
  imageHandler = e => {
    this.setState({...this.state, memberprofileImage : e.target.files[0], memberProfileUrl : URL.createObjectURL(e.target.files[0])});
  } 

  changeHandler = e => {
    this.setState({...this.state, [e.target.name] : e.target.value});
  }
  
  handleRegister = e => {
    this.setState({disable:true})
    e.preventDefault()
    this.props.EDIT_MEMBER(this.state,this.props.info.data._id);
  }

  render() {
    let {data} = this.props.info;
    const {disable} = this.state
    return (
      <Card>
        <CardBody>
          <Form className="mt-2" onSubmit={this.handleRegister} >
            <Row>
              <Col md="6" sm="12">
                <h5>
                  <User/>
                  Contact Info
                </h5>
              <Label>First Name </Label>
              <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    placeholder="First Name"
                    name={"firstname"}
                    defaultValue={data.firstname}
                    onChange={this.changeHandler}
                    required
                  />
              </FormGroup>
                <Label>Last Name </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    defaultValue={data.lastname}
                    onChange={this.changeHandler}
                    required
                  />
                </FormGroup>
                <Label>Bussiness name</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    placeholder="Bussiness name"
                    name="bussinessname"
                    defaultValue={data.bussinessname}
                    onChange={this.changeHandler}
                    required
                  />
                </FormGroup>
                <Label>Bussiness address</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    placeholder="Bussiness address"
                    name="bussinessAddress"
                    defaultValue={data.bussinessAddress}
                    onChange={this.changeHandler}
                    required
                  />
                </FormGroup>
                <Label>Phone </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="phone"
                    placeholder="Phone"
                    defaultValue={data.phone}
                    onChange={this.changeHandler}
                    required
                  />
                </FormGroup>
                
              </Col>
              <Col  md="6" sm="12">  
                <h5>
                  <Users/>
                  User Info
                </h5>
              <Label>Username </Label>
              <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    placeholder="Username"
                    name="username"
                    defaultValue={data.username}
                    onChange={this.changeHandler}
                    required
                  />
              </FormGroup>
                <Label>Email Address </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="email"
                    name="email"
                    placeholder="email"
                    defaultValue={data.email}
                    onChange={this.changeHandler}
                    required
                  />
                </FormGroup>
                <Label>Location </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="location_name"
                    name="location_name"
                    placeholder="location_name"
                    defaultValue={data.location_name}
                    onChange={this.changeHandler}
                    required
                  />
                </FormGroup>
                <Label>Status</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="status"
                    name="status"
                    placeholder="status"
                    defaultValue={data.status}
                    onChange={this.changeHandler}
                    required
                  />
                </FormGroup>
                <Label>Password </Label>
              <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    placeholder="password"
                    name={"password"}
                    defaultValue={data.password}
                    onChange={this.changeHandler}
                    required
                  />
              </FormGroup>
                <FormGroup className="form-label-group">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    disabled={disable}
                    className="mr-1 mb-1"
                  >
                    Submit
                  </Button.Ripple>
                </FormGroup>
              </Col>
             
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
const mapStateToProps = state => {
  return {
    values: state.auth.register,
    categories : state.program.categoryList 
  }
}
export default connect(mapStateToProps,{ EDIT_MEMBER ,GET_CATEGORIES})(EditMember)
