import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code } from "react-feather"
import Financedata from './financeForm'
// import { modalForm } from "./ModalSourceCode"

class ModalForm extends React.Component {
  state = {
    activeTab: "1",
    modal: false
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    return (
      <React.Fragment>
        
            <Button.Ripple
                  color="success"
                  outline
                  onClick={this.toggleModal}
                >
                  Launch Modal
            </Button.Ripple>
          
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              className="modal-dialog-centered"
            >
                <ModalHeader toggle={this.toggleModal}>
                  Add New Finance Info
                </ModalHeader>
                <ModalBody>
                    <Financedata />
                  {/* <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Email Address"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password:</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Password"
                    />
                  </FormGroup> */}
                </ModalBody>
                {/* <ModalFooter>
                  <Button color="primary" onClick={this.toggleModal}>
                    Next
                  </Button>{" "}
                </ModalFooter> */}
            </Modal>
            
        </React.Fragment>
    )
  }
}
export default ModalForm
