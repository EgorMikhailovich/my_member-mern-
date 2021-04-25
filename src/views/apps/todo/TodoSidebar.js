import React from "react"
import { Button, ListGroup, ListGroupItem } from "reactstrap"
import PerfectScrollbar from "react-perfect-scrollbar"
import { X, Layers, Star, Info, Check, Trash, CheckSquare, Clock, Calendar } from "react-feather"
import { connect } from "react-redux"
import { changeFilter } from "../../../redux/actions/todo/index"
class TodoSidebar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <span
          className="sidebar-close-icon"
          onClick={() => this.props.mainSidebar(false)}
        >
          <X size={15} />
        </span>
        <div className="todo-app-menu">
          <div className="add-task">
            <Button.Ripple
              block
              className="btn-block my-1"
              color="primary"
              onClick={() => {
                this.props.addTask("open")
                this.props.mainSidebar(false)
              }}
            >
              Add Task
            </Button.Ripple>
          </div>
          <PerfectScrollbar
            className="sidebar-menu-list"
            options={{
              wheelPropagation: false
            }}
          >
            <ListGroup className="font-medium-1">
              <ListGroupItem
                className="border-0 pt-0"
                action
                onClick={() => {
                  this.props.changeFilter("all")
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/all"
                    ? true
                    : false
                }
              >
                <Layers size={22} />
                <span className="align-middle ml-1">All</span>
              </ListGroupItem>
            </ListGroup>
            <hr />
            <h5 className="mt-2 mb-1 pt-25">Filters</h5>
            <ListGroup className="font-medium-1">
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  this.props.changeFilter("today")
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/today"
                    ? true
                    : false
                }
              >
                <CheckSquare size={22} />
                <span className="align-middle ml-1">Today</span>
              </ListGroupItem>
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  this.props.changeFilter("tomorrow")
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/tomorrow"
                    ? true
                    : false
                }
              >
                <Clock size={22} />
                <span className="align-middle ml-1">Tomorrow</span>
              </ListGroupItem>
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  this.props.changeFilter("upcoming")
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/upcoming"
                    ? true
                    : false
                }
              >
                <Calendar size={22} />
                <span className="align-middle ml-1">Upcoming</span>
              </ListGroupItem>
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  this.props.changeFilter("completed")
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/completed"
                    ? true
                    : false
                }
              >
                <Check size={22} />
                <span className="align-middle ml-1">Completed</span>
              </ListGroupItem>
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  this.props.changeFilter("notcompleted")
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/notcompleted"
                    ? true
                    : false
                }
              >
                <Trash size={22} />
                <span className="align-middle ml-1">Notcompleted</span>
              </ListGroupItem>
            </ListGroup>
            <hr />
            <h5 className="mt-2 mb-1 pt-25">Labels</h5>
            <ListGroup className="font-medium-1">
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  this.props.changeFilter("frontend")
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/frontend"
                    ? true
                    : false
                }
              >
                <span className="bullet bullet-primary align-middle" />
                <span className="align-middle ml-1">Events</span>
              </ListGroupItem>
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  this.props.changeFilter("backend")
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/backend"
                    ? true
                    : false
                }
              >
                <span className="bullet bullet-warning align-middle" />
                <span className="align-middle ml-1">Business</span>
              </ListGroupItem>
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  this.props.changeFilter("doc")
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/doc"
                    ? true
                    : false
                }
              >
                <span className="bullet bullet-success align-middle" />
                <span className="align-middle ml-1">Personal</span>
              </ListGroupItem>
              <ListGroupItem
                className="border-0"
                onClick={() => {
                  this.props.changeFilter("bug")
                }}
                active={
                  this.props.routerProps.location.pathname === "/todo/bug"
                    ? true
                    : false
                }
              >
                <span className="bullet bullet-danger align-middle" />
                <span className="align-middle ml-1">Appointment</span>
              </ListGroupItem>
            </ListGroup>
          </PerfectScrollbar>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(null, { changeFilter })(TodoSidebar)
