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
  Button
} from "reactstrap"

// import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"

class HorizontalForm extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Aweber API Details</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup row>
              <Col md="4">
                <span>CLIENT ID</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="name"
                  id="clientid"
                  placeholder="CLIENT ID"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="4">
                <span>CLIENT SECRET</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="client"
                  id="client"
                  placeholder="CLIENT SECRET"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="4">
                <span>Aweber Leads ID</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="name"
                  id="aweberlead"
                  placeholder="Aweber Leads ID"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="4">
                <span>Aweber Trials ID</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="name"
                  id="aweber"
                  placeholder="Aweber Trials ID"
                />
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
