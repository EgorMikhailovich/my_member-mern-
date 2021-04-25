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

// import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import "../../../../assets/scss/pages/users.scss";
import {getProgramList} from '../../../../redux/actions/programe';
import {connect} from 'react-redux';

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
  componentDidMount(){
    this.props.getProgramList();
    
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
        getProgramList()
    })
    .catch(error => console.log(error));
    }
  }

  render() {
    return (
      <Card>
        <CardHeader>
          {/* <CardTitle>Vertical Form With Floating Labels</CardTitle> */}
        </CardHeader>
        <CardBody>
          <Form className="mt-10">
            <Row>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    onChange={(e)=>this.myChangeHandler(e, 'programName')}
                    type="text"
                    name="program name"
                    id="nameFloating"
                    placeholder="Program Name"
                  />
                  <Label for="nameFloating">Program Name</Label>
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
                          onChange={(e)=>this.myChangeHandler(e, 'color')}
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
                  <Input
                  onChange={(e)=>this.myChangeHandler(e, 'lable')}
                    type="text"
                    name="label"
                    id="labelFloating"
                    placeholder="label"
                  />
                  <Label for="passwordFloating">Label</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    onChange={(e)=>this.myChangeHandler(e, 'total_rank')}
                    type="text"
                    name="retype password"
                    id="totalrankFloating"
                    placeholder="Total Rank"
                  />
                  <Label for="nameFloating">Total Rank</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                        <FormGroup className="form-label-group">
                            <div>
                            <Label>Progression</Label>
                            </div>
                            <CustomInput onChange={(e)=>this.myChangeHandler(e, 'progression')} type="select" name="select" id="Progression">
                                <option>Progression</option>
                                <option>By Time Only</option>
                                <option>By Time Only & Lession</option>
                                <option>By Lession Only </option>
                            </CustomInput>
                        </FormGroup>
                </Col>
                <Col sm="12">
                        <FormGroup className="form-label-group">
                            <div>
                            <Label> Belt Type </Label>
                            </div>
                            <CustomInput onChange={(e)=>this.myChangeHandler(e, 'type')} type="select" name="select" id="balttype">
                                <option>By Belt</option>
                                <option>By Stripe</option>
                                <option>By Apparel</option>
                            </CustomInput>
                        </FormGroup>
                </Col>
              <Col sm="12">
                        <FormGroup className="form-label-group">
                            <div>
                            <Label> Requirement </Label>
                            </div>
                            <CustomInput onChange={(e)=>this.myChangeHandler(e, 'requirement')} type="select" name="select" id="status">
                                <option>Requirement </option>
                                <option> None </option>
                                <option> bottel  </option>
                                <option> Manage list  </option>
                            </CustomInput>
                        </FormGroup>
                </Col>
                <Col sm="12">
                    <FormGroup className="form-label-group">
                          {/* <img src={img} width="100px"/> */}
                              <Input
                              onChange={(e)=>this.myChangeHandler(e, 'program_image')}
                                type="file"
                                name="program_image"
                                id="program_image"
                                placeholder="Program Name"
                              />
                          <Label for="nameFloating">Program Image</Label>
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
      program : state.program
  }
}
export default connect(mapStateToProps, {getProgramList})(FloatingLabels);
