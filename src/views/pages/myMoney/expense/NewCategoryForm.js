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
  Label
} from "reactstrap"
import "../../../../assets/scss/pages/users.scss"
import { CREATE_EXPENSE_CATEGORY,editExpenseCategory } from '../../../../redux/actions/mymoney/index';
import {connect} from 'react-redux';
class FloatingLabels extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataToUpdate : {},
      expense_category_type : "",
      color : ""      
    }
    this.changeHandler = this.changeHandler.bind(this);
    // this.onsubmit = this.onsubmit.bind(this);
  }
  componentDidUpdate(prevProps){
    if(this.props.mymoney.expenseCategoryList.length > prevProps.mymoney.expenseCategoryList.length){
      this.props.toggle();
    }
  }

  changeHandler(e){
    if(this.props.isEdit){
      this.state.dataToUpdate[e.target.name] = e.target.value
    }else{
      this.setState({...this.state, [e.target.name] : e.target.value});
    }
  }

  // onsubmit(e){
  //   e.preventDefault();
  //   this.props.CREATE_EXPENSE_CATEGORY(this.state);
  //   setTimeout(() => {
  //     this.props.toggle();
  //   }, 600)
  // }
  onsubmit = (e) => {
    e.preventDefault();
    this.setState({disable:true})
    if(this.props.isEdit){
      this.props.toggle()
      this.props.editExpenseCategory(this.state.dataToUpdate, this.props.userinfo._id);
      
    }else{
      this.props.CREATE_EXPENSE_CATEGORY(this.state);
    }
    
  }
  
  render() {
    const {userinfo , isEdit} = this.props
    return (
      <Card>
        <CardHeader>
          {/* <CardTitle>Vertical Form With Floating Labels</CardTitle> */}
        </CardHeader>
        <CardBody>
        <Form className="mt-10" onSubmit={this.onsubmit}>
            <Row>
              <Col sm="12">
              <Label for="nameFloating">Category Name</Label>
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="expense_category_type"
                    defaultValue={isEdit ? userinfo.expense_category_type : this.state.expense_category_type}
                    onChange={this.changeHandler}
                    id="stripeFloating"
                    placeholder="Category Name"
                  />
                 
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Row>
                        <div className="col-md-3 col-sm-12 col-xs-12">
                        <Label for="nameFloating">color</Label>
                        </div>
                        <div className="col-md-9 col-sm-12 col-xs-12">
                        <Input
                          name="color"
                          defaultValue={isEdit ? userinfo.color : this.state.color}
                          onChange={this.changeHandler}
                          type="color"
                          id="colorFloating"
                          className="npt-1"
                        />
                        </div>
                  </Row>
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
  return {mymoney : state.mymoney};
}

export default connect(mapStateToProps, {CREATE_EXPENSE_CATEGORY, editExpenseCategory})(FloatingLabels);