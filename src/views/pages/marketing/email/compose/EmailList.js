import React from "react"
import {
  FormGroup,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Media
} from "reactstrap";
import {
  Search,
  Check,
  Folder,
  Edit2,
  Info,
  Trash,
  Tag,
  Mail,
  Star,
  Menu
} from "react-feather";

import PerfectScrollbar from "react-perfect-scrollbar"
import { connect } from "react-redux"
import {

  StarEmail,
  searchMail,
  selectMail,
  selectMailStatus,
  deselectMailStatus,
  selectAllMails,
  deselectAllMails,
  unreadMails,
  setLabel
} from "../../../../../redux/actions/email/index";
import { moveMail } from "../../../../../redux/actions/mymoney/index"
import { GET_SCHEDULE_MAILS ,DESELECT_MAIL_STATUS,SELECT_MAIL_STATUS,SELECT_MAIL_STATUS_ALL} from "../../../../../redux/actions/compose"
import Checkbox from "../../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import RadioVuexy from  "../../../../../components/@vuexy/radio/RadioVuexy";
import EmailDetails from "./EmailDetails"
import { Fragment } from "react";

class EmailList extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.email.params !== state.currentFilter) {
      return {
        mails: props.email.mails
      }
    }
    return null
  }
  state = {
    mails: [],
    emailDetailsVisibility: false,
    selectAll: false,
    currentEmail: [],
    value: "",
    currentFilter: this.props.routerProps.match.params.filter,
    statusActive:""
  }

  async componentDidMount() {
    this.setState({
      mails: this.props.allScheduleMails.template,
      mailsfolder:this.props.allScheduleMails.template
    })
  }

  handleEmailDetails = (status, mail) => {
    if (status === "open")
      this.setState({ emailDetailsVisibility: true, currentEmail: mail })
    else this.setState({ emailDetailsVisibility: false })
  }

  handleNextMail = () => {
    let mails = this.state.mails
    if (mails.length) {
      let getIndex = mails.find(i => i.id === this.state.currentEmail.id)
      let currentEmail = mails[mails.indexOf(getIndex) + 1]

      if (currentEmail !== undefined) {
        this.setState({ currentEmail })
      }
    }
  }

  handlePreviousMail = () => {
    let mails = this.state.mails
    if (mails.length) {
      let getIndex = mails.find(i => i.id === this.state.currentEmail.id)
      let currentEmail = mails[mails.indexOf(getIndex) - 1]

      if (currentEmail !== undefined) {
        this.setState({ currentEmail })
      }
    }
  }

  handleOnChange = e => {
    this.setState({ value: e.target.value })
    this.props.searchMail(e.target.value)
  }

  render() {
    const { mails, currentFilter, value } = this.state
    const mailsArr = this.props.allScheduleMails.template ? this.props.allScheduleMails.template : mails
    const renderMails =
      mailsArr.length > 0 ? (
        mailsArr.map((mail, i) => {
          return (
            <Media
              tag="li"
              key={'id'+i}
              className={mail.unread === false ? "mail-read" : "mail-unread"}
              onClick={() => {
                this.handleEmailDetails("open", mail)
              }}
            >
              <Media className="pr-50" tag="div" left>
                <div className="user-action">
                  <Checkbox
                    color="primary"
                    className="user-checkbox"
                    icon={<Check className="vx-icon" size={12} />}
                    label={""}
                    checked={this.props.email.selectedEmails.includes(mail._id)}
                    size="sm"
                    onClick={e => {
                      this.props.selectMail(mail._id)
                      e.stopPropagation()
                    }}
                    onChange={e => e.stopPropagation()}
                  />                 
                  {/* <div className="favorite">
                    <Star
                      size={18}
                      fill={mail.isStarred ? "#FF9F43" : "transparent"}
                      stroke={mail.isStarred ? "#FF9F43" : "#626262"}
                      onClick={e => {
                        this.props.StarEmail(mail._id)
                        e.stopPropagation()
                      }}
                    />

                  </div> */}

                </div>
              </Media>
              <Media body>
                <div className="user-details flex-wrap-row">
                  <div className="mail-items">
                    <h5 className="text-bold-600 mb-25 ">{mail.title}</h5>
                    <span className="text-truncate">{mail.subject}</span>
                  </div>
                  <div>
                    <span className="text-truncate">
                      <h5 className="text-bold-600 mb-25 ">Template</h5>
                      {mail.email_type}
                    </span>
                  </div>
                  <div className="mail-items">
                    <span className="float-right">
                    <h5 className="text-bold-600 mb-25 ">Active/Deactive</h5> <span className="mail-date">
                       <Checkbox
                    color="primary"
                    className="user-checkbox"
                    icon={ <Check className="vx-icon" size={12}/>}
                    label={""}
                    checked={ mail.email_status ? "checked":""}
                    size="sm"
                    onClick={e => e.stopPropagation()}
                    onChange={ e=> e.target.checked
                      ?   this.props.SELECT_MAIL_STATUS(mail._id)
                      : this.props.DESELECT_MAIL_STATUS(mail._id)
                    }
                  />
                      </span>
                    </span>
                  </div>
                  <div className="mail-items">
                    <span className="float-right">
                      <p className="mail-date">{mail.sent_date} </p>
                      <span className="mail-date">{mail.sent_time} </span>
                    </span>
                  </div>
                </div>
              
              </Media>
            </Media>
          )
        }))
        : (
          <div className="no-results show">
            <h5>No Items Found</h5>
          </div>
        )

    return (
      <Fragment>
        <div className="email-app-list-wrapper">
          <div className="email-app-list">
            <div className="app-fixed-search">
              <div
                className="d-lg-none sidebar-toggle"
                onClick={() => this.props.mainSidebar(true)}
              >
                <Menu size={24} />
              </div>
              <FormGroup className="position-relative has-icon-left m-0 d-inline-block d-lg-block">
                <Input
                  placeholder="Search Emails"
                  onChange={e => {
                    this.handleOnChange(e)
                  }}
                  value={value}
                />
                <div className="form-control-position">
                  <Search size={15} />
                </div>
              </FormGroup>
            </div>
            <div className="app-action">
              <div className="action-left">
               
                <Checkbox
                  color="primary"
                  icon={<Check className="vx-icon" size={16} />}
                  label="Select All"
                  checked={
                    this.props.email.selectedEmails.length ? true : false
                  }
                  onChange={e => e.stopPropagation()}
                  onClick={e => {
                    e.target.checked
                      ? this.props.selectAllMails()
                      : this.props.deselectAllMails()
                  }}
                />
              </div>
              <div className="action-right">
                <ul className="list-inline m-0">
                <li className="list-inline-item">
                <Checkbox
                  color="primary"
                  icon={<Check className="vx-icon" size={16} />}
                  label="Deactive/Active"
                  checked={
                    this.state.statusActive  ? true:false
                  }
                  onClick={()=>this.props.SELECT_MAIL_STATUS_ALL(this.props.allScheduleMails._id,this.state.statusActive)}
                  onChange={()=>this.setState({statusActive:!this.state.statusActive})}
                />
                 
                  </li>
                  <li className="list-inline-item">
                    <UncontrolledDropdown>
                                 
                      <DropdownToggle tag="div">
                        <Folder size={22} />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          onClick={() => {
                            if (currentFilter === "inbox")
                              this.props.moveMail("draft")
                            else this.props.moveMail("inbox")
                          }}
                        >
                          <Edit2 size={18} className="mr-50" />
                          <span className="align-middle font-medium-1">
                            {currentFilter === "inbox" ? "Draft" : "Inbox"}
                          </span>
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => {
                            this.props.moveMail("spam")
                          }}
                        >
                          <Info size={18} className="mr-50" />
                          <span className="align-middle font-medium-1">
                            Spam
                            </span>
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => {
                            this.props.moveMail()
                          }}
                        >
                          <Trash size={18} className="mr-50" />
                          <span className="align-middle font-medium-1">
                            Trash
                            </span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                  <li className="list-inline-item">
                    <UncontrolledDropdown>
                      <DropdownToggle tag="div">
                        <Tag size={22} />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          className="font-medium-1"
                          onClick={() => this.props.setLabel("personal")}
                        >
                          <span className="bullet bullet-success bullet-sm mr-1" />
                          <span className="align-middle">Personal</span>
                        </DropdownItem>
                        <DropdownItem
                          className="font-medium-1"
                          onClick={() => this.props.setLabel("company")}
                        >
                          <span className="bullet bullet-primary bullet-sm mr-1" />
                          <span className="align-middle">Company</span>
                        </DropdownItem>
                        <DropdownItem
                          className="font-medium-1"
                          onClick={() => this.props.setLabel("important")}
                        >
                          <span className="bullet bullet-warning bullet-sm mr-1" />
                          <span className="align-middle">Important</span>
                        </DropdownItem>
                        <DropdownItem
                          className="font-medium-1"
                          onClick={() => this.props.setLabel("private")}
                        >
                          <span className="bullet bullet-danger bullet-sm mr-1" />
                          <span className="align-middle">Private</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                  <li
                    className="list-inline-item mail-unread"
                    onClick={() => this.props.unreadMails(true)}
                  >
                    <span className="action-icon">
                      <Mail size={22} />
                    </span>
                  </li>
                  <li
                    className="list-inline-item mail-delete"
                    onClick={() => {
                      this.props.moveMail("trash")
                    }}
                  >
                    <span className="action-icon">
                      <Trash size={22} />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <PerfectScrollbar
              className="email-user-list list-group"
              options={{
                wheelPropagation: false
              }}
            >
              <ul className="users-list-wrapper media-list">{renderMails}</ul>
            </PerfectScrollbar>
          </div>
        </div>
        <EmailDetails
          handleEmailDetails={this.handleEmailDetails}
          currentStatus={this.state.emailDetailsVisibility}
          currentEmail={this.state.currentEmail}
          toggleStarred={this.props.StarEmail}
          setLabel={this.props.setLabel}
          unreadMails={this.props.unreadMails}
          currentParam={this.props.routerProps.match.params}
          moveMail={this.props.moveMail}
          handleNextMail={this.handleNextMail}
          handlePreviousMail={this.handlePreviousMail}
        />
      </Fragment>


    )
  }
}
const mapStateToProps = state => {
  return {
    email: state.emailApp.mails,
    starred: state.emailApp.starred,
    allEmailList: state.mymoney.allEmailList,
    allScheduleMails: state.EmailComposeMarketing.allScheduleMails
  }
}
export default connect(mapStateToProps, {
  GET_SCHEDULE_MAILS,
  DESELECT_MAIL_STATUS,
  SELECT_MAIL_STATUS,
  SELECT_MAIL_STATUS_ALL,
  StarEmail,
  searchMail,
  moveMail,
  selectMail,
  selectMailStatus,
  deselectMailStatus,
  selectAllMails,
  deselectAllMails,
  unreadMails,
  setLabel
})(EmailList)
