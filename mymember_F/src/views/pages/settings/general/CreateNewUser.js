import React from "react"
import {
  Card,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,CustomInput
} from "reactstrap"

class FloatingLabels extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <Form className="mt-10">
            <Row>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="fullname"
                    id="nameFloating"
                    placeholder="First Name"
                  />
                  <Label for="nameFloating">Full Name</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="text"
                    name="username"
                    id="nameFloating"
                    placeholder="User Name"
                  />
                  <Label for="nameFloating">User Name</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="password"
                    name="password"
                    id="passwordFloating"
                    placeholder="Password"
                  />
                  <Label for="passwordFloating">Password</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="password"
                    name="retype password"
                    id="nameFloating"
                    placeholder="Retype Password"
                  />
                  <Label for="nameFloating">Retype Password</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="email"
                    name="Email"
                    id="EmailFloating"
                    placeholder="Email"
                  />
                  <Label for="EmailFloating">Email</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Input
                    type="number"
                    name="mobile"
                    id="mobileFloating"
                    placeholder="Mobile"
                  />
                  <Label for="mobileFloating">Mobile</Label>
                </FormGroup>
              </Col>
              <Col sm="12">
                        <FormGroup className="form-label-group">
                            <Label> Status </Label>
                            <CustomInput type="select" name="select" id="status">
                                <option>Active</option>
                                <option>Inactive</option>
                            </CustomInput>
                        </FormGroup>
                </Col>
                <Col sm="12">
                        <FormGroup className="form-label-group">
                            <Label> Profile Type </Label>
                            <CustomInput type="select" name="select" id="profiletype">
                                <option>Profile Type</option>
                                <option>Administrator</option>
                                <option>Employee</option>
                                <option>Global Admin</option>
                            </CustomInput>
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
