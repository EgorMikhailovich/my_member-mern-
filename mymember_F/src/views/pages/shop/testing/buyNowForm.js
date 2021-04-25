import React from "react"
import Wizard from "../../../../components/@vuexy/wizard/WizardComponent"
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
import "../../../../assets/scss/pages/users.scss"
import img from "../../../../assets/img/pages/1-apex.png"
class WizardIcons extends React.Component {
    state = {
        steps: [
            {
                title: 1,
                content: <Row>
                    <Col md="12" sm="12">
                        <Form>
                        <Row>
                                <Col sm="4">
                                <FormGroup className="form-label-group">
                                    <div><Label for="nameFloating">Program Image</Label></div>
                                    <img src={img} width="100px"/>
                                        <Input
                                            type="file"
                                            name="filename"
                                            id="fileFloating"
                                            placeholder="Program Name"
                                        />
                                </FormGroup>
                                </Col>
                                <Col sm="4">
                                    <FormGroup>
                                        <Label> Student Type </Label>
                                        <CustomInput type="select" name="select" id="name">
                                            <option>-- Select Student -- </option>
                                            <option value="36093">fd fd</option>
                                            <option value="36091">dds fds</option>
                                        </CustomInput>
                                    </FormGroup>
                                    
                                </Col>
                                <Col sm="4">
                                    <FormGroup>
                                        <div><Label for="EmailVertical">Membership Activation Date:</Label></div>
                                        <Input
                                            type="date"
                                            name="date"
                                            id="dateVertical"
                                            placeholder="Membership Activation Date"
                                        />
                                    </FormGroup>
                                </Col>

                                <Col sm="4">
                                    <FormGroup>
                                        <div><Label for="registrationVertical">Registration Fee:</Label></div>
                                        <Input
                                            type="number"
                                            name="registration"
                                            id="registrationVertical"
                                            placeholder="$"
                                        />
                                    </FormGroup>
                                    
                                </Col>
                                <Col sm="4">
                                    <FormGroup>
                                        <div><Label for="totalpriceVertical">  Total Price:</Label></div>
                                        <Input
                                            type="number"
                                            name="totalprice"
                                            id="totalpriceVertical"
                                            placeholder="$"
                                        />
                                    </FormGroup>
                                    
                                </Col>
                                <Col sm="4">
                                    <FormGroup>
                                        <div><Label for="totalpriceVertical"> Balance:</Label></div>
                                        <Input
                                            type="number"
                                            name="balance"
                                            id="balanceVertical"
                                            placeholder="$"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm="4">
                                    <FormGroup>
                                        <div><Label for="totalpriceVertical">Down Payment:</Label></div>
                                        <Input
                                            type="number"
                                            name="downPayment"
                                            id="downPaymentVertical"
                                            placeholder="$"
                                        />
                                    </FormGroup>
                                    
                                </Col>
                                <Col sm="8 cl-h">
                                    <FormGroup>
                                    <Row>
                                            <div className="col-md-3">
                                                 <Input
                                                    type="radio"
                                                    name="Cash"
                                                    id="CashVertical"
                                                 />
                                                 <Label for="CashpriceVertical">Cash</Label>
                                            </div>
                                            <div className="col-md-3">
                                                  <Input
                                                    type="radio"
                                                    name="Check"
                                                    id="CheckVertical"
                                                  />   
                                                  <Label for="CheckpriceVertical">Check</Label>
                                            </div>
                                            <div className="col-md-3">
                                                <Input
                                                    type="radio"
                                                    name="Credit"
                                                    id="CreditVertical"
                                                />
                                               <Label for="CreditVertical"> Credit Card</Label>
                                            </div>
                                     </Row> 
                                    </FormGroup>
                                </Col>
                                <Col sm="3">
                                    <FormGroup className="form-label-group">
                                        {/* <img src={img} width="100px"/> */}
                                        <div><Label for="PaymentsFloating">Payments</Label></div>
                                            <Input
                                                type="text"
                                                name="Payments"
                                                id="paymentsFloating"
                                                placeholder="Payments"
                                            />
                                    </FormGroup>
                                </Col>
                                <Col sm="3">
                                    <FormGroup className="form-label-group">
                                            <div><Label> Monthly </Label></div>
                                            <CustomInput type="select" name="select" id="profiletype">
                                                <option>Monthly</option>
                                                <option>Weekly</option>
                                                <option>PIF</option>
                                            </CustomInput>
                                        </FormGroup>
                                </Col>
                                <Col sm="3">
                                <FormGroup className="form-label-group">
                                        {/* <img src={img} width="100px"/> */}
                                        <div><Label for="dollerFloating">Of $</Label></div>
                                            <Input
                                                type="text"
                                                name="doller"
                                                id="dollerFloating"
                                                placeholder="$"
                                            />
                                    </FormGroup>
                                </Col>
                                <Col sm="3">
                                    <FormGroup className="form-label-group">
                                    <div><Label> Due Every </Label></div>
                                            <CustomInput type="select" name="select" id="Due">
                                                <option>1st</option>
                                                <option>5</option>
                                                <option>10</option>
                                                <option>15</option>
                                                <option>20</option>
                                                <option>25</option>
                                                <option>30</option>
                                            </CustomInput>
                                        </FormGroup>
                                </Col>
                                <Col sm="8 cl-h">
                                    <FormGroup>
                                            <div >
                                               <label>Next Payment Due:</label>
                                            </div> 
                                    <Row>
                                            
                                            <div className="col-md-6">
                                                 <Input
                                                    type="radio"
                                                    name="In-House"
                                                    id="In-House"
                                                 />
                                                 <Label for="In-HouseVertical"> In-House</Label>
                                            </div>
                                            <div className="col-md-6">
                                                  <Input
                                                    type="radio"
                                                    name="Auto-Pay"
                                                    id="Auto-PayVertical"
                                                  />   
                                                  <Label for="Auto-PayVertical"> Auto-Pay</Label>
                                            </div>
                                     </Row> 
                                    </FormGroup>
                                </Col>
                                <Col sm="4">
                                    <FormGroup>
                                        <Label for="">Pay Later</Label>
                                        <CustomInput type="select" name="select" id="status">
                                            <option>Credit Card</option>
                                            <option>Cash</option>
                                            <option>Check</option>
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
                                  <p><strong>Select a test date below and click next.</strong></p>
                                <FormGroup>
                                    <Label for="EmailVertical">Select Student</Label>
                                    <Input
                                        type="date"
                                        name="Email"
                                        id="EmailVertical"
                                    
                                    />
                                </FormGroup>
                                
                               </Col>
                            
                        </Row>
                    </Form>
                </Col>
            </Row>
            }
        ]
    }

    render() {
        const { steps } = this.state
        return (
            <Card>
                <CardBody>
                    <Wizard
                        steps={steps}
                    />
                </CardBody>
            </Card>
        )
    }
}

export default WizardIcons
