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
} from "reactstrap"
import {getProgramList,createCategory} from '../../../../../redux/actions/programe';
import "../../../../../assets/scss/pages/users.scss"
import { connect } from "react-redux"

class FloatingLabels extends React.Component {
  
  state={
    programName:"",
    category:""
  }
 

  componentDidMount(){
    this.props.getProgramList();
  } 

  changeHandler = e =>{
    console.log(e.target.name, e.target.value);
    this.setState({...this.state, [e.target.name] : e.target.value});
    
  }

  onsubmit = (e) => {
    
    e.preventDefault();
    this.props.createCategory(this.state);
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
                            <Label>Program</Label>
                            </div>
                            <CustomInput 
                            type="select" 
                            name="programName" 
                            value={this.state.programName}
                            onChange={this.changeHandler}
                            >
                              {/* {console.log(this.props)} */}
                           { this.props.program.programList.map((v,i) => <option value={v.programName} key={v._id}>{v.programName}</option>)}
                           
                            </CustomInput>
                          
                        </FormGroup>
                </Col>
                <Col sm="12">
                        <FormGroup className="form-label-group">
                        <div>
                            <Label> Category Name </Label>
                        </div>
                            <Input
                            onChange={this.changeHandler}
                            type="text"
                            name="category"
                            id="category"
                            placeholder="Category Name"
                            />
                        
                            
                        </FormGroup>
                </Col>
                <Col sm="12">
                        <FormGroup className="form-label-group">
                        <div>
                            <Label> Sub Category Name </Label>
                        </div>
                            <Input
                            onChange={this.changeHandler}
                            type="text"
                            name="category"
                            id="category"
                            placeholder="Sub Category Name "
                            />
                        
                            
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
const mapStateToProps = state => {
  return {
    program : state.program
  }
}
export default connect(mapStateToProps,{ getProgramList,createCategory })(FloatingLabels)
