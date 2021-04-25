import React from "react";
import { connect } from 'react-redux';
import { X, Tag, Clock } from "react-feather"
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  Label,
  Button,
  Row,
  CustomInput
} from "reactstrap"
// import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import Flatpickr from "react-flatpickr";
import moment from "moment"

import "flatpickr/dist/themes/light.css";
import "../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"
import Timepickers from "../../../forms/form-elements/datepicker/Timepicker";
import "../../../../assets/scss/pages/users.scss"
import { ADD_CLASS_SCHEDULE, CLEAR_SCHEDULE_STATUS, UPDATE_CLASS_SCHEDULE, GET_PROGRAM_LIST } from '../../../../redux/actions/settings/schedule';


const eventColors = {
  business: "chip-success",
  work: "chip-warning",
  personal: "chip-danger",
  others: "chip-primary"
}

class AddEvent extends React.Component {
  // state = {
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   title: "",
  //   label: null,
  //   allDay: true,
  //   selectable: true
  // }

  state = {
    program_name: "",
    class_name: "",
    start_date: "",
    end_date: "",
    start_time: "",
    end_time: "",
    repeat_weekly_on: [],
  }

  // state = {
  //   program_name: "",
  //   class_name: "",
  //   start_date: this.props.eventInfo && this.props.eventInfo.start != null && new Date(this.props.eventInfo.start).format("DD/MM/YYYY"),
  //   end_date: "",
  //   start_time: "",
  //   end_time: "",
  //   repeat_weekly_on: [],
  //   program_list: [],
  // }
  // componentDidMount(){
  //    axios.get(`${process.env.REACT_APP_BASE_URL}/api/list_of_program/${localStorage.getItem("user_id")}`,
  //    {headers : 
  //     {"Authorization" : `Bearer ${localStorage.getItem("access_token")}`}}).then((res) => {
  //       console.log(res)
  //    })
  // }

  componentDidMount() {
    this.props.GET_PROGRAM_LIST()
  }

