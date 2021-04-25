import React from "react"
import {
  FormGroup,
  Col,
  Input,
  Form,
  Button,
  Label
} from "reactstrap"

import { ArrowRight } from "react-feather"
import EditorControlled from "./EditorControlled"

class HorizontalForm extends React.Component {
  render() {
    return (
      
          <Form>
            <FormGroup row>
              <Col md="12">
                  <Label>From:</Label>
                <Input
                  type="email"
                  name="name"
                  id="clientid"
                  placeholder="CLIENT ID"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="12">
                  <Label>To:</Label>
                <Input
                  type="email"
                  name="name"
                  id="clientid"
                  placeholder="CLIENT ID"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="12">
                  <Label>Subject:</Label>
                <Input
                  type="text"
                  name="name"
                  id="clientid"
                  placeholder="CLIENT ID"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="12">
                  <Label>Message:</Label>
                   <EditorControlled/>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md= "12">
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                  onClick={e => e.preventDefault()}
                >
                  Send
                  <ArrowRight
                   size="14"
                  />
                </Button.Ripple>
              </Col>
            </FormGroup>
          </Form>
       
    )
  }
}
export default HorizontalForm
