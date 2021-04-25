import React from "react"
import {
  Input,
  Button,
  FormGroup
} from "reactstrap"
import { X, Info, Star, Tag, Check } from "react-feather"
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import PerfectScrollbar from "react-perfect-scrollbar"
import { connect } from "react-redux"
import {
  starTask,
  completeTask,
  importantTask,
  updateTask,
  updateLabel,
  addNewTask,
  ADD_NEW_TASK
} from "../../../redux/actions/todo/index"
import "../../../assets/scss/pages/users.scss"

class TaskSidebar extends React.Component {

  state = {
    // taskToUpdate: null,
    // taskTitle: "",
    // taskDesc: "",
    // taskStatus : false,
    // taskStarred : false,
    // taskImportant  : false,
        
    Task: {
        notes: "",
        status: "",
        subject: "",
        tag: "",
        todoDate: "",
        todoTime: "",
      // title: "",
      // desc: "",
      // tags: [],
      // isCompleted: false,
      // isImportant: false,
      // isStarred: false

    }
  }
   


  componentDidUpdate(prevProps, prevState) {
  //   // if(
  //   //   (this.props.taskToUpdate !== null && this.state.taskToUpdate !== this.props.taskToUpdate) || 
  //   //   (this.props.taskToUpdate !== null && this.state.taskStatus !== this.props.taskToUpdate.isCompleted) ||
  //   //   (this.props.taskToUpdate !== null && this.state.taskStarred !== this.props.taskToUpdate.isStarred) ||
  //   //   (this.props.taskToUpdate !== null && this.state.taskImportant !== this.props.taskToUpdate.isImportant) 
  //   //   ){
  //   //   this.setState({ 
  //   //     taskToUpdate : this.props.taskToUpdate, 
  //   //     taskTitle :  this.props.taskToUpdate.title,
  //   //     taskDesc :  this.props.taskToUpdate.desc,
  //   //     taskStatus : this.props.taskToUpdate.isCompleted,
  //   //     taskStarred : this.props.taskToUpdate.isStarred,
  //   //     taskImportant : this.props.taskToUpdate.isImportant
  //   //   })
  //   // }
  //   // else{
  //   //   return 
  //   // }

   if(!!this.props.taskToUpdate && prevProps.taskToUpdate !== this.props.taskToUpdate){
       let {_id, ...todo} = this.props.taskToUpdate;
       this.setState({Task : { ...this.state.Task, ...todo}});
     }
    
  }
  


  handleNewTaskTags = tag => {
    let tagsArr = this.state.newTask.tags
    if (tagsArr.includes(tag)) {
      tagsArr.splice(tagsArr.indexOf(tag), 1)
    } else {
      tagsArr.push(tag)
    }
    this.setState({
      ...this.state.newTask,
      tags: tag
    })
  }

  renderTags = taskArr => {
    return taskArr.map((tag, i) => (
      <div className="chip mb-0 mr-50" key={i}>
        <div className="chip-body">
          <span className="chip-text">
            <span
              className={`bullet bullet-${
                tag === "backend"
                  ? "warning"
                  : tag === "doc"
                  ? "success"
                  : tag === "bug"
                  ? "danger"
                  : "primary"
              } bullet-xs`}
            />
            <span className="text-capitalize ml-25">{tag}</span>
          </span>
        </div>
      </div>
    ))
  }

