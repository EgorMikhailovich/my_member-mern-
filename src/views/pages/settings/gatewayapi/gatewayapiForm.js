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
          <CardTitle>Payment Gateway Authorize.net</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup row>
              <Col md="4">
                <span>MERCHANT LOGIN ID</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="name"
                  id="merchant"
                  placeholder="MERCHANT LOGIN ID"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="4">
                <span>MERCHANT TRANSACTION KEY</span>
              </Col>
              <Col md="8">
                <Input
                  type="text"
                  name="name"
                  id="Transaction"
                  placeholder="MERCHANT TRANSACTION KEY
                  "
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
