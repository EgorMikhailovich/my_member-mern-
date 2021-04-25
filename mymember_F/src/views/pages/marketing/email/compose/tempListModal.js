import React from "react"
import {
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap"
import TempListTable from "./templistTable"

class TempListModal extends React.Component {
  render() {
    const {modalSecond,toggleModalSecond,handleSelectTempListDetail} = this.props
    return (
      <React.Fragment>
            <Modal
              isOpen={modalSecond}
              toggle={toggleModalSecond}
              className="modal-dialog-centered"
            >
                <ModalHeader toggle={toggleModalSecond}>
                 Temp List
                </ModalHeader>
                <ModalBody>
                  <TempListTable  handleSelectTempListDetail={handleSelectTempListDetail}/>
                </ModalBody>
              
            </Modal>
            
        </React.Fragment>
    )
  }
}
export default TempListModal
