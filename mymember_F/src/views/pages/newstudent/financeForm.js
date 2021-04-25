import React from "react"
import Wizard from "../../../components/@vuexy/wizard/WizardComponent"
import {
    FormGroup,
    Input,
    Label,
    CustomInput,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardHeader, Form, Button
} from "reactstrap"
// import Checkbox from "../../../../../checkbox/CheckboxesVuexy"
import { Check, Home, Briefcase, Image } from "react-feather"
class WizardIcons extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            card_type:"", 
            holder_name:"", 
            notes:"",
            default:1, 
            status:"", 
            credit_Card_type:"",
            credit_Card_Number:"", 
            credit_cvv:"",
            expiry_month:"",
            expiry_year: 0, 
            billing_address:"",
            country:"", 
            state:"", 
            city:"", 
            zip_postal:""
    }
    this.stepper = {
        steps: [
            {
                title: 1,
                content: <Row>
                    <Col md="12" sm="12">
                        <Form>
                            <Row>
                                <Col sm="12">
                                    <FormGroup>
                                        <Label> Type </Label>
                                        <CustomInput type="select" name="card_type" onChange={this.changeHandler} id="city">
                                            <option>Credit Card</option>
                                            <option>Debit Card</option>

                                        </CustomInput>
                                    </FormGroup>
                                </Col>
                                <Col sm="12">
                                    <FormGroup>
                                        <Label for="EmailVertical">Holder Name</Label>
                                        <Input
                                            type="email"
                                            name="holder_name"
                                            onChange={this.changeHandler}
                                            id="EmailVertical"
                                            placeholder="Email"
                                        />
                                    </FormGroup>
                                    
                                </Col>
                                <Col sm="12">
                                <FormGroup>
                                    <Label> Notes </Label>
                                    <Input type="textarea" name="notes" onChange={this.changeHandler} />
                                </FormGroup>
                                </Col>
                                <Col sm="12">
                                    <FormGroup>
                                        <Label for="">Status</Label>
                                        <CustomInput type="select" name="status"  onChange={this.changeHandler} id="status">
                                            <option>Active</option>
                                            <option>Inactive</option>

                                        </CustomInput>
                                    </FormGroup>
                                </Col>
                    

                            </Row>
                        </Form>
                    </Col>
                </Row>
            },
            {
                title:2,
                content: <Row>
                <Col md="12" sm="12">
                    <Form>
                        <Row>
                            <Col sm="12">
                                <FormGroup>
                                    <Label> Credit Card Type </Label>
                                    <CustomInput type="select" name="credit_Card_type"  onChange={this.changeHandler} id="city">
                                        <option>Discover </option>
                                        <option>Visa </option>
                                        <option>American Express </option>
                                        <option>Master Card </option>


                                    </CustomInput>
                                </FormGroup>
                            </Col>
                            <Col sm="12">
                                <FormGroup>
                                    <Label for="EmailVertical">Credit Card Number</Label>
                                    <Input
                                        type="email"
                                        name="credit_Card_Number"
                                        onChange={this.changeHandler}
                                        id="EmailVertical"
                                    
                                    />
                                </FormGroup>
                                
                            </Col>
                            <Col sm="12">
                            <FormGroup>
                                <Label>CVV </Label>
                                <Input type="number" name="credit_cvv"  onChange={this.changeHandler} />
                            </FormGroup>
                            </Col>
                            <Col sm="12">
                            <FormGroup>
                                <Label>Expiry Month </Label>
                                <CustomInput type="select" name="expiry_month"  onChange={this.changeHandler} id="status">
                                        <option>January</option>
                                        <option>Febuary</option>
                                        <option>March</option>
                                        <option>April</option>

                                    </CustomInput>
                            </FormGroup>
                            </Col>
                            <Col sm="12">
                            <FormGroup>
                                <Label>Expiry Year </Label>
                                <CustomInput type="select" name="expiry_year"  onChange={this.changeHandler} id="status">
                                        <option>2021</option>
                                        <option>2022</option>
                                        <option>2023</option>
                                        <option>2024</option>

                                    </CustomInput>
                            </FormGroup>
                            </Col>
                            <Col sm="12">
                                <FormGroup>
                                    <Label htmlFor="#billing">Billing Address</Label>
                                    <Input type="text" id="billing" name="billing_address"  onChange={this.changeHandler} />
                                   
                                </FormGroup>
                            </Col>
                            <Col sm="12">
                                <FormGroup>
                                    <Label for="">Country</Label>
                                    <Input type="text" name="country"  onChange={this.changeHandler}/>
                                   
                                </FormGroup>
                            </Col>
                            <Col sm="12">
                                <FormGroup>
                                    <Label for="">State</Label>
                                    <Input type="text" name="state"  onChange={this.changeHandler} />
                                   
                                </FormGroup>
                            </Col>
                            <Col sm="12">
                                <FormGroup>
                                    <Label for="">City</Label>
                                    <Input type="text" name="city"  onChange={this.changeHandler}/>
                                   
                                </FormGroup>
                            </Col>
                            <Col sm="12">
                                <FormGroup>
                                    <Label for="">ZIP Postal</Label>
                                    <Input type="text" name="zip_postal"   onChange={this.changeHandler}/>
                                   
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            }
        ]
        
    }
    }
    changeHandler = (e) => {
        // console.log(e.target.name, e.target.value);
       this.setState({...this.state, [e.target.name] : e.target.value})
    }
    
    finalsubmit = (e) => {
           const status = Object.entries(this.state).every((v,i) => !!v[1]);
           if(status){

           }
        } 

    render() {
        const { steps } = this.stepper;

        return (
            <Card>
                <CardBody>
                    <Wizard
                        onFinish={this.finalsubmit}
                        steps={steps}
                    />
                </CardBody>
            </Card>
        )
    }
}

export default WizardIcons
