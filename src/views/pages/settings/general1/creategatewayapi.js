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
  Label,CustomInput
} from "reactstrap"

import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import "../../../../assets/scss/pages/users.scss"
import img from "../../../../assets/img/pages/1-apex.png"
import { Check } from "react-feather"

class FloatingLabels extends React.Component {
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
                  <div><Label for="nameFloating">Full Name</Label></div>
                  <Input
                    type="text"
                    name="stripe name"
                    id="otherFloating"
                    placeholder="Name"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                    onClick={e => e.preventDefault()}
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