  changeHandler = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }

  checkboxHandler = (value) => {
    let copyState = this.state.repeat_weekly_on;
    let index = copyState.indexOf(value);
    if (index > -1) {
      copyState.splice(index, 1);
      this.setState({ ...this.state, repeat_weekly_on: [...copyState] })
    }
    else {
      this.setState({ ...this.state, repeat_weekly_on: [...copyState, value] });
    }
  }

  handleAddEvent = id => {
    const { ...rest } = this.state;
    // rest.start_date = rest.start_date[0].toLocaleDateString();

    // rest.end_date = rest.end_date[0].toLocaleDateString();
    rest.start_date = moment(rest.start_date).format('l')
    rest.end_date = moment(rest.end_date).format('l')

    this.props.ADD_CLASS_SCHEDULE(rest);

    this.setState({
      program_name: "",
      class_name: "",
      start_date: "",
      end_date: "",
      start_time: "",
      end_time: "",
      repeat_weekly_on: []
    })
    this.props.handleSidebar(false);
  }

  updateEvent = (id) => {
    const { ...rest } = this.state;

    rest.start_date = moment(rest.start_date).format('l')
    rest.end_date = moment(rest.end_date).format('l')

    this.props.UPDATE_CLASS_SCHEDULE(rest, id);

    this.setState({
      program_name: "",
      class_name: "",
      start_date: "",
      end_date: "",
      start_time: "",
      end_time: "",
      repeat_weekly_on: []
    })
    this.props.handleSidebar(false);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.eventInfo != null && nextProps.eventInfo.title.length <= 0) {
      this.setState({
        program_name: "",
        class_name: "",
        start_date: moment(nextProps.eventInfo.start).format("YYYY-MM-DD"),
        end_date: moment(nextProps.eventInfo.end).format("YYYY-MM-DD"),
        start_time: moment(nextProps.eventInfo.start).format('LT'),
        end_time: moment(nextProps.eventInfo.end).format('LT'),
        repeat_weekly_on: []
      })
    } else {
      this.setState({
        program_name: nextProps.event === null ? "" : nextProps.event.program_name,
        class_name: nextProps.event === null ? "" : nextProps.event.class_name,
        repeat_weekly_on: nextProps.event === null ? "" : nextProps.event.repeat_weekly_on,
        start_date: nextProps.event === null ? "" : moment(nextProps.event.start_date).format("YYYY-MM-DD"),
        end_date: nextProps.event === null ? "" : moment(nextProps.event.end_date).format("YYYY-MM-DD"),
        start_time: nextProps.event === null ? "" : nextProps.event.start_time,
        end_time: nextProps.event === null ? "" : nextProps.event.end_time

      })
    }

    // this.setState({
    //   title: nextProps.eventInfo === null ? "" : nextProps.eventInfo.title,
    //   url: nextProps.eventInfo === null ? "" : nextProps.eventInfo.url,
    //   startDate:
    //     nextProps.eventInfo === null
    //       ? new Date()
    //       : new Date(nextProps.eventInfo.start),
    //   endDate:
    //     nextProps.eventInfo === null
    //       ? new Date()
    //       : new Date(nextProps.eventInfo.end),
    //   label: nextProps.eventInfo === null ? null : nextProps.eventInfo.label,
    //   allDay: nextProps.eventInfo === null ? true : nextProps.eventInfo.allDay,
    //   selectable:
    //     nextProps.eventInfo === null ? true : nextProps.eventInfo.selectable
    // })
  }

  onCancel = () => { this.props.CLEAR_SCHEDULE_STATUS() };


  render() {
    // let events = this.props.events.map(i => i.id)
    // let lastId = events.pop()
    // let newEventId = lastId + 1
    return (
      <>
        {this.props.status && <SweetAlert
          success
          title={"Success"}
          // onConfirm={this.onConfirm} 
          onCancel={this.onCancel}
          customButtons={
            <React.Fragment>
              <Button.Ripple color="primary" onClick={this.onCancel}>Okay</Button.Ripple>
            </React.Fragment>
          }
        >
          {this.props.message}
        </SweetAlert>}

        <div
          className={`add-event-sidebar ${
            this.props.sidebar ? "show" : "hidden"
            }`}
        >
          <div className="header d-flex justify-content-between">
            <h3 className="text-bold-600 mb-0">
              {this.props.eventInfo !== null &&
                this.props.eventInfo.title.length > 0
                ? "Update Event"
                : "Add Event"}
            </h3>
            <div
              className="close-icon cursor-pointer"
              onClick={() => this.props.handleSidebar(false)}
            >
              <X size={20} />
            </div>
          </div>
          <div className="add-event-body">
            <div className="category-action d-flex justify-content-between my-50">
              <div className="event-category">
                {this.state ?.label !== null ? (
                  <div className={`chip ${eventColors[this.state ?.label]}`}>
                    <div className="chip-body">
                      <div className="chip-text text-capitalize">
                        {this.state ?.label}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="category-dropdown">
                <UncontrolledDropdown>
                  <DropdownToggle tag="div" className="cursor-pointer">
                    <Tag size={18} />
                  </DropdownToggle>
                  <DropdownMenu tag="ul" right>
                    <DropdownItem
                      tag="li"
                    // onClick={() => this.handleLabelChange("business")}
                    >
                      <span className="bullet bullet-success bullet-sm mr-50"></span>
                      <span>Business</span>
                    </DropdownItem>
                    <DropdownItem
                      tag="li"
                    // onClick={() => this.handleLabelChange("work")}
                    >
                      <span className="bullet bullet-warning bullet-sm mr-50"></span>
                      <span>Work</span>
                    </DropdownItem>
                    <DropdownItem
                      tag="li"
                    // onClick={() => this.handleLabelChange("personal")}
                    >
                      <span className="bullet bullet-danger bullet-sm mr-50"></span>
                      <span>Personal</span>
                    </DropdownItem>
                    <DropdownItem
                      tag="li"
                    // onClick={() => this.handleLabelChange("others")}
                    >
                      <span className="bullet bullet-primary bullet-sm mr-50"></span>
                      <span>Others</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
            <div className="add-event-fields mt-2">
              {this.props.eventInfo != null && this.props.eventInfo.title.length > 0 ?
                <FormGroup>
                  <Label>Program Name </Label>
                  <Input
                    type="text"
                    id="ProgramName"
                    placeholder="Program Name"
                    name="program_name"
                    value={this.state.program_name}
                    onChange={this.changeHandler}
                  />
                </FormGroup>
                :
                <FormGroup>
                  <Label> Program Name</Label>
                  <CustomInput type="select" name="program_name" onChange={this.changeHandler} value={this.state.program_name} id="ProgramName">
                    <option>-- Select Program -- </option>
                    {this.props.program.map((value, index) => {
                      return (<option key={index} value={`${value.programName}`} >{value.programName}</option>)
                    })}
                  </CustomInput>
                </FormGroup>
              }
              {/* <FormGroup className="form-label-group">
                <Input
                  type="text"
                  id="ProgramName"
                  placeholder="Program Name"
                  name="program_name"
                  value={this.state.program_name}
                  onChange={this.changeHandler}
                />
                <Label for="ProgramName">Program Name</Label>
              </FormGroup> */}
              <FormGroup className="form-label-group">
                <Input
                  type="text"
                  id="ClassName"
                  placeholder="Class Name"
                  name="class_name"
                  value={this.state.class_name}
                  onChange={this.changeHandler}
                />
                <Label for="ClassName">Class Name</Label>
              </FormGroup>
              <FormGroup>
                <Label for="startDate">Start Date</Label>
                <input id="startDate" type="date" value={this.state.start_date} onChange={this.changeHandler} name="start_date" className="form-control" />

                {/* <Flatpickr
                  id="startDate"
                  className="form-control"
                  name="start_date"
                  value={this.state.start_date}
                  onChange={date => {
                    this.setState({ ...this.state, start_date: date })
                  }}
                  // dateFormat: "Y-m-d",
                  options={{ altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d", }}
                /> */}
              </FormGroup>
              <FormGroup>
                <Label for="endDate">End Date </Label>

                <input id="endDate" type="date" value={this.state.end_date} onChange={this.changeHandler} name="end_date" className="form-control" />

                {/* <Flatpickr
                  id="endDate"
                  className="form-control"
                  name="end_date"
                  value={this.state.end_date}
                  onChange={date => {
                    this.setState({ ...this.state, end_date: date })
                  }}
                  options={{ altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d", }}
                /> */}
              </FormGroup>
              <FormGroup>
                <Label for="endDate">start</Label>
                <input type="time"
                  id="start"
                  className="form-control"
                  name="start_time"
                  value={this.state.start_time}
                  onChange={this.changeHandler}
                  options={{ altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d", }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="endDate">End</Label>
                <input type="time"
                  id="end"
                  className="form-control"
                  name="end_time"
                  value={this.state.end_time}
                  onChange={this.changeHandler}
                  options={{ altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d", }}
                />
              </FormGroup>
              <FormGroup>
                <Row>
                  <div className="col-md-6 co-sm-12 col-xs-12">
                    <label> Repeat weekly on:</label>
                  </div>
                  <div className="col-md-6 co-sm-12 col-xs-12">
                    <div className="col-md-12 co-sm-12 col-xs-12">
                      <input type="checkbox"
                        id="periph1"
                        name="peripherals"
                        value="screen"
                        checked={this.state.repeat_weekly_on.includes("monday")}
                        onChange={() => this.checkboxHandler("monday")}
                      />
                      <label for="periph1">Monday</label>
                    </div>
                    <div className="col-md-12 co-sm-12 col-xs-12">
                      <input type="checkbox"
                        id="periph2"
                        name="peripherals"
                        value="screen"
                        checked={this.state.repeat_weekly_on.includes("tuesday")}
                        onChange={() => this.checkboxHandler("tuesday")}
                      />
                      <label for="periph1">Tuesday</label>
                    </div>
                    <div className="col-md-12 co-sm-12 col-xs-12">
                      <input type="checkbox"
                        id="periph3"
                        name="peripherals"
                        value="screen"
                        checked={this.state.repeat_weekly_on.includes("wednesday")}
                        onChange={() => this.checkboxHandler("wednesday")}
                      />
                      <label for="periph1">Wednesday</label>
                    </div>
                    <div className="col-md-12 co-sm-12 col-xs-12">
                      <input type="checkbox"
                        id="periph4"
                        name="peripherals"
                        value="screen"
                        checked={this.state.repeat_weekly_on.includes("thursday")}
                        onChange={() => this.checkboxHandler("thursday")}
                      />
                      <label for="periph1">Thursday</label>
                    </div>
                    <div className="col-md-12 co-sm-12 col-xs-12">
                      <input type="checkbox"
                        id="periph5"
                        name="peripherals"
                        value="screen"
                        checked={this.state.repeat_weekly_on.includes("friday")}
                        onChange={() => this.checkboxHandler("friday")}
                      />
                      <label for="periph1">Friday</label>
                    </div>
                    <div className="col-md-12 co-sm-12 col-xs-12">
                      <input type="checkbox"
                        id="periph6"
                        name="peripherals"
                        value="screen"
                        checked={this.state.repeat_weekly_on.includes("saturday")}
                        onChange={() => this.checkboxHandler("saturday")}
                      />
                      <label for="periph1">Saturday</label>
                    </div>
                    <div className="col-md-12 co-sm-12 col-xs-12">
                      <input type="checkbox"
                        id="periph7"
                        name="peripherals"
                        value="screen"
                        checked={this.state.repeat_weekly_on.includes("sunday")}
                        onChange={() => this.checkboxHandler("sunday")}
                      />
                      <label for="periph1">Sunday</label>
                    </div>
                  </div>
                </Row>
              </FormGroup>
            </div>
            <hr className="my-2" />
            <div className="add-event-actions text-right">
              <Button.Ripple
                // disabled={this.state.title.length > 0 ? false : true}
                color="primary"
                onClick={() => {
                  // this.props.handleSidebar(false)
                  if (
                    this.props.eventInfo === null ||
                    this.props.eventInfo.title.length <= 0
                  )
                    this.handleAddEvent()
                  else
                    this.updateEvent(this.props.event._id)
                }}
              >
                {this.props.eventInfo !== null &&
                  this.props.eventInfo.title.length > 0
                  ? "Update Event"
                  : "Add Event"}
              </Button.Ripple>
              <Button.Ripple
                className="ml-1"
                color="flat-danger"
                onClick={() => {
                  this.props.handleSidebar(false)
                }}
              >
                Cancel
            </Button.Ripple>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.setting.class_schedule.status,
    message: state.setting.class_schedule.msg,
    program: state.setting.programList
  }
}
export default connect(mapStateToProps, { ADD_CLASS_SCHEDULE, CLEAR_SCHEDULE_STATUS, UPDATE_CLASS_SCHEDULE, GET_PROGRAM_LIST })(AddEvent)
