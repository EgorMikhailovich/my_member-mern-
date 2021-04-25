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
  Label,
} from "reactstrap"

import "../../../../../assets/scss/pages/users.scss"


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
                    name="categoryname"
                    id="nameFloating"
                    placeholder="Category Name"
                  />
                  <Label for="categoryFloating">Category Name</Label>
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
