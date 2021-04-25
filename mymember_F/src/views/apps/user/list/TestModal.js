import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
 
} from "reactstrap"
import { Plus} from "react-feather"
import TestTabs from "./TestTabs"

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
                 
                <Button 
                className="btn-lg fides3 btn waves-effect waves-light"
                onClick={this.toggleModal}>
                  <Plus size={21} />
                  <br></br>
                  Test
                </Button>
          
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              className="modal-dialog-centered modal-lg"
            >
                <ModalHeader toggle={this.toggleModal}>
                The following student have been selected for promoption.Please promote rank.
                </ModalHeader>
                <ModalBody>
                <TestTabs/>
                 
                </ModalBody>
            </Modal>
            
        </React.Fragment>
    )
  }
}
export default ModalForm
