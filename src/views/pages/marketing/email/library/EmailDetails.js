import React from "react"
import {
  ArrowLeft,
  Star,
  Trash,
  ChevronDown,
  Paperclip,
  Edit
} from "react-feather"
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody
} from "reactstrap"
import PerfectScrollbar from "react-perfect-scrollbar"
import SweetAlert from 'react-bootstrap-sweetalert';
import { connect } from 'react-redux';
import { DELETE_SCHEDULE_MAIL, GET_SCHEDULE_MAILS } from '../../../../../redux/actions/library';
import EditorControlled from "../compose/emailwriteEditor"
import { Fragment } from "react";


class EmailDetails extends React.Component {
  state = {
    showReplies: false,
    defaultAlert: false,
    targetedTemplateId: null,
    editExisting: false,
    isEditTemplate: false
  }

  handleReplies = bool => {
    this.setState({
      showReplies: bool
    })
  }
  deleteScheduleMail = (templateId) => {
    this.setState({ targetedTemplateId: templateId, defaultAlert: true, })
  }


  handleAlert = (action) => {
    if ('confirmAlert' === action) {
      this.props.DELETE_SCHEDULE_MAIL(this.state.targetedTemplateId)
      this.setState({ defaultAlert: false, targetedTemplateId: null })
      this.props.handleEmailDetails("close")
    } else {
      this.setState({ defaultAlert: false })
    }
  }
  handleIsEditor = () => {
    this.setState({ isEditor: !this.state.isEditor, isEditTemplate: false })
  }
  handleEditExisting = () => {
    this.setState({ isEditTemplate: !this.state.isEditTemplate })
  }

