import React from "react"
import {
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap"
import SmartListTable from "./smartlistTable"

class SmartListModal extends React.Component {
  render() {
    const {handleSelectSmartList,modal,toggleModal} = this.props
    return (
      <React.Fragment>
            <Modal
              isOpen={modal}
              toggle={toggleModal}
              className="modal-dialog-centered"
            >
                <ModalHeader toggle={toggleModal}>
                 Smart List
                </ModalHeader>
                <ModalBody>
                  <SmartListTable handleSelectSmartList={handleSelectSmartList} />
                </ModalBody>
              
            </Modal>
            
        </React.Fragment>
    )
  }
}
export default SmartListModal
