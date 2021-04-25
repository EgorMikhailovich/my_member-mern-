import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label
} from "reactstrap"
// import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check, User, Users } from "react-feather"
import { connect } from "react-redux"
import { ADD_NEW_STUDENT } from "../../../redux/actions/newstudent/index"
import { history } from "../../../history"
import AttendedDetail from "./attendedDetails"
import StaffingDetail from "./staffingDetail"
import pdfImg from "../../../assets/img/pdf.png"

class CreateStudent extends React.Component {
  state = {
  studentType:"",
  firstName:"",
  lastName:"",
  status:"",
  dob:"",
  age:"",
  gender:"",
  email:"",
  primaryPhone:"",
  secondaryNumber:"",
  address:"",
  country:"",
  state:"",
  zipPostalCode:"",
  notes:"",
  studentBeltSize:"",
  program:"",
  startDate:"",
  expiredDate:"",
  lastPromotion:"",
  location:"",
  ID:"",
  dan:"",
  customId:"",
  leadsTracking:"",
  staff:"",
  intrested:"",
  school:"",
  addToGroup:"",
  familyName:""
 }

  handleRegister = e => {
    alert('Your favorite flavor is: ' + this.state.value);
    e.preventDefault()
    this.props.ADD_NEW_STUDENT(
      this.state.studentType,
      this.state.firstName,
      this.state.lastName,
      this.state.status,
      this.state.dob,
      this.state.age,
      this.state.gender,
      this.state.email,
      this.state.primaryPhone,
      this.state.secondaryNumber,
      this.state.address,
      this.state.country,
      this.state.state,
      this.state.zipPostalCode,
      this.state.notes,
      this.state.studentBeltSize,
      this.state.program,
      this.state.startDate,
      this.state.expiredDate,
      this.state.lastPromotion,
      this.state.location,
      this.state.ID,
      this.state.dan,
      this.state.customId,
      this.state.leadsTracking,
      this.state.staff,
      this.state.intrested,
      this.state.school,
      this.state.addToGroup,
      this.state.familyName

    )
  }