  render() {
    let currentMail = this.props.currentEmail
    const { isEditTemplate } = this.state
    return (
      <div
        className={`email-app-details ${this.props.currentStatus ? "show" : ""
          }`}
      >

        {!isEditTemplate ?
          <Fragment>
            <div className="email-detail-header">
              <div className="email-header-left d-flex align-items-center mb-1">
                <ArrowLeft
                  size={20}
                  className="mr-1 cursor-pointer"
                  onClick={() => {
                    this.props.handleEmailDetails("close")
                    this.handleReplies(false)
                  }}
                />
                {/* {console.log(currentMail.subject)} */}
                <h4 className="mb-0">{currentMail.subject}</h4>
              </div>
              <div className="email-header-right mb-1 ml-2 pl-1">
                <ul className="list-inline m-0">
                  <li className="list-inline-item mr-1">
                    <span
                      className="action-icon favorite"
                      onClick={() => this.props.toggleStarred(currentMail._id)}
                    >
                      <Star
                        size={22}
                        fill={currentMail.isStarred ? "#FF9F43" : "transparent"}
                        stroke={currentMail.isStarred ? "#FF9F43" : "#626262"}
                      />
                    </span>
                  </li>
                  <li
                    className="list-inline-item mr-1 mail-unread"
                  // onClick={() => {
                  //   this.props.handleEmailDetails("close")
                  //   this.props.unreadMails(true)
                  // }}
                  >
                    <span className="action-icon">
                      <Edit onClick={this.handleEditExisting} size={22} />
                    </span>
                  </li>
                  <li className="list-inline-item mr-1 mail-delete">
                    <span className="action-icon"> {/* add delete button here */}
                      <Trash size={22} onClick={() => { this.deleteScheduleMail(currentMail._id) }} />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <PerfectScrollbar
              className="email-scroll-area"
              options={{
                wheelPropagation: false
              }}
            >
              <Row>
                <Col sm="12">
                  <br />
                  <br />
                  <Card className="px-1">
                    <CardHeader className="email-detail-head ml-75">
                      <div className="user-details d-flex justify-content-between align-items-center flex-wrap">
                        <div className="avatar mr-75">
                          <img
                            src="https://storage.googleapis.com/mymember/All-Images/abf577f0-66ca-11eb-b349-7143bfd88acf-download.png"
                            alt="User Img"
                            height="61"
                            width="61"
                          />
                        </div>
                        <div className="mail-items">
                          <h4 className="mb-0">{currentMail.from}</h4>
                          <UncontrolledDropdown>
                            <DropdownToggle
                              tag="div"
                              className="font-small-3 cursor-pointer"
                            >
                              <span className="align-middle">
                                {currentMail.to}
                              </span>
                              <ChevronDown size={10} />
                            </DropdownToggle>
                            <DropdownMenu tag="ul" right className="p-50">
                              <DropdownItem tag="li" className="px-25">
                                From : <strong> {currentMail.from} </strong>
                              </DropdownItem>
                              <DropdownItem tag="li" className="px-25">
                                to :{" "}
                                <strong className="text-truncate">
                                  {" "}
                                  {currentMail.to}
                                </strong>
                              </DropdownItem>
                              <DropdownItem tag="li" className="px-25">
                                Date :{" "}
                                <strong className="text-truncate">
                                  {" "}
                                  {currentMail.sent_date}
                                </strong>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </div>
                      <div className="mail-meta-item">
                        <div className="mail-time mb-1">{currentMail.sent_time}</div>
                        <div className="mail-date mb-1">
                          {currentMail.sent_date}
                        </div>
                      </div>
                    </CardHeader>
                    <CardBody className="mail-message-wrapper pt-2 mb-0">
                      <div className="mail-message">
                        <p>{currentMail.template}</p>
                        <div className="mail-attachements d-flex">
                          <Paperclip size={22} />
                          <span className="ml-50">Attachements</span>
                        </div>
                      </div>
                    </CardBody>
                    {currentMail.attachments ? (
                      <React.Fragment>
                        <div className="mail-files py-2">
                          <div className="chip chip-primary">
                            <div className="chip-body py-50">
                              <span className="chip-text">
                                {currentMail.attachments}
                              </span>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    ) : (
                        ""
                      )}
                  </Card>
                </Col>
                <Col sm="12">
                  <Card>
                    <CardBody className="pt-2">
                      <div className="d-flex justify-content-between">
                        <span className="font-medium-1">
                          Click here to{" "}
                          <span className="primary cursor-pointer">
                            <strong>Reply</strong>
                          </span>{" "}
                      or{" "}
                          <span className="primary  cursor-pointer">
                            <strong>Forward</strong>
                          </span>
                        </span>
                        <Paperclip size={20} />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </PerfectScrollbar>
          </Fragment> :
          <Fragment>
            <div className="email-detail-header">
              <div className="email-header-left d-flex align-items-center mb-1">
                <ArrowLeft
                  size={20}
                  className="mr-1 cursor-pointer"
                  onClick={() => {
                    this.setState({isEditTemplate : !isEditTemplate })
                  }}
                />
                {/* {console.log(currentMail.subject)} */}
                <h4 className="mb-0">Edit Tamplate</h4>
              </div>
              </div>
              <EditorControlled
                editExisting={true}
                handleCancel={this.handleEditExisting}
                defaultTemplateData={currentMail}
                showTemplate={this.handleEditExisting} />
          </Fragment>
        }
        <SweetAlert title="Are you sure?"
              warning
              show={this.state.defaultAlert}
              showCancel
              reverseButtons
              cancelBtnBsStyle="danger"
              confirmBtnText="Yes, delete it!"
              cancelBtnText="Cancel"
              onConfirm={() => {
                this.handleAlert("confirmAlert")
              }}
              onCancel={() => {
                this.handleAlert("cancelAlert")
              }}
            >
              You won't be able to revert this!
        </SweetAlert>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
          allScheduleMails: state.EmailComposeMarketing.allScheduleMails,
  }
}
export default connect(mapStateToProps, { GET_SCHEDULE_MAILS, DELETE_SCHEDULE_MAIL})(EmailDetails)
