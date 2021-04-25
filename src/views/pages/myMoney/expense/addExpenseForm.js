import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label, CustomInput
} from "reactstrap"

import "../../../../assets/scss/pages/users.scss"
import img from "../../../../assets/img/pages/1-apex.png"
import { CREATE_EXPENSE, ExpenseCategoryList } from '../../../../redux/actions/mymoney/index';
import { connect } from 'react-redux';
class FloatingLabels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      category: "",
      description: "",
      expenses: "",
      date: "",
      expense_image: "",
      subject: ""

    }
    this.changeHandler = this.changeHandler.bind(this);
    this.onsubmit = this.onsubmit.bind(this);
  }

  changeHandler(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value)
  }

  onsubmit(e) {
    e.preventDefault();
    this.props.CREATE_EXPENSE(this.state);
    setTimeout(() => {
      this.props.toggle();
    }, 600)
  }

  render() {
    return (
      <Card>
        <CardHeader>
          {/* <CardTitle>Vertical Form With Floating Labels</CardTitle> */}
        </CardHeader>
        <CardBody>
          <Form className="mt-10" onSubmit={this.onsubmit}>
            <Row>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="amount"
                    value={this.state.amount}
                    onChange={this.changeHandler}
                    id="labelFloating"
                    placeholder="amount"
                  />
                  <Label for="passwordFloating">Amount</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="subject"
                    value={this.state.subject}
                    onChange={this.changeHandler}
                    id="subject"
                    placeholder="subject"
                  />
                  <Label for="passwordFloating">Subject</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="date"
                    name="date"
                    value={this.state.date}
                    onChange={this.changeHandler}
                    id="date"
                    placeholder="date"
                  />
                  <Label for="date">Date</Label>
                </FormGroup>
              </Col>

              <Col sm="12">

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
                    {/* {console.log(">>>>>>", this.props.categorylist)} */}

                    {this.props.categorylist.map((v, i) => <option value={v.expense_category_type} key={v._id}>{v.expense_category_type}</option>)}
                  </Input>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <div>
                    <Label> Expense Type</Label>
                  </div>
                  <CustomInput type="select" name="expenses"
                    value={this.state.expenses} id="expenses"
                    onChange={this.changeHandler}>
                    <option >Expense Type</option>
                    <option defaultValue>On Time</option>
                    <option>On Going</option>
                  </CustomInput>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="textarea"
                    name="description"
                    value={this.state.description}
                    onChange={this.changeHandler}
                    id="description"
                    placeholder="Description"
                  />
                  <Label for="date">Description</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <img src={!!this.state.expense_image ? URL.createObjectURL(this.state.expense_image) : img} width="100px" />
                  <Input
                    type="file"
                    name="expense_image"
                    // value={this.state}
                    onChange={(e) => this.setState({ ...this.state, expense_image: e.target.files[0] })}
                    id="expense_image"
                    placeholder="Expense Name"
                  />
                  <Label for="nameFloating">Expense Image</Label>
                </FormGroup>
              </Col>

              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  // onClick={e => e.preventDefault()}
                  >
                    Save
                  </Button.Ripple>
                  <Button.Ripple
                    outline
                    color="warning"
                    type="reset"
                    className="mb-1"
                  >
                    Delete
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

const mapStateToProps = (state) => {
  return {
    categorylist: state.mymoney.expenseCategoryList
  };
}

export default connect(mapStateToProps, { ExpenseCategoryList, CREATE_EXPENSE })(FloatingLabels);
