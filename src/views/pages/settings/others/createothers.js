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
const baseUrl = process.env.REACT_APP_BASE_URL;

class FloatingLabels extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      formfilled: false,
      error: false,
      errorMsg: '',
      campName: ''
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
    if(this.state.campName==""){
      this.setState({
        error: true,
        errorMsg: "Kindly fill camp name" 
      })
    }
    else{
      this.setState({
        error: false,
        errorMsg: "" 
      })
      var postdata = {
        "campName": this.state.campName
      };
    //   if(this.state.program_image!==""){
    //     postdata.program_image = this.state.program_image;
    //   }
      var el = this;
      let token = localStorage.getItem("access_token");
      let user_id= localStorage.getItem("user_id");
    //   console.log(">>>>",user_id)

      return fetch(`${baseUrl}/api/camp/add_camp/${user_id}`, {
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
          {/* <CardTitle>Vertical Form With Floating Labels</CardTitle> */}
        </CardHeader>
        <CardBody>
          <Form className="mt-10">
            <Row>
                <Col sm="12">
                        <FormGroup className="form-label-group">
                        <div>
                            <Label> Camp Name </Label>
                        </div>
                            <Input
                            onChange={(e)=>this.myChangeHandler(e, 'campName')}
                            type="text"
                            name="campName"
                            id="campName"
                            placeholder="Camp Name"
                            />
                        
                            
                        </FormGroup>
                </Col>
             
                <Col sm="12">
                {this.state.error==true && <Alert color="danger">
                  {this.state.errorMsg}
                </Alert>}
                {this.state.formfilled==true && <Alert color="success">
                  Camp created successfully
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
export default FloatingLabels