  render() {
    const { Task } = this.state

    return (
      <div
        className={`task-sidebar ${
          this.props.addTaskState === true ? "show" : ""
        }`}
      >
        <div className="task-header">
          <div className="d-flex justify-content-between">
            <div className="task-type-title text-bold-600">
              <h3>
                {this.props.taskToUpdate && this.props.taskToUpdate._id
                  ? "Update Task"
                  : "Add Task"}
              </h3>
            </div>
            <div className="close-icon">
              <X
                className="cursor-pointer"
                size={20}
                onClick={() => {
                  this.setState({
                    Task: {
                      notes: "",
                      status: "",
                      subject: "",
                      tag: "",
                      todoDate: "",
                      todoTime: "",
                    }
                  })
                  this.props.addTask("close")}}
              />
            </div>
          </div>
        </div>
        <PerfectScrollbar>
          <div className="task-body">
            {/* <div className="d-flex justify-content-between mb-2">
              <div className="mark-complete">
                {this.props.taskToUpdate && this.props.taskToUpdate.id && <Checkbox
                  color="primary"
                  className="user-checkbox"
                  icon={<Check className="vx-icon" size={15} />}
                  label={""}
                  checked={ false }                  
                  onChange={e =>  {
                    // this.props.completeTask(this.props.taskToUpdate)
                  }}
                />}
              </div>
              <div className="task-actions">
                <Info
                  size={20}
                  className={`mr-50 ${
                      (this.props.taskToUpdate !== null && this.state.taskImportant) ||
                      Task.isImportant 
                      ? "text-success"
                      : ""
                  }`}
                  onClick={() => {
                    if (this.props.taskToUpdate !== null){
                      this.props.importantTask(this.props.taskToUpdate)
                    }
                    else{
                      this.setState({
                        newTask : {
                          ...this.state.newTask,
                          isImportant : !this.state.newTask.isImportant
                        }
                      })
                    }
                      
                  }}
                />
                <Star
                  size={20}
                  className={`mr-50 ${
                      (this.props.taskToUpdate !== null  && this.state.taskStarred) ||
                      newTask.isStarred 
                      ? "text-warning"
                      : ""
                  }`}
                  onClick={() => {
                    if (this.props.taskToUpdate !== null){
                      this.props.starTask(this.props.taskToUpdate)
                    }
                    else{
                      this.setState({
                        newTask : {
                          ...this.state.newTask,
                          isStarred : !this.state.newTask.isStarred
                        }
                      })
                    }
                    
                  }}
                />
                <UncontrolledDropdown className="d-inline-block">
                  <DropdownToggle tag="span">
                    <Tag className="mr-50" size={20} />
                  </DropdownToggle>
                  <DropdownMenu tag="ul" right>
                    <DropdownItem tag="li">
                      <Checkbox
                        color="primary"
                        className="user-checkbox"
                        icon={<Check className="vx-icon" size={12} />}
                        label={"Events"}
                        checked={
                            (this.props.taskToUpdate !== null &&
                            this.props.taskToUpdate.tags.includes("frontend") )||
                            (newTask.tags.includes("frontend"))
                            ? true
                            : false
                        }
                        size="sm"
                        onChange={e => {
                          e.stopPropagation()
                          if (this.props.taskToUpdate !== null)
                            this.props.updateLabel(taskToUpdate.id, "frontend")
                          else this.handleNewTaskTags("frontend")
                        }}
                      />
                    </DropdownItem>
                    <DropdownItem tag="li">
                      <Checkbox
                        color="primary"
                        className="user-checkbox"
                        icon={<Check className="vx-icon" size={12} />}
                        label={"Business"}
                        checked={
                            (this.props.taskToUpdate !== null &&
                            this.props.taskToUpdate.tags.includes("backend"))||
                            (newTask.tags.includes("backend"))
                            ? true
                            : false
                        }
                        size="sm"
                        onClick={e => e.stopPropagation()}
                        onChange={e => {
                          e.stopPropagation()
                          if (this.props.taskToUpdate !== null)
                            this.props.updateLabel(taskToUpdate.id, "backend")
                            else this.handleNewTaskTags("backend")
                        }}
                      />
                    </DropdownItem>
                    <DropdownItem tag="li">
                      <Checkbox
                        color="primary"
                        className="user-checkbox"
                        icon={<Check className="vx-icon" size={12} />}
                        label={"Personal"}
                        checked={
                            (this.props.taskToUpdate !== null &&
                            this.props.taskToUpdate.tags.includes("doc"))||
                            (newTask.tags.includes("doc"))
                            ? true
                            : false
                        }
                        size="sm"
                        onClick={e => e.stopPropagation()}
                        onChange={e => {
                          e.stopPropagation()
                          if (this.props.taskToUpdate !== null)
                            this.props.updateLabel(taskToUpdate.id, "doc")
                          else this.handleNewTaskTags("doc")
                        }}
                      />
                    </DropdownItem>
                    <DropdownItem tag="li">
                      <Checkbox
                        color="primary"
                        className="user-checkbox"
                        icon={<Check className="vx-icon" size={12} />}
                        label={"Appointment"}
                        checked={
                            (this.props.taskToUpdate !== null &&
                            this.props.taskToUpdate.tags.includes("bug"))||
                            (newTask.tags.includes("bug"))
                            ? true
                            : false
                        }
                        size="sm"
                        onClick={e => e.stopPropagation()}
                        onChange={e => {
                          e.stopPropagation()
                          if (this.props.taskToUpdate !== null)
                            this.props.updateLabel(taskToUpdate.id, "bug")
                          else this.handleNewTaskTags("bug")
                        }}
                      />
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div> */}
            <FormGroup>
              <Input
                type="text"
                placeholder="subject"
                value={
                   Task.subject
                }
                onChange={e => {
                  
                    this.setState({ Task : {
                      ...this.state.Task,
                      subject : e.target.value
                    } })
                  
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Date</label>
              <Input
                type="date"
                placeholder="Date"
                value={
                   Task.todoDate
                }
                onChange={e => {
                    this.setState({ Task : {
                      ...this.state.Task,
                      todoDate : e.target.value
                    } })
               }}
              />
            </FormGroup>
            <FormGroup>
              <label>Time</label>
              <Input
                type="time"
                placeholder="time"
                value={
                Task.todoTime
                }
                onChange={e => {
                 
                    this.setState({ Task : {
                      ...this.state.Task,
                      todoTime : e.target.value
                    } })
                 
                }}
              />
            </FormGroup>

            <FormGroup>
              <label>Tag</label>
              <select className="slt" value={Task.tag} onChange={(e) => {
                this.setState({Task : {
                  ...this.state.Task,
                  tag : e.target.value
                }})
              } }>
                      <option>--Select--</option>
                      <option>Events</option>
                      <option>Business</option>
                      <option>Personal</option>
                      <option>Appointment</option>
              </select>
            </FormGroup>
             
            <FormGroup>
              <label>status</label>
              <select className="slt" value={Task.status} onChange={(e) => {
                this.setState({Task : {
                  ...this.state.Task,
                  status : e.target.value
                }})
              } }>
                    <option>--Select--</option>
                    <option>Past Due</option>
                    <option>Pending</option>
                    <option>Rescheduled</option>
                    <option>Completed</option>
                    <option>Not Completed</option>
              </select>
            </FormGroup>

            <FormGroup>
              <Input
                type="textarea"
                placeholder="Notes"
                rows="2"
                value={
                  Task.notes
                }
                onChange={e => {
                    this.setState({ Task : {
                      ...this.state.Task,
                      notes : e.target.value
                    } })
                  
                }}
              />
            </FormGroup>
            {/* <div className="chip-wrapper my-1 d-flex flex-wrap">
              {this.props.taskToUpdate !== null &&
              this.props.taskToUpdate.tags &&
              this.props.taskToUpdate.tags.length > 0
                ? this.renderTags(this.props.taskToUpdate.tags)
                : null}
            </div> */}

            <hr className="my-2" />
            <div className="d-flex justify-content-end">
              <Button.Ripple
                className="mr-50"
                color="primary"
                onClick={() => {
                  if (this.props.taskToUpdate !== null) {
                    this.props.updateTask(this.props.taskToUpdate._id, this.state.Task)
                  } else {
                    this.props.ADD_NEW_TASK(this.state.Task)
                  }
                  this.props.addTask("close")
                  this.setState({
                    Task: {
                      notes: "",
        status: "",
        subject: "",
        tag: "",
        todoDate: "",
        todoTime: "",
                    }
                  })
                }}
                disabled={false}
                // disabled={
                //   taskTitle.length > 0 || newTask.title.length > 0
                //     ? false
                //     : true
                // }
              >
                {this.props.taskToUpdate &&
                this.props.taskToUpdate._id &&
                this.props.taskToUpdate !== null
                  ? "Update"
                  : "Add"}
              </Button.Ripple>
              <Button.Ripple
                color="light"
                outline
                onClick={() => {
                  this.props.addTask("close")
                  this.setState({
                    Task: {
                      notes: "",
        status: "",
        subject: "",
        tag: "",
        todoDate: "",
        todoTime: "",
                    }
                  })
                }}
              >
                Cancel
              </Button.Ripple>
            </div> 
          </div>
        </PerfectScrollbar>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    app: state.todoApp
  }
}

export default connect(mapStateToProps, {
  completeTask,
  importantTask,
  starTask,
  updateTask,
  updateLabel,
  addNewTask,
  ADD_NEW_TASK
})(TaskSidebar)
