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
  Row,
  Col,
  CustomInput
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code,Plus,User,Info, DollarSign,Printer,Circle, Trash} from "react-feather"
// import CandidateTabs from "./CandidateTabs"
// import Financedata from './financeForm'
import img from "../../../../assets/img/pages/1-apex.png"
import "../../../../assets/scss/pages/users.scss"
import { Icon } from "leaflet"
import EyemdalinTable from "./eyemdalinTable"
import StlistusereyeappoinModal from "./stlistusereyeappoinModal"
// import { CrossIcon } from "react-select/src/components/indicators"




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
              <Eye 
              
               className="mr-50"
               size={20}
               onClick={this.toggleModal}
              />
          
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              className="modal-dialog-centered modal-lg"
            >
                <ModalHeader toggle={this.toggleModal}>
                     Amelia R. Copin
                </ModalHeader>
                <ModalBody>
                  {/* <CandidateTabs/> */}
                  <Row>
                    <Col lg="7">
                        <Row>
                            <Col md="3">
                               <div>
                                 <img src={img} className="img_eye_moda"/>
                               </div>
                            </Col>
                            <Col md="9">
                              <p><strong>Phone: 347-761-6342</strong></p>
                              <p><strong>Email: natkinnatkin@gmail.com</strong></p>
                              <ul className="ey_a">
                                 <li className="ey_b">Text</li>
                                 <li className="ey_b"> Email</li>
                                 <li className="ey_b">Call</li>
                              </ul>
                              
                              <StlistusereyeappoinModal/>
                            </Col>
                        </Row>
                        <h6>Add a note</h6>
                        <Row>
                            <Col sm="3">
                                <CustomInput type="select"> 
                                  <option value="Select Call Type">Select Call Type</option>
                                  <option value="">Birthday</option>
                                  <option value="">Miss You</option>
                                  <option value="">Renewal</option>
                                  <option value="">Other</option>
                                </CustomInput>
                            </Col>
                            <Col sm="">
                                <CustomInput type="select"> 
                                  <option value="Select Result">Select Result</option>
                                  <option value="">Left Message</option>
                                  <option value="">No Answer</option>
                                  <option value="">Spoke to Someone</option>
                                </CustomInput>
                            </Col>
                            <Col sm="3">
                                 <CustomInput type="select"> 
                                  <option value="System text sent">System text sent</option>
                                  <option value="">System email sent</option>
                                  <option value="">System call made</option>
                                  <option value="">Manual text sent</option>
                                </CustomInput>
                            </Col>
                            <Col sm="2">
                               <button className="ey_add">Add</button>
                            </Col>
                            <Col sm="12 tp_mar_ey">
                                <FormGroup>
                                    <Input 
                                    type="textarea"
                                    placeholder="Add Note Here"
                                     />
                                </FormGroup>
                            </Col>
                             <Col sm="12">
                                    <Card>
                                        <CardHeader className="crd_hdr_ey">
                                            <CardTitle className="crdtite_ey">Membership

                                                <Info
                                                 size={20}
                                                 color="white"
                                                />
                                            </CardTitle>
                                        </CardHeader>
                                               <CardBody>
                                                    <div className="eye_crd">
                                                       <div className="eye_crd1">
                                                         <strong className="tx_stg">7 Month Little Tigers PIF (A):</strong>
                                                       </div>
                                                       <div className="eye_crd2">
                                                         <p>PIF</p>
                                                       </div>
                                                    </div>
                                                    <div className="eye_crd">
                                                       <div className="eye_crd1">
                                                         <strong className="tx_stg">Starts:</strong>
                                                       </div>
                                                       <div className="eye_crd2">
                                                         <p className="tx_stg">02/07/2020</p>
                                                       </div>
                                                    </div>
                                                    <div className="eye_crd">
                                                       <div className="eye_crd1">
                                                         <strong>Ends:</strong>
                                                       </div>
                                                       <div className="eye_crd2">
                                                         <p>09/07/2020</p>
                                                       </div>
                                                    </div>
                                                    <div className="eye_crd">
                                                       <Row>
                                                          <Col sm="4">
                                                              <DollarSign
                                                              size={14}
                                                              color="Blue"
                                                              />
                                                              <span>Freeze</span>
                                                          </Col>
                                                          <Col sm="4">
                                                             <Circle
                                                              size={14}
                                                              color="Blue"
                                                              />
                                                              <span>Terminate</span>
                                                          </Col>
                                                          <Col sm="4">
                                                              <Printer
                                                              size={14}
                                                              color="Blue"
                                                              />
                                                              <span>Print</span>
                                                          </Col>
                                                       </Row>
                                                    </div>
                                               </CardBody>
                                    </Card>
                             </Col>
                             <Col sm="12">
                                    <Card>
                                        <CardHeader className="crd_hd_ey">
                                            <CardTitle className="crdtite_ey">Birthday Checklist
                                                
                                            </CardTitle>
                                        </CardHeader>
                                               <CardBody>
                                               <form>
                                                    <Row>
                                                      <Col sm="4"> 
                                                          <Label>Congratulated:</Label>
                                                          <CustomInput
                                                           Type="radio"
                                                          >
                                                          </CustomInput>
                                                      </Col>
                                                      <Col sm="3"> 
                                                          <Label>Status:</Label>
                                                          <span>Party</span>
                                                      </Col>
                                                      <Col sm="5"> 
                                                          {/* <Label>PartyDate:</Label> */}
                                                          <span>
                                                          <CustomInput
                                                           Type="date"
                                                          >
                                                          </CustomInput>
                                                          </span>
                                                      </Col>
                                                      </Row>
                                                      </form>
                                                      <Row className="row_sp_top">
                                                      <Col sm="6">
                                                          <CustomInput
                                                           Type="text"
                                                           placeholder="Enter Invites Given"
                                                          >
                                                          </CustomInput>
                                                      </Col>
                                                      <Col sm="6">
                                                          <CustomInput
                                                           Type="Text"
                                                           placeholder="Enter RSVP #"
                                                          >
                                                          </CustomInput>
                                                      </Col>
                                                     </Row>
                                                      <Row className="row_sp_top">
                                                      <Col sm="4">
                                                          <Label>card send:</Label>
                                                          <CustomInput
                                                           Type="Checkbox"
                                                          >
                                                          </CustomInput>
                                                      </Col>
                                                      <Col sm="4">
                                                          <Label>Gift Given:</Label>
                                                          <CustomInput
                                                           Type="Checkbox"
                                                          >
                                                          </CustomInput>
                                                      </Col>
                                                      <Col sm="4">
                                                         <Button className="up_button_md">
                                                             Update
                                                         </Button>
                                                      </Col>
                                                    </Row>
                                               </CardBody>
                                    </Card>
                             </Col>
                             <Col sm="12">
                                <EyemdalinTable/>
                             </Col>
                        </Row>
                    </Col>
                    <Col lg="5" className="clr_right_side">
                       <div className="ey_right_content">
                           <div className="ey_bx_1">
                                <Row>
                                   <Col sm="5">
                                      <p>Last Contacted</p>
                                   </Col>
                                   <Col sm="5">
                                      <p>01-14-2021</p>
                                   </Col>
                                   <Col sm="2">
                                      <Trash
                                         size="14"
                                         color="black"
                                      />
                                   </Col>
                                </Row>
                                <Row>
                                   <Col sm="12">
                                     <p>opkpokkpkl[pl</p>
                                   </Col>
                                </Row>
                              
                                    <button className="bt_tab1_ey">
                                      Menual Email Sent
                                    </button>
                                    <button className="bt_tab2_ey">
                                      Miss You Call
                                    </button>
                                    <button className="bt_tab3_ey"> 
                                      Left Message
                                    </button>
                                
                           </div> 
                           <div className="ey_bx_1">
                                <Row>
                                   <Col sm="5">
                                      <p>Last Contacted</p>
                                   </Col>
                                   <Col sm="5">
                                      <p>01-14-2021</p>
                                   </Col>
                                   <Col sm="2">
                                      <Trash
                                         size="14"
                                         color="black"
                                      />
                                   </Col>
                                </Row>
                                <Row>
                                   <Col sm="12">
                                     <p>opkpokkpkl[pl</p>
                                   </Col>
                                </Row>
                              
                                    <button className="bt_tab1_ey">
                                      Menual Email Sent
                                    </button>
                                    <button className="bt_tab2_ey">
                                      Miss You Call
                                    </button>
                                    <button className="bt_tab3_ey"> 
                                      Left Message
                                    </button>
                                
                           </div> 
                           <div className="ey_bx_1">
                                <Row>
                                   <Col sm="5">
                                      <p>Last Contacted</p>
                                   </Col>
                                   <Col sm="5">
                                      <p>01-14-2021</p>
                                   </Col>
                                   <Col sm="2">
                                      <Trash
                                         size="14"
                                         color="black"
                                      />
                                   </Col>
                                </Row>
                                <Row>
                                   <Col sm="12">
                                     <p>opkpokkpkl[pl</p>
                                   </Col>
                                </Row>
                              
                                    <button className="bt_tab1_ey">
                                      Menual Email Sent
                                    </button>
                                    <button className="bt_tab2_ey">
                                      Miss You Call
                                    </button>
                                    <button className="bt_tab3_ey"> 
                                      Left Message
                                    </button>
                                
                           </div> 
                       </div>
                    </Col>
                  </Row>
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
