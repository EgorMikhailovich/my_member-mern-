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
  NavLink,
  Form,
  Col,
  UncontrolledTooltip
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code,Plus,User, Phone} from "react-feather"
// import Financedata from './financeForm'
import "../../../assets/scss/pages/users.scss"
import TooltipPosition from "./TooltipPositions"



class ModalForm extends React.Component {
  state = {
    modal: false
  }

  

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    return (
      <React.Fragment>
                 
                <Phone
                 onClick={this.toggleModal}
                 className="mr-50"
                 size={20}
                 />
                 
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              className="modal-dialog-centered modal-md"
            >
                <ModalHeader toggle={this.toggleModal}>
                Are you sure you want to call
                </ModalHeader>
                <ModalBody>
                   <div className="mdl_align_text">
                      <button className="btn_yes_call">
                          Yes
                      </button>
                      <button className="btn_no_call">
                          No
                      </button>
                   </div>
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
