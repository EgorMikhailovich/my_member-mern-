import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap"
import {User} from "react-feather"
import CandidateTabs from "./CandidateTabs"
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
                 <Button 
                 className="btn-lg fides4 btn waves-effect waves-light"
                 onClick={this.toggleModal}
                 >
                  <User size={21} />
                  <br></br>
                  Candidate
                </Button>
          
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              className="modal-dialog-centered modal-lg"
            >
                <ModalHeader toggle={this.toggleModal}>
                 Manage your candidate here
                </ModalHeader>
                <ModalBody>
                <CandidateTabs />
                 
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
