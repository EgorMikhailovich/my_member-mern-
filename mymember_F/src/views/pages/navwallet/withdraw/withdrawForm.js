import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Alert,
  Input,
  Form,
  Button,
  Label,CustomInput
} from "reactstrap"

import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import "../../../../assets/scss/pages/users.scss"
import img from "../../../../assets/img/pages/1-apex.png"
import { Check } from "react-feather"
import Textarea from "../../../forms/form-elements/textarea/Textarea"
const baseUrl = process.env.REACT_APP_BASE_URL;

class FloatingLabels extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      formfilled: false,
      error: false,
      errorMsg: '',
      programName: '', 
      color: '',
      lable: '',
      total_rank: '',
      progression: 'Progression',
      type: 'By Belt',
      requirement: 'Requirement',
      program_image: '' 
    };
  }
  myChangeHandler = (event, type) => {
    // console.log("Aeg");
    var statedata = {};
    statedata[type] = event.target.value;
    this.setState(statedata, function(){
      console.log(this.state);
    });
  }

  submitFormData = e => {
    e.preventDefault();
    if(this.state.programName==""){
      this.setState({
        error: true,
        errorMsg: "Kindly fill program name" 
      })
    }
    else if(this.state.color==""){
      this.setState({
        error: true,
        errorMsg: "Kindly select color" 
      })
    }
    else if(this.state.lable==""){
      this.setState({
        error: true,
        errorMsg: "Kindly fill label" 
      })
    }
    else if(this.state.total_rank==""){
      this.setState({
        error: true,
        errorMsg: "Kindly fill total rank" 
      })
    }
    else{
      this.setState({
        error: false,
        errorMsg: "" 
      })
      // console.log("hey fuck man",this.state);
      var postdata = {
        "color": this.state.color,
        "lable": this.state.lable,
        "programName": this.state.programName,
        "progression": this.state.progression,
        "requirement": this.state.requirement,
        "total_rank": this.state.total_rank,
        "type": this.state.type
      };
      if(this.state.program_image!==""){
        postdata.program_image = this.state.program_image;
      }
      var el = this;
      let token = localStorage.getItem("access_token");
      return fetch(`${baseUrl}/api/add_program/${localStorage.getItem("user_id")}`, {
          method: "POST",
          headers: new Headers({
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          }),
          body: JSON.stringify(postdata) // <-- Post parameters        
      }).then(responseJson => {
        console.log(responseJson);
        el.setState({formfilled: true})
    })
    .catch(error => console.log(error));
    }
  }

  render() {
    return (
       
      <Card>
        <CardHeader>
          <CardTitle>Request a check</CardTitle>
        </CardHeader>
        <CardBody>
          <Form className="mt-10">
            <Row>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    onChange={(e)=>this.myChangeHandler(e, 'Name')}
                    type="text"
                    name="name"
                    id="nameFloating"
                    placeholder="Name"
                  />
                  <Label for="nameFloating">Name</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    onChange={(e)=>this.myChangeHandler(e, 'Email')}
                    type="email"
                    name="name"
                    id="emailFloating"
                    placeholder="Email"
                  />
                  <Label for="emailFloating">Email</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    onChange={(e)=>this.myChangeHandler(e, 'phone')}
                    type="text"
                    name="phone"
                    id="phoneFloating"
                    placeholder="Phone"
                  />
                  <Label for="phoneFloating">Phone</Label>
                </FormGroup>
              </Col>
               <Col sm="12">
                        <FormGroup className="form-label-group">
                            <div>
                            <Label>Select Location</Label>
                            </div>
                            <CustomInput onChange={(e)=>this.myChangeHandler(e, 'Select Location')} type="select" name="select" id="SelectLocation">
                                <option>Select Location</option>
                                <option>Wantagh [53] [</option>
                            </CustomInput>
                        </FormGroup>
                </Col>
                <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    onChange={(e)=>this.myChangeHandler(e, 'amount')}
                    type="text"
                    name="amount"
                    id="amountFloating"
                    placeholder="Enter Withdraw Amount"
                  />
                  <Label for="amountFloating">Phone</Label>
                </FormGroup>
               </Col>
               <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                     type="textarea"
                     placeholder="Description"
                  />
                  <Label for="amountFloating">Description</Label>
                </FormGroup>
               </Col>
                <Col sm="12">
                {this.state.error==true && <Alert color="danger">
                  {this.state.errorMsg}
                </Alert>}
                {this.state.formfilled==true && <Alert color="success">
                  Program created successfully
                </Alert>}
                </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Button.Ripple
                    color="primary"
                    className="mr-1 mb-1"
                    onClick={(e)=> this.submitFormData(e)}
                  >
                    Submit
                  </Button.Ripple>
                  {/* <Button.Ripple
                    outline
                    color="warning"
                    type="reset"
                    className="mb-1"
                  >
                   Delete
                  </Button.Ripple> */}
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default FloatingLabels
