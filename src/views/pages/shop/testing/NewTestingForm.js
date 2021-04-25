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
  Label,CustomInput
} from "reactstrap";
import {createTestpaper} from '../../../../redux/actions/shop/index';
import "../../../../assets/scss/pages/users.scss"
import {connect} from 'react-redux';

class MembershipForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      fees_name : "",
      color : "",
      fees_description : "",
      programName : "",
      total_price : 0
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidUpdate(prevProps){
    
    if(this.props.shop.testpaperList.length > prevProps.shop.testpaperList.length){
      this.props.toggle();
    }
  }

  changeHandler(e){
    console.log(e.target.name, e.target.value);
    this.setState({...this.state, [e.target.name] : e.target.value});
  }

  onsubmit = (e) => {
    
    e.preventDefault();
    this.props.createTestpaper(this.state);
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
                            <div>
                            <Label> Fee Name: </Label>
                            </div>
                            <CustomInput type="select" name="fees_name" value={this.state.fees_name} onChange={this.changeHandler} id="fees_name">
                                <option>Martial Arts Test</option>
                                <option>Candidate Test1</option>
                                <option>Candidate Test2</option>
                                <option>Candidate Test3</option>
                            </CustomInput>
                        </FormGroup>
                </Col>
                <Col sm="12">
                        <FormGroup className="form-label-group">
                            <div>
                            <Label> Fees Description: </Label>
                            </div>
                            <CustomInput type="select" name="fees_description" value={this.state.fees_description} onChange={this.changeHandler} id="fees_description">
                                <option>Black Belt 2nd Dan Test Fee</option>
                                <option>Black Belt 3rd Dan Test Fee</option>
                                <option>Candidate Test22</option>
                                <option>Candidate Test33</option>
                            </CustomInput>
                        </FormGroup>
                </Col>
                <Col sm="12">
                        <FormGroup className="form-label-group">
                            <div>
                            <Label>Program: </Label>
                            </div>
                            <CustomInput type="select" name="programName" value={this.state.programName} onChange={this.changeHandler} id="programName">
                                <option>Program </option>
                                <option >svcvxcvxcv</option>
                                <option >Taekwondo</option>
                                <option >Kickboxing</option>
                            </CustomInput>
                        </FormGroup>
                </Col>
                <Col sm="12">
                        <FormGroup className="form-label-group">
                          <div><Label for="tpFloating">Total Price:</Label></div>
                            <Input
                                type="number"
                                name="total_price"
                                id="total_price"
                                name="total_price"
                                value={this.state.total_price}
                                onChange={this.changeHandler}
                                placeholder="Total Price:"
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
                                 type="color"
                                 id="colorFloating"
                                 className="npt-1"
                                 name="color"
                                 value={this.state.color}
                                 onChange={this.changeHandler}
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
  return {shop : state.shop};
}
export default connect(mapStateToProps, {createTestpaper})(MembershipForm)
