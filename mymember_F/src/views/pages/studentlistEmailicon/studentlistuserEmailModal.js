import React from "react"
import {
  
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap"
import { Mail} from "react-feather"
import TestTabs from "./TestTabs"
import EmailstForm from "./emailstForm"
// import Financedata from './financeForm'


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
                 
                
              <Mail 
               onClick={this.toggleModal}
               className="mr-50"
               size={20} 
               />
          
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              className="modal-dialog-centered modal-lg"
            >
                <ModalHeader toggle={this.toggleModal}>
                Email
                </ModalHeader>
                <ModalBody>
                 <TestTabs/>
                 <EmailstForm/>
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
