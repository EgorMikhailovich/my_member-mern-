import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label
} from "reactstrap"
import { Create_DocFolder } from '../../../../redux/actions/document';
import {connect} from 'react-redux';

class FloatingLabels extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      folderName : ""  
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.onsubmit = this.onsubmit.bind(this);
  }

  changeHandler(e){
    
      this.setState({...this.state, [e.target.name] : e.target.value});
      
  }

  onsubmit(e){
    // console.log(">>>>>>>>>>>>>>",this.state)
    e.preventDefault();
    this.props.Create_DocFolder(this.state);
    // setTimeout(() => {
    //   this.props.toggle();
    // }, 600)
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
                    type="text"
                    name="folderName"
                    value={this.state.folderName}
                    onChange={this.changeHandler}
                    id="folderName"
                    placeholder="Folder Name"
                  />
                  <Label for="nameFloating">Folder Name</Label>
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

  };
}
export default connect(mapStateToProps, {Create_DocFolder})(FloatingLabels);
