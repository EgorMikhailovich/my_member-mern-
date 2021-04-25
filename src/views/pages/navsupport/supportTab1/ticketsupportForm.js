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
import EditorControlled from "./EditorControlled"
import img from "../../../../assets/img/pages/1-apex.png"

// import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"


class HorizontalForm extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Add Ticket</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup row>
              <Col md="3">
                <span>Subject:</span>
              </Col>
              <Col md="9">
                <Input
                  type="text"
                  name="name"
                  id="merchant"
                  placeholder="MERCHANT LOGIN ID"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="3">
                <span>Type:</span>
              </Col>
              <Col md="3">
                 <CustomInput type="select">
                    <option>Seclect Type</option>
                    <option>Billing</option>
                    <option>Membership</option>
                    <option>General</option>
                 </CustomInput>
              </Col>
              <Col md="3">
                <span>Location:</span>
              </Col>
              <Col md="3">
                 <CustomInput type="select">
                    <option>Select Location</option>
                    <option>Quentin Rd</option>
                 </CustomInput>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <span> Description:</span>
              </Col>
              <Col md="9">
                 <EditorControlled/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="3">
                <span> Add Attachment</span>
              </Col>
              <Col md="9">
                  <Input
                        onChange={(e)=>this.myChangeHandler(e, 'program_image')}
                        type="file"
                        name="program_image"
                        id="program_image"
                        placeholder="Program Name"
                        />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 9, offset: 3 }}>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                  onClick={e => e.preventDefault()}
                >
                  Add Ticket
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
