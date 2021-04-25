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
  Label,
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
                    placeholder="Folder Name"
                  />
                  <Label for="nameFloating">Add Folder Name</Label>
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
