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
import ImgPaypal from "../../../../assets/img/pages/paypal-logo.png"
import ImgPayment from "../../../../assets/img/pages/paymentsecure.png"
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
        {/* <CardHeader>
          <CardTitle>Request a check</CardTitle>
        </CardHeader> */}
         <CardBody>
          <Form className="mt-10">
            <Row>
              <Col sm="6">
                 <FormGroup className="form-label-group">
                    <Input
                        onChange={(e)=>this.myChangeHandler(e, 'radio')}
                        type="radio"
                        name=""
                        id="radioFloating"
                        placeholder="radio"
                      /> 
                      <span> Credit or Debit Card</span>
                 </FormGroup>
              </Col>
              <Col sm="6">
                 <FormGroup className="form-label-group">
                    <p>All major cards accepted</p>
                 </FormGroup>
              </Col>
              <Col sm="8">
                <FormGroup className="form-label-group">
                  <Input
                    onChange={(e)=>this.myChangeHandler(e, 'Name')}
                    type="text"
                    name="name"
                    id="nameFloating"
                    placeholder=""
                  />
                  <Label for="nameFloating">Card Number</Label>
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup className="form-label-group">
                  <Input
                    onChange={(e)=>this.myChangeHandler(e, 'Email')}
                    type="date"
                    name="expery "
                    id="experyFloating"
                    placeholder=""
                  />
                  <Label for="emailFloating">Expery Date</Label>
                </FormGroup>
              </Col>
              <Col sm="5">
                <FormGroup className="form-label-group">
                  <Input
                    onChange={(e)=>this.myChangeHandler(e, 'Cardholder')}
                    type="text"
                    name="phCardholderone"
                    id="CardholderFloating"
                    placeholder=""
                  />
                  <Label for="CardholderFloating">Cardholder name:</Label>
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup className="form-label-group">
                  <Input
                    onChange={(e)=>this.myChangeHandler(e, 'CCV')}
                    type="date"
                    name="CCV"
                    id="CCVFloating"
                    placeholder=""
                  />
                  <Label for="CCVFloating">CCV/CVV:</Label>
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup className="form-label-group">
                  <Input
                    onChange={(e)=>this.myChangeHandler(e, 'zip')}
                    type="text"
                    name="zip"
                    id="zipFloating"
                    placeholder=""
                  />
                  <Label for="zipFloating">Zip Code:</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                   <img src={ImgPayment} className="paymentsecureimg"/>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    onChange={(e)=>this.myChangeHandler(e, 'paypal')}
                    type="radio"
                    name="paypal"
                    id="paypalFloating"
                    placeholder=""
                  />
                   <span> Paypal</span>
                   <img src={ImgPaypal} className="paypal-deposit"/>
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
            </Row>
          </Form>
       </CardBody>
      </Card>
    )
  }
}
export default FloatingLabels
