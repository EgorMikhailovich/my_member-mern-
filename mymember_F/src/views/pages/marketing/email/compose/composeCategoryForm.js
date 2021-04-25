import React from "react"
import {
  Card,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label
} from "reactstrap"
import { connect } from "react-redux"
import Moment from 'moment';
import Flatpickr from "react-flatpickr";
import {
  GET_CATEGORIES,
  ADD_TEMPLATE_TO_COMPOSE,
  EDIT_SUB_EMAIL_COMPOSE,
  EDIT_MAIN_EMAIL_COMPOSE,
  ADD_NEW_EMAIL_COMPOSE,
  ADD_NEW_SUB_EMAIL_COMPOSE
} from "../../../../../redux/actions/compose"

import "flatpickr/dist/themes/light.css";
import "../../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"
class FloatingLabels extends React.Component {
  state = {
    categoryName: "",
    subFolderData: [],
    selectedSubFolder: "",
    timeSelect: ''
  }

  componentDidMount() {
    this.props.GET_CATEGORIES();
  }

  handleSendDateChange = e => {
    console.log(e.target.value);
    this.setState({
      SendDate: Moment(e.target.value).format('DD/MM/YYYY')
    })
  }
  handleTimeChange = date => {
    this.setState({
      timeSelect: date
    })
  }
  changeHandler = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }
  SelectSubFolder = e => {
    this.setState({ ...this.state, selectedSubFolder: e.target.value });
  }
  SelectMainFolder = e => {
    this.setState({ subFolderData: this.props.categories[e.target.value] });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.categories !== this.props.categories) {
      this.setState({
        rowData: this.props.categories,
        loading: false,
        subFolderData: this.props.categories[0]
      })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { ...rest } = this.state;
    if (this.props.isEditMainFolder) {
      this.props.EDIT_MAIN_EMAIL_COMPOSE({ ...rest }, this.props.mainFolder);
      this.props.handleClose()
    } else if (this.props.isEditSubFolder) {
      this.props.EDIT_SUB_EMAIL_COMPOSE({ folderName: this.state.categoryName }, this.props.subFolder);
      this.props.handleClose()
    } else if (this.state.categoryName != "" && !this.props.isSaveCompose) {
      if (this.props.isSubFolder) {
        this.props.ADD_NEW_SUB_EMAIL_COMPOSE({ folderName: this.state.categoryName }, this.props.mainFolder);
        this.props.handleClose()
      } else {
        this.props.ADD_NEW_EMAIL_COMPOSE({ ...rest });
        this.props.handleClose()
      }
    }else if (this.props.isSaveCompose) {
      let paylaod = {
        to: this.props.dataToSave.to,
        from: this.props.dataToSave.from,
        title: this.props.dataToSave.title,
        subject: this.props.dataToSave.subject,
        template: this.props.template,
        repeat_mail: "every month",
        // sent_time: this.state.timeSelect,
        sent_date: this.state.SendDate,

      }
      if(!this.state.selectedSubFolder!=undefined){
        this.props.ADD_TEMPLATE_TO_COMPOSE(paylaod, this.state.selectedSubFolder)
        this.props.handleClose()
      }else{
        alert("somthing went wrong! ")
      }
     
    }else if(this.props.editExisting){
      let paylaod = {
        to: this.props.dataToSave.to,
        from: this.props.dataToSave.from,
        title: this.props.dataToSave.title,
        subject: this.props.dataToSave.subject,
        template: this.props.template,
        repeat_mail: "every month",
        sent_time: this.state.timeSelect,
        sent_date: this.state.SendDate,

      }
      if(!this.state.selectedSubFolder!=undefined){
        console.log(paylaod, this.state.selectedSubFolder);
        this.props.ADD_TEMPLATE_TO_COMPOSE(paylaod, this.state.selectedSubFolder)
        this.props.handleClose()
      }
    }
    this.props.showTemplate()
  }
  render() {
    const { rowData, subFolderData } = this.state
    // const {defaultTemplateData,editExisting} = this.props
    return (
      <Card>
        <CardBody>
          <Form className="mt-10" onSubmit={this.handleSubmit} >
            <Row>
              <Col sm="12">
                {!this.props.isSaveCompose ? <FormGroup className="form-label-group">
                  <Input
                    defaultValue={this.state.categoryName}
                    onChange={this.changeHandler}
                    type="text"
                    name="categoryName"
                    id="nameFloating"
                    placeholder="Folder Name"
                  />
                  <Label for="nameFloating">{"Add Folder Name"}</Label>
                </FormGroup> : <FormGroup className="form-label-group">
                    <div className="d-flex justify-content-between">
                      <div style={{ width: "48%" }}>
                        Select main folder
                        <Input
                          defaultValue={this.state.categoryName}
                          onChange={this.SelectMainFolder}
                          type="select"
                          name="selectedFolder"
                          id="mainfolder"
                        >
                          {rowData?.map((collapseItem, id) => {
                            return (
                              <option key={id} value={id}>{collapseItem.categoryName}</option>
                            )
                          })}
                        </Input>
                      </div>
                      <div style={{ width: "48%" }}>
                        Select subfolder
                        <Input
                          defaultValue={this.state.selectedSubFolder}
                          type="select"
                          onChange={this.SelectSubFolder}
                          name="selectedSubFolder"
                          id="subfolder"
                        >
                          <option
                            value={""}>Not Seleced </option>
                          {subFolderData.folder?.map((subfolder, id) => {
                            return (
                              <option
                                key={id} value={subfolder._id}>{subfolder.folderName}</option>
                            )
                          })}
                        </Input>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div style={{ width: "98%" }}>
                        <FormGroup>
                          <Label for="SendDate">Date</Label>
                          <Input
                          id="SendDate"
                          defaultValue={
                            this.state.SendDate}
                          
                          onChange={this.handleSendDateChange}
                          type="date"
                          name="SendDate"
                        ></Input>
                        </FormGroup>
                      </div>
                      {/* <div style={{ width: "48%" }}>
                        <FormGroup>
                          <Label for="selecttime">Select Time</Label>
                          <Flatpickr
                            id="selecttime"
                            className="form-control"
                            value={this.state.timeSelect}
                            onChange={date => this.handleTimeChange(date)}
                            options={
                              {
                                enableTime: true,
                                noCalendar: true,
                                dateFormat: "H:i",
                                defaultDate: "13:45"
                              }}
                          />
                        </FormGroup>
                      </div> */}
                    </div>


                  </FormGroup>}
              </Col>

              <Col sm="12">
                <FormGroup className="form-label-group">
                  <Button.Ripple
                    style={{ border: "1px solid #d9d9d9", color: "#d9d9d9" }}
                    onClick={this.props.handleClose}
                    className="mr-1 mb-1"
                  >
                    Cancel
                  </Button.Ripple>

                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                  {!this.props.editExisting ? 'Save':'Update'}
                  </Button.Ripple>

                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
const mapStateToProps = state => {
  return {
    categories: state.EmailComposeMarketing.categories
  }
}
export default connect(mapStateToProps, {
  GET_CATEGORIES,
  EDIT_SUB_EMAIL_COMPOSE,
  EDIT_MAIN_EMAIL_COMPOSE,
  ADD_NEW_EMAIL_COMPOSE,
  ADD_NEW_SUB_EMAIL_COMPOSE,
  ADD_TEMPLATE_TO_COMPOSE
})(FloatingLabels)

