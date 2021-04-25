import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Col,
  Input,
  Form,
  Button,
  CustomInput
} from "reactstrap"

// import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"

class HorizontalForm extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Create Appointment</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup row>
              <Col md="4">
                <span>Title</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Title"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="4">
                <span>Start</span>
              </Col>
              <Col md="8">
                <Input
                  type="date"
                  name="start"
                  id="start"
                  placeholder=""
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="4">
                <span>Start Time</span>
              </Col>
              <Col md="8">
                <Input
                  type="time"
                  name="name"
                  id=""
                  placeholder=""
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="4">
                <span>Staff</span>
              </Col>
              <Col md="8">
                <CustomInput type="select">
                    <option>Staff</option>
                    <option>Master Jo  </option>
                    <option>rohan verma  </option>
                </CustomInput>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="4">
                <span>Notes</span>
              </Col>
              <Col md="8">
                 <Input type="textarea" />
              </Col>
            </FormGroup>

            

            <FormGroup row>
              <Col md={{ size: 8, offset: 4 }}>
               <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                  onClick={e => e.preventDefault()}
                >
                  Cancel
                </Button.Ripple>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                  onClick={e => e.preventDefault()}
                >
                  Save
                </Button.Ripple>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default HorizontalForm
