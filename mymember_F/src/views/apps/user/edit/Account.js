import React from "react"
import {
  Media,
  Row,
  Col,
  Button,
  Form,
  Input,
  Label,
  FormGroup,
  Table
} from "reactstrap"
import userImg from "../../../../assets/img/portrait/small/avatar-s-18.jpg"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check, Lock } from "react-feather"
class UserAccountTab extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12">
          <Media className="mb-2">
            <Media className="mr-2 my-25" left href="#">
              <Media
                className="users-avatar-shadow rounded"
                object
                src={userImg}
                alt="user profile image"
                height="84"
                width="84"
              />
            </Media>
            <Media className="mt-2" body>
              <Media className="font-medium-1 text-bold-600" tag="p" heading>
                Crystal Hamilton
              </Media>
              <div className="d-flex flex-wrap">
                <Button.Ripple className="mr-1" color="primary" outline>
                  Change
                </Button.Ripple>
                <Button.Ripple color="flat-danger">Remove Avatar</Button.Ripple>
              </div>
            </Media>
          </Media>
        </Col>
        <Col sm="12">
          <Form onSubmit={e => e.preventDefault()}>
            <Row>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    defaultValue="crystal"
                    id="username"
                    placeholder="Username"
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="status">Status</Label>
                  <Input type="select" name="status" id="status">
                    <option>Active</option>
                    <option>Banned</option>
                    <option>Closed</option>
                  </Input>
                </FormGroup>
              </Col>

              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    defaultValue="Crystal Hamilton"
                    id="name"
                    placeholder="Name"
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="role">Role</Label>
                  <Input type="select" name="role" id="role">
                    <option>User</option>
                    <option>Staff</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="text"
                    defaultValue="crystalhamilton@gmail.com"
                    id="email"
                    placeholder="Email"
                  />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="company">Company</Label>
                  <Input
                    type="text"
                    id="company"
                    defaultValue="North Star Aviation Pvt Ltd"
                    placeholder="company"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <div className="permissions border px-2">
                  <div className="title pt-2 pb-0">
                    <Lock size={19} />
                    <span className="text-bold-500 font-medium-2 ml-50">
                      Permissions
                    </span>
                    <hr />
                  </div>
                  <Table borderless responsive>
                    <thead>
                      <tr>
                        <th>Module Permission</th>
                        <th>Read</th>
                        <th>Write</th>
                        <th>Create</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Users</td>
                        <td>
                          <Checkbox
                            color="primary"
                            icon={<Check className="vx-icon" size={16} />}
                            label=""
                            defaultChecked={true}
                          />
                        </td>
                        <td>
                          <Checkbox
                            color="primary"
                            icon={<Check className="vx-icon" size={16} />}
                            label=""
                            defaultChecked={false}
                          />
                        </td>
                        <td>
                          <Checkbox
                            color="primary"
                            icon={<Check className="vx-icon" size={16} />}
                            label=""
                            defaultChecked={false}
                          />
                        </td>
                        <td>
                          {" "}
                          <Checkbox
                            color="primary"
                            icon={<Check className="vx-icon" size={16} />}
                            label=""
                            defaultChecked={true}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Articles</td>
                        <td>
                          <Checkbox
                            color="primary"
                            icon={<Check className="vx-icon" size={16} />}
                            label=""
                            defaultChecked={false}
                          />
                        </td>
                        <td>
                          <Checkbox
                            color="primary"
                            icon={<Check className="vx-icon" size={16} />}
                            label=""
                            defaultChecked={true}
                          />
                        </td>
                        <td>
                          <Checkbox
                            color="primary"
                            icon={<Check className="vx-icon" size={16} />}
                            label=""
                            defaultChecked={false}
                          />
                        </td>
                        <td>
                          {" "}
                          <Checkbox
                            color="primary"
                            icon={<Check className="vx-icon" size={16} />}
                            label=""
                            defaultChecked={true}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Staff</td>
                        <td>
                          <Checkbox
                            color="primary"
                            icon={<Check className="vx-icon" size={16} />}
                            label=""
                            defaultChecked={true}
                          />
                        </td>
                        <td>
                          <Checkbox
                            color="primary"
                            icon={<Check className="vx-icon" size={16} />}
                            label=""
                            defaultChecked={true}
                          />
                        </td>
                        <td>
                          <Checkbox
                            color="primary"
                            icon={<Check className="vx-icon" size={16} />}
                            label=""
                            defaultChecked={false}
                          />
                        </td>
                        <td>
                          {" "}
                          <Checkbox
                            color="primary"
                            icon={<Check className="vx-icon" size={16} />}
                            label=""
                            defaultChecked={false}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
              <Col
                className="d-flex justify-content-end flex-wrap mt-2"
                sm="12"
              >
                <Button.Ripple className="mr-1" color="primary">
                  Save Changes
                </Button.Ripple>
                <Button.Ripple color="flat-warning">Reset</Button.Ripple>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    )
  }
}
export default UserAccountTab