  render() {
    return (

      <Card>
       
        <CardBody>
          <Form className="mt-2" action="/" onSubmit={this.handleRegister} >
            <Row>
              <Col md="6" sm="12">
                <h5>
                  <User/>
                  Contact Info
                </h5>
                <Label>Type </Label>
                <FormGroup>
                    <Input 
                      type="select" 
                      name="select" 
                      // id="exampleSelect"
                      value={this.state.studentType}
                      onChange={e => this.setState({ studentType: e.target.studentType })}
                    >
                      <option value="Active Student">Active Student</option>
                      <option value="Former Student">Former Student</option>
                      <option value="Leads">Leads</option>
                      <option value="Active Trial">Active Trial</option>
                      <option value="Former Trial">Former Trial</option>
                    </Input>
              </FormGroup>
              <Label>First Name </Label>
              <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="name"
                    // id="nameMulti"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={e => this.setState({ firstName: e.target.firstName })}
                   
                    
                  />
              </FormGroup>
                <Label>Last Name </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="name"
                    // id="nameMulti"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={e => this.setState({ lastName: e.target.lastName })}
                  />
                </FormGroup>
                <Label> Select Status </Label>
                <FormGroup>
                    <Input 
                      type="select" 
                      name="select" 
                      // id="exampleSelect"
                      value={this.state.status}
                      onChange={e => this.setState({ status: e.target.status })}
                      >
                      <option value="Active">Active </option>
                      <option value="Inactive">Inactive</option>
                    </Input>
                </FormGroup>
                <Label> DOB </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="date"
                    name="name"
                    // id="nameMulti"
                    placeholder="Last Name"
                    value={this.state.dob}
                    onChange={e => this.setState({ dob: e.target.dob })}
                  />
                </FormGroup>
                <Label> Gender </Label>
                <FormGroup>
                    <Input 
                    type="select"  
                    name="select" 
                    // id="exampleSelect"
                    value={this.state.gender}
                    onChange={e => this.setState({ gender: e.target.gender })}
                    >
                      <option value="Male">Male </option>
                      <option value="Female">Female</option>
                    </Input>
                </FormGroup>
                <Label>Age </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="name"
                    // id="nameMulti"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={e => this.setState({ age: e.target.age })}
                    
                  />
                </FormGroup>
                <Label>Email Address </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="email"
                    name="name"
                    // id="nameMulti"
                    placeholder="email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.email })}
                  />
                </FormGroup>
                <Label>Primary Phone </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="name"
                    // id="nameMulti"
                    placeholder="primary phone"
                    value={this.state.primaryPhone}
                    onChange={e => this.setState({ primaryPhone: e.target.primaryPhone })}
                  />
                </FormGroup>
                <Label>Secondary Phone </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="name"
                    // id="nameMulti"
                    placeholder="Secondary phone"
                    value={this.state.secondaryNumber}
                    onChange={e => this.setState({ secondaryNumber: e.target.secondaryNumber })}
                  />
                </FormGroup>
                <Label>Address </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="name"
                    // id="nameMulti"
                    placeholder="address"
                    value={this.state.address}
                    onChange={e => this.setState({ address: e.target.address })}
                  />
                </FormGroup>
                <Label>Country </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="name"
                    // id="nameMulti"
                    placeholder="country"
                    value={this.state.country}
                    onChange={e => this.setState({ country: e.target.country })}
                  />
                </FormGroup>
                <Label>State </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="name"
                    // id="nameMulti"
                    placeholder="State"
                    value={this.state.state}
                    onChange={e => this.setState({ state: e.target.state })}
                  />
                </FormGroup>
                <Label>Zip code </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="name"
                    // id="nameMulti"
                    placeholder="Zip Postal code"
                    value={this.state.zipPostalCode}
                    onChange={e => this.setState({ zipPostalCode: e.target.zipPostalCode })}
                  />
                </FormGroup>
                <Label>Notes </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="textarea"
                    name="name"
                    // id="nameMulti"
                    placeholder="notes"
                    value={this.state.notes}
                    onChange={e => this.setState({ notes: e.target.notes })}
                  />
                </FormGroup>
                
                
              </Col>
              <Col  md="6" sm="12">
              <h5>
                  <Users/>
                  Membership Info
                </h5>
              <Label>Student Belt Size </Label>
                <FormGroup>
                    <Input 
                      type="select" 
                      name="select" 
                      // id="exampleSelect"
                      value={this.state.studentBeltSize}
                      onChange={e => this.setState({ studentBeltSize: e.target.studentBeltSize })}
                    >
                      {/* <option>Student Belt Size</option> */}
                      <option value="LT">LT</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </Input>
              </FormGroup>
              <Label>Program </Label>
                <FormGroup>
                    <Input 
                      type="select" 
                      name="select" 
                      // id="exampleSelect"
                      value={this.state.program}
                      onChange={e => this.setState({ program: e.target.program })}
                      >
                      <option value="Little Tigers">Little Tigers</option>
                      <option value="Taekwondo">Taekwondo</option>
                      <option value="Kickboxing">Kickboxing</option>
                      <option value="Tasma">Tasma</option>
                      <option value="Tean & Adult">Tean & Adult</option>
                    </Input>
              </FormGroup>
              <Label>Start Date </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="date"
                    name="name"
                    // id="nameMulti"
                    placeholder="N/A"
                    value={this.state.startDate}
                    onChange={e => this.setState({ startDate: e.target.startDate })}
                    
                  />
                </FormGroup>
                <Label>Expire Date </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="date"
                    name="name"
                    // id="nameMulti"
                    placeholder="N/A"
                    value={this.state.expiredDate}
                    onChange={e => this.setState({ expiredDate: e.target.expiredDate })}
                   
                  />
                </FormGroup>
                <Label>Last Promotion </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="name"
                    // id="nameMulti"
                    placeholder="N/A"
                    value={this.state.lastPromotion}
                    onChange={e => this.setState({ lastPromotion: e.target.lastPromotion })}
                    
                  />
                </FormGroup>
                <Label>Location </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="name"
                    // id="nameMulti"
                    placeholder="Location"
                    value={this.state.location}
                    onChange={e => this.setState({ location: e.target.location })}
                  />
                </FormGroup>
                <Label>ID# </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="name"
                    // id="nameMulti"
                    placeholder="N/A"
                    value={this.state.ID}
                    onChange={e => this.setState({ ID: e.target.ID })}
                    
                  />
                </FormGroup>
                <Label>Dan# </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="name"
                    // id="nameMulti"
                    placeholder="N/A"
                    value={this.state.dan}
                    onChange={e => this.setState({ dan: e.target.dan })}
                   
                  />
                </FormGroup>
                <Label>Custom ID </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="name"
                    // id="nameMulti"
                    placeholder="id"
                    value={this.state.customId}
                    onChange={e => this.setState({ customId: e.target.customId })}
                  />
                </FormGroup>
                <Label>Leads Tracking </Label>
                <FormGroup>
                    <Input 
                      type="select" 
                      name="select" 
                      // id="exampleSelect"
                      value={this.state.leadsTracking}
                      onChange={e => this.setState({ leadsTracking: e.target.leadsTracking })}
                      >
                    {/* <option >Leads Tracking</option> */}
									  <option value="Walk" >Walk</option>	
									  <option value="Fair">Fair</option>
									  <option value="Google">Google</option>	
									  <option value="Referral">Referral</option>
									  <option value="Website">Website</option>
									  <option value="Tv">Tv</option>
									  <option value="Event">Event</option>
									  <option value="Groupon">Groupon</option>
									  <option value="Flyers">Flyers</option>
									  <option value="Birthday">Birthday</option>
									  <option value="Facebook">Facebook</option>
									  <option value="Donation">Donation</option>
							
                    </Input>
              </FormGroup>
              <Label>Staff </Label>
                <FormGroup>
                    <Input 
                        type="select" 
                        name="select" 
                        // id="exampleSelect"
                        value={this.state.staff}
                        onChange={e => this.setState({ status: e.target.staff })}
                    >
                    <option value="Leads Tracking">Leads Tracking</option>
									  <option value="Walk">Walk</option>	
							
                    </Input>
              </FormGroup>
              <Label>School Name </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="name"
                    // id="nameMulti"
                    placeholder="school"
                    value={this.state.school}
                    onChange={e => this.setState({ school: e.target.school })}
                  />
                </FormGroup>
                <Label>Add to Group </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="name"
                    // id="nameMulti"
                    placeholder="group"
                    value={this.state.addToGroup}
                    onChange={e => this.setState({ addToGroup: e.target.addToGroup })}
                  />
                </FormGroup>
                <Label>Family Name </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="name"
                    // id="nameMulti"
                    placeholder="family name"
                    value={this.state.familyName}
                    onChange={e => this.setState({ familyName: e.target.familyName })}
                  />
                </FormGroup>
              </Col>
              
            </Row>
          </Form>
          <hr></hr>
          <Row>
           
            <Col sm="6">
              <AttendedDetail />

            </Col>
            <Col sm="6">
              <StaffingDetail />
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <h4>
                Documents
              </h4>
              <img src={pdfImg} style={{width:'10%'}}/>
              <p>Membership</p> 
              <Button.Ripple color="success">Download</Button.Ripple>
            </Col>

          </Row>
              
        </CardBody>
      </Card>
    )
  }
}
const mapStateToProps = state => {
  return {
    values: state.auth.register
  }
}
export default connect(mapStateToProps,{ ADD_NEW_STUDENT })(CreateStudent)
