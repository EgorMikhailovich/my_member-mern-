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
    CardHeader, Form, Button, Jumbotron
} from "reactstrap"
// import Checkbox from "../../../../../checkbox/CheckboxesVuexy"
import "../../../../assets/scss/pages/users.scss"
import img from "../../../../assets/img/pages/1-apex.png"
import { booleanLiteral } from "@babel/types"
import { buyStudentMembership } from "../../../../redux/actions/shop"
import { connect } from 'react-redux';


// import { Check, Home, Briefcase, Image } from "react-feather"
class WizardIcons extends React.Component {
    constructor(props) {
        super(props)
        const currentDate = new Date()
        let expiry_date = new Date(currentDate.getFullYear(), currentDate.getMonth() + parseInt(props.memberShipDetail.duration_time), currentDate.getDate() + 1);
        let due_every_month = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate() + 1);

        this.state = {
            student_name: "",
            membership_duration: props.memberShipDetail.duration_time,
            mactive_date: currentDate.toISOString().split('T')[0],
            register_fees: 0,
            expiry_date: expiry_date.toISOString().split('T')[0],
            totalp: props.memberShipDetail.total_price,
            balance:parseInt(props.memberShipDetail.total_price)-parseInt(props.memberShipDetail.down_payment),
            dpayment: props.memberShipDetail.down_payment,
            ptype: "cash",
            payment_time: parseInt(props.memberShipDetail.payment_time),
            payment_type: props.memberShipDetail.payment_type,
            payment_money: parseInt(props.memberShipDetail.balance)/parseInt(props.memberShipDetail.payment_time),
            due_every: props.memberShipDetail.due_every,
            due_every_month: due_every_month.toISOString().split('T')[0],
            pay_inout: "in house",
            pay_latter: "cash",
            membership_name: props.memberShipDetail.membership_name
        }
        // this.onsubmit = this.onsubmit.bind(this);

    }
    changeHandler = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value,},()=>{
            
            let { balance, payment_time, payment_money, register_fees, dpayment, totalp } = this.state;
            balance = parseInt(totalp) - (parseInt(register_fees) + parseInt(dpayment))
            payment_money = (parseInt(balance) / parseInt(payment_time)) // money to dive
            
            this.setState({balance, payment_money})
        })
    }

    // form = {
    //     steps: [
    //         {
    //             title: 1,
    //             content: <Row></Row>
    //         },
    //         {
    //             title: 2,
    //             content: <Row></Row>
    //         }
    //     ]
    // }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.props.type == "student profile"){
            this.props.buyStudentMembership(this.state, this.props.info.studentId, this.props.type);
        }else{
            this.props.buyStudentMembership(this.state, null, this.props.type);
        }
    }

    render() {
        // const { steps } = this.form;
        const { memberShipDetail } = this.props
        return (
            <Card>
                <CardBody>

                    <Row>
                        <Col md="12" sm="12">
                            <Form >
                                <Row>
                                    <Col sm="4">
                                        <FormGroup className="form-label-group">
                                            <div><Label for="nameFloating">Membership Image</Label></div>
                                            <img src={memberShipDetail.membership_profile} width="200px" />
                                        </FormGroup>
                                    </Col>
                                    <Col sm="4">
                                        {this.props.type == "student profile" ?
                                            <FormGroup>
                                                <Label> Membership Name </Label>
                                                <Input
                                                type="texr"
                                                name="membership_name"
                                                value={this.state.membership_name}
                                                disabled
                                                id="durationVertical"
                                                placeholder="Member Ship Name"
                                            />
                                            </FormGroup>
                                            :
                                            <FormGroup>
                                                <Label> Student Name </Label>
                                                <CustomInput type="select" name="student_name" onChange={this.changeHandler} value={this.state.student_name} id="name">
                                                    <option>-- Select Student -- </option>
                                                    {this.props.studentList.map((value, index) => {
                                                        return (<option key={index} value={`${value.firstName}`} >{value.firstName}</option>)
                                                    })}
                                                </CustomInput>
                                            </FormGroup>
                                        }


                                        <FormGroup>
                                            <div><Label for="durationVertical">Duration:</Label></div>
                                            <Input
                                                type="number"
                                                name="membership_duration"
                                                value={this.state.membership_duration}
                                                onChange={this.changeHandler}
                                                id="durationVertical"
                                                placeholder="Duration"
                                            />
                                        </FormGroup>

                                    </Col>
                                    <Col sm="4">
                                        <FormGroup>
                                            <div><Label for="EmailVertical">Membership Activation Date:</Label></div>
                                            <Input
                                                disabled
                                                type="date"
                                                name="mactive_date"
                                                id="dateVertical"
                                                value={this.state.mactive_date}
                                                onChange={this.changeHandler}
                                                placeholder="Membership Activation Date"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <div><Label for="expiryVertical">Membership Expiry Date:</Label></div>
                                            <Input
                                                type="date"
                                                disabled
                                                name="expiry_date"
                                                value={this.state.expiry_date}
                                                onChange={this.changeHandler}
                                                id="expiryVertical"
                                                placeholder="Membership Expiry Date:"
                                            />
                                        </FormGroup>

                                    </Col>

                                    <Col sm="4">
                                        <FormGroup>
                                            <div><Label for="registrationVertical">Registration Fee:</Label></div>
                                            <Input
                                                type="number"
                                                name="register_fees"
                                                value={this.state.register_fees}
                                                onChange={this.changeHandler}
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
                                                name="totalp"
                                                disabled
                                                value={this.state.totalp}
                                                onChange={this.changeHandler}
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
                                                disabled
                                                value={this.state.balance}
                                                onChange={this.changeHandler}
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
                                                name="dpayment"
                                                value={this.state.dpayment}
                                                onChange={this.changeHandler}
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
                                                        name="ptype"
                                                        value="cash"
                                                        id="CashVertical"
                                                        onChange={this.changeHandler}
                                                        checked={this.state.ptype == "cash"}
                                                    />
                                                    <Label for="CashpriceVertical">Cash</Label>
                                                </div>
                                                <div className="col-md-3">
                                                    <Input
                                                        type="radio"
                                                        name="ptype"
                                                        value="check"
                                                        id="CheckVertical"
                                                        onChange={this.changeHandler}
                                                        checked={this.state.ptype == "check"}
                                                    />
                                                    <Label for="CheckpriceVertical">Check</Label>
                                                </div>
                                                <div className="col-md-3">
                                                    <Input
                                                        type="radio"
                                                        name="ptype"
                                                        value="credit card"
                                                        id="CreditVertical"
                                                        onChange={this.changeHandler}
                                                        checked={this.state.ptype == "credit card"}
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
                                                type="number"
                                                name="payment_time"
                                                value={this.state.payment_time}
                                                onChange={this.changeHandler}
                                                id="paymentsFloating"
                                                placeholder="Payments"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="form-label-group">
                                            <div><Label> Monthly </Label></div>
                                            <CustomInput type="select" name="payment_type" value={this.state.payment_type} onChange={this.changeHandler} id="profiletype">
                                                <option value="Monthly">Monthly</option>
                                                <option value="Weekly">Weekly</option>
                                                <option value="PIF">PIF</option>
                                            </CustomInput>
                                        </FormGroup>
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="form-label-group">
                                            {/* <img src={img} width="100px"/> */}
                                            <div><Label for="dollerFloating">Of $</Label></div>
                                            <Input
                                                type="text"
                                                name="payment_money"
                                                disabled
                                                value={this.state.payment_money}
                                                onChange={this.changeHandler}
                                                id="dollerFloating"
                                                placeholder="$"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="form-label-group">
                                            <div><Label> Due Every </Label></div>
                                            <CustomInput type="select" name="due_every" value={this.state.due_every} onChange={this.changeHandler} id="Due">
                                                <option value="1">1st</option>
                                                <option value="5">5</option>
                                                <option value="10">10</option>
                                                <option value="15">15</option>
                                                <option value="20">20</option>
                                                <option value="25">25</option>
                                                <option value="30">30</option>
                                            </CustomInput>
                                        </FormGroup>
                                    </Col>
                                    <Col sm="8 cl-h">
                                        <FormGroup>
                                            <div >
                                                <label>Next Payment Due: {this.state.due_every_month}</label>
                                            </div>
                                            <Row>

                                                <div className="col-md-6">
                                                    <Input
                                                        type="radio"
                                                        name="pay_inout"
                                                        value="in house"
                                                        checked={this.state.pay_inout == "in house"}
                                                        onChange={this.changeHandler}
                                                        id="In-House"
                                                    />
                                                    <Label for="In-HouseVertical"> In-House</Label>
                                                </div>
                                                <div className="col-md-6">
                                                    <Input
                                                        type="radio"
                                                        name="pay_inout"
                                                        id="Auto-PayVertical"
                                                        value="auto pay"
                                                        checked={this.state.pay_inout == "auto pay"}
                                                        onChange={this.changeHandler}
                                                    />
                                                    <Label for="Auto-PayVertical"> Auto-Pay</Label>
                                                </div>
                                            </Row>
                                        </FormGroup>
                                    </Col>
                                    <Col sm="4">
                                        <FormGroup>
                                            <Label for="">Pay Later</Label>
                                            <CustomInput type="select" name="pay_latter" value={this.state.pay_latter} onChange={this.changeHandler} id="status">
                                                <option value="credit card">Credit Card</option>
                                                <option value="cash">Cash</option>
                                                <option value="check">Check</option>
                                            </CustomInput>
                                        </FormGroup>
                                    </Col>
                                    <Button onClick={this.onSubmit} color="primary">Submit</Button>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                    {/* <Wizard
                        steps={steps}
                    />
 */}

                </CardBody>
            </Card>
        )
    }
}


// export default WizardIcons

const mapStateToProps = (state) => {
    return {

    };
}

export default connect(mapStateToProps, { buyStudentMembership })(WizardIcons);