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
class WizardIcons extends React.Component {
    state = {
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
                                        <CustomInput type="select" name="select" id="city">
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
                                            name="Email"
                                            id="EmailVertical"
                                            placeholder="Email"
                                        />
                                    </FormGroup>
                                    
                                </Col>
                                <Col sm="12">
                                <FormGroup>
                                    <Label> Notes </Label>
                                    <Input type="textarea" />
                                </FormGroup>
                                </Col>
                                <Col sm="12">
                                    <FormGroup>
                                        <Label for="">Status</Label>
                                        <CustomInput type="select" name="select" id="status">
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
                                    <CustomInput type="select" name="select" id="city">
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
                                        name="Email"
                                        id="EmailVertical"
                                    
                                    />
                                </FormGroup>
                                
                            </Col>
                            <Col sm="12">
                            <FormGroup>
                                <Label>CVV </Label>
                                <Input type="number" />
                            </FormGroup>
                            </Col>
                            <Col sm="12">
                            <FormGroup>
                                <Label>Expiry Month </Label>
                                <CustomInput type="select" name="select" id="status">
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
                                <CustomInput type="select" name="select" id="status">
                                        <option>2021</option>
                                        <option>2022</option>
                                        <option>2023</option>
                                        <option>2024</option>

                                    </CustomInput>
                            </FormGroup>
                            </Col>
                            <Col sm="12">
                                <FormGroup>
                                    <Label for="">Billing Address</Label>
                                    <Input type="text" />
                                   
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
