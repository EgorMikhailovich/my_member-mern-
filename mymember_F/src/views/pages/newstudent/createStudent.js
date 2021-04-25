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
import { ADD_NEW_STUDENT } from "../../../redux/actions/newstudent/index"
import { GET_CATEGORIES } from "../../../redux/actions/programe/index"




class CreateStudent extends React.Component {
  constructor(){
    super();
    this.myRef = React.createRef();
  }
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
    category:"",
    subcategory:"",
    location:"",
    customId:"",
    leadsTracking:"",
    staff:"",
    intrested:"",
    school:"",
    memberprofileImage:"",
    memberProfileUrl : "",
    programColor: ""
  
    }

  componentDidMount(){
    this.props.GET_CATEGORIES();
  }  
  
  imageHandler = e => {
    this.setState({...this.state, memberprofileImage : e.target.files[0], memberProfileUrl : URL.createObjectURL(e.target.files[0])});
  } 

  changeHandler = e => { 
    // console.log(e.target.name, e.target.value)
    this.setState({...this.state, [e.target.name] : e.target.value});
    // console.log(this.state.category)
    if(e.target.name=="category"){
      this.props.categories.map((item,i)=>{
        console.log(item, e.target.value)
        if(item.programName==e.target.value) {
          console.log(item)
          this.setState({...this.state, [e.target.name] : e.target.value});
        }
        
      })

      }
    }
  
  handleRegister = e => {
    // alert('Your favorite flavor is: ' + this.state.value);
    e.preventDefault()
    // console.log("new student", this.state);
    // this.props.addNewStudent({...this.state});
    const {memberProfileUrl, ...rest} = this.state;
    
    this.props.ADD_NEW_STUDENT({...rest});
  }

  render() {
    return (
      <Card>
        {/* <CardHeader>
          <CardTitle>Membership Info</CardTitle>
        </CardHeader> */}
        <CardBody>
          <Form className="mt-2" onSubmit={this.handleRegister} >
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
                      // id="exampleSelect"
                      name="studentType"
                      value={this.state.studentType}
                      onChange={this.changeHandler}
                      defaultValue="Active Student"
                    >
                      <option value="Active Student">Active Student</option>
                      <option value="Former Student">Former Student</option>
                      <option value="Leads">Leads</option>
                      <option value="Active Trial">Active Trials</option>
                      <option value="Former Trial">Former Trial</option>
                    </Input>
              </FormGroup>
              <Label>First Name </Label>
              <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    // id="nameMulti"
                    placeholder="First Name"
                    name={"firstName"}
                    value={this.state.firstName}
                    onChange={this.changeHandler}
                    required
                  />
              </FormGroup>
                <Label>Last Name </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    // id="nameMulti"
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.changeHandler}
                    required
                  />
                </FormGroup>
                <Label> Select Status </Label>
                <FormGroup>
                    <Input 
                      type="select" 
                      // id="exampleSelect"
                      name={"status"}
                      value={this.state.status}
                      onChange={this.changeHandler}
                      >
                      <option value="Active">Active </option>
                      <option value="Inactive">Inactive</option>
                    </Input>
                </FormGroup>
                <Label> DOB </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="date"
                    // id="nameMulti"
                    placeholder="Last Name"
                    name="dob"
                    value={this.state.dob}
                    onChange={this.changeHandler}
                    required
                  />
                </FormGroup>
                <Label> Gender </Label>
                <FormGroup>
                    <Input 
                    type="select"
                    // id="exampleSelect"
                    name={"gender"}
                    value={this.state.gender}
                    onChange={this.changeHandler}
                    >
                      <option value="Male">Male </option>
                      <option value="Female">Female</option>
                    </Input>
                </FormGroup>
                <Label>Age </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="age"
                    // id="nameMulti"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={this.changeHandler}
                    required
                    
                  />
                </FormGroup>
                <Label>Email Address </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="email"
                    name="email"
                    // id="nameMulti"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.changeHandler}
                    required
                  />
                </FormGroup>
                <Label>Primary Phone </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="primaryPhone"
                    // id="nameMulti"
                    placeholder="primary phone"
                    value={this.state.primaryPhone}
                    onChange={this.changeHandler}
                    required
                  />
                </FormGroup>
                <Label>Secondary Phone </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="secondaryNumber"
                    // id="nameMulti"
                    placeholder="Secondary phone"
                    value={this.state.secondaryNumber}
                    onChange={this.changeHandler}
                    required
                  />
                </FormGroup>
                <Label>Zip code </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="zipPostalCode"
                    // id="nameMulti"
                    placeholder="Zip Postal code"
                    value={this.state.zipPostalCode}
                    onChange={this.changeHandler}
                    required
                  />
                </FormGroup>
                <Label>Address</Label>
              <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    // id="nameMulti"
                    placeholder="Address"
                    name={"address"}
                    value={this.state.address}
                    onChange={this.changeHandler} 
                    required
                  />
              </FormGroup>  
                <Label>State</Label>
              <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    // id="nameMulti"
                    placeholder="State"
                    name={"state"}
                    value={this.state.state}
                    onChange={this.changeHandler} 
                    required
                  />
              </FormGroup>  
                <Label>Country</Label>
              <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    // id="nameMulti"
                    placeholder="Country"
                    name={"country"}
                    value={this.state.country}
                    onChange={this.changeHandler} 
                    required
                  />
              </FormGroup>  
                <Label>Category </Label>
              <FormGroup className="form-label-group">
              <Input 
                      type="select" 
                      name="category" 
                      // id="exampleSelect"
                      value={this.state.category}
                      onChange={this.changeHandler}

                    >
                      {/* <option>Student Belt Size</option> */}
                      {/* {console.log(">>>>>>",this.props.categories)} */}

                      {this.props.categories.map((v,i) => <option value={v.programName} key={v._id}>{v.programName}</option>)}
                    </Input>
              </FormGroup>  
              {/* <Label> Program color </Label> */}
              {/* {console.log("result>>>",this.props.categories.programName)} */}
                {/* <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    // id="nameMulti"
                    placeholder="programColor"
                    name="programColor"
                    value={this.state.programColor}
                    onChange={this.changeHandler}
                  />
                </FormGroup> */}
              <Label>Sub Category </Label>
              <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    // id="nameMulti"
                    placeholder="Sub Category"
                    name={"subcategory"}
                    value={this.state.subcategory}
                    onChange={this.changeHandler} 
                  />
              </FormGroup>
              <Label>Notes </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="textarea"
                    name="notes"
                    // id="nameMulti"
                    placeholder="notes"
                    value={this.state.notes}
                    onChange={this.changeHandler}
                    required
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
                      name="studentBeltSize" 
                      // id="exampleSelect"
                      value={this.state.studentBeltSize}
                      onChange={this.changeHandler}
                      defaultValue="LT"
                    >
                      <option>Select Belt Size</option>
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
                      name="program" 
                      // id="exampleSelect"
                      value={this.state.program}
                      onChange={this.changeHandler}
                      >
                      <option>Select Program</option>
                      <option value="Little Tigers">Little Tigers</option>
                      <option value="Taekwondo">Taekwondo</option>
                      <option value="Kickboxing">Kickboxing</option>
                      <option value="Tasma">Tasma</option>
                      <option value="Tean & Adult">Tean & Adult</option>
                    </Input>
              </FormGroup>
             
                <Label>Location </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="location"
                    // id="nameMulti"
                    placeholder="Location"
                    value={this.state.location}
                    onChange={this.changeHandler}
                    required
                  />
                </FormGroup>
                <Label>Custom ID </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="customId"
                    // id="nameMulti"
                    placeholder="id"
                    value={this.state.customId}
                    onChange={this.changeHandler}

                  />
                </FormGroup>
                <Label>Leads Tracking </Label>
                <FormGroup>
                    <Input 
                      type="select" 
                      name="leadsTracking" 
                      // id="exampleSelect"
                      value={this.state.leadsTracking}
                      onChange={this.changeHandler}
                      defaultValue="Walk"
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
                          name="staff" 
                          // id="exampleSelect"
                          value={this.state.staff}
                          onChange={this.changeHandler}
                      >
                      <option value="Leads Tracking" defaultValue="Leads Tracking">Leads Tracking</option>
								  	  <option value="Walk">Walk</option>	
                
                      </Input>
                  </FormGroup>
              
              <Label>Interested</Label>
               
                 <FormGroup>
                    <Input 
                      type="select" 
                      name="intrested" 
                      // id="exampleSelect"
                      value={this.state.intrested}
                      onChange={this.changeHandler}
                      >
                       <option value="">Intrest Type</option>
                      <option value="After School" defaultValue="After School">After School</option>
                      <option value="Camp">Camp</option>
                    </Input>
              </FormGroup>
              <Label>School Name </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="school"
                    // id="nameMulti"
                    placeholder="school"
                    value={this.state.school}
                    onChange={this.changeHandler}
                    required
                  />
                </FormGroup>
                {/* <Label>Add to Group </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="addToGroup"
                    // id="nameMulti"
                    placeholder="group"
                    value={this.state.addToGroup}
                    onChange={this.changeHandler}
                  />
                </FormGroup>
                <Label>Family Name </Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="familyName"
                    // id="nameMulti"
                    placeholder="family name"
                    value={this.state.familyName}
                    onChange={this.changeHandler}
                  />
                </FormGroup> */}
                <FormGroup>
                  <Label>Member Profile Image</Label>
                  <div className="my-2">
                  {this.state.memberProfileUrl ? 
                   <img src={this.state.memberProfileUrl} alt="select image" width="100" height="100"/> : <File size="32"/>  
                }
                  </div>        
                  <input style={{display : "none"}} type={"file"}
                   ref={this.myRef} onChange={this.imageHandler}
                   />
                  <Button 
                   color="outline-primary"
                   type="button"
                   size="sm"
                   onClick={() => { this.myRef.current.click()}}                  
                   >
                   <Upload size={12} style={{
                     margin : "0 0.5em 0 0"
                   }}/>
                   Upload
                  </Button>
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
              
              {/* <Col sm="12"> */}
               
              {/* </Col> */}
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
export default connect(mapStateToProps,{ ADD_NEW_STUDENT, GET_CATEGORIES })(CreateStudent)
