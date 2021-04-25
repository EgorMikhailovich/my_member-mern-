import React from "react"
import {
  Card,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  CustomInput,
  Button,
  Label
} from "reactstrap"
import { User, Users, Upload, File } from "react-feather"
import { connect } from "react-redux"
import { ADD_NEW_MEMBER } from "../../../redux/actions/newmember/index"
import { GET_CATEGORIES } from "../../../redux/actions/programe/index"




class CreateMember extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }
  state = {
    firstname: "",
    lastname: "",
    bussinessname: "",
    bussinessAddress: "",
    phone: "",
    username: "",
    email: "",
    password: "",
    location_name: "",
    dob: "",
    status:""
  }

  componentDidMount() {
    this.props.GET_CATEGORIES();
  }

  imageHandler = e => {
    this.setState({ ...this.state, memberprofileImage: e.target.files[0], memberProfileUrl: URL.createObjectURL(e.target.files[0]) });
  }

  changeHandler = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
   
  }

  handleRegister = e => {
    e.preventDefault()
    const { memberProfileUrl, ...rest } = this.state;

    this.props.ADD_NEW_MEMBER({ ...rest });
  }

  render() {
    return (
      <Card>
        <CardBody>
          <Form className="mt-2" onSubmit={this.handleRegister} >
            <Row>
              <Col md="6" sm="12">
                <h5>
                  <User />
                  Contact Info
                </h5>
                <Label>First Name </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    placeholder="First Name"
                    name={"firstname"}
                    value={this.state.firstname}
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
                    value={this.state.lastname}
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
                    value={this.state.bussinessname}
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
                    value={this.state.bussinessAddress}
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
                    value={this.state.phone}
                    onChange={this.changeHandler}
                    required
                  />
                </FormGroup>

              </Col>
              <Col md="6" sm="12">
                <h5>
                  <Users />
                  User Info
                </h5>
                <FormGroup>
                  <Label> Satus </Label>
                  <CustomInput type="select" name="status" id="name">
                    <option value="true">Active</option>
                    <option value="false">Deactivate</option>
                  </CustomInput>
                </FormGroup>
                <Label>Username </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    placeholder="Username"
                    name={"username"}
                    value={this.state.username}
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
                    value={this.state.location_name}
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
                    value={this.state.email}
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
                    value={this.state.password}
                    onChange={this.changeHandler}
                    required
                  />
                </FormGroup>
                <FormGroup className="form-label-group">
                  <Button.Ripple
                    color="primary"
                    type="submit"
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
    categories: state.program.categoryList
  }
}
export default connect(mapStateToProps, { ADD_NEW_MEMBER, GET_CATEGORIES })(CreateMember)
