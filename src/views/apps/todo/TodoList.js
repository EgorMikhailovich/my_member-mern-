import React from "react"
import { FormGroup, Input } from "reactstrap"
import { Menu, Search, Check, Info, Star, Trash, Edit } from "react-feather"
import PerfectScrollbar from "react-perfect-scrollbar"
import { connect } from "react-redux"
import {
  getTodos,
  completeTask,
  starTask,
  importantTask,
  trashTask,
  searchTask,
  GET_TODOS
} from "../../../redux/actions/todo/index"
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
class TodoList extends React.Component {
  // static getDerivedStateFromProps(props, state) {
  //   if (props.app.todo.routeParam !== state.currentLocation) {
  //     return {
  //       todos: props.app.todo.todos
  //     }
  //   }
  //   // Return null if the state hasn't changed
  //   return null
  // }
  state = {
    todos: [],
    handleUpdateTask: null,
    currentLocation: this.props.routerProps.location.pathname,
    value: ""
  }
  async componentDidMount() {
    if(!["all","today","tomorrow","upcoming","completed","notcompleted"].includes(this.props.routerProps.match.params.filter)){
        this.props.routerProps.history.push('/todo/all');
        this.props.GET_TODOS("all");
    }
    else{
      this.props.GET_TODOS(this.props.routerProps.match.params.filter);
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(this.props.app?.todo?.todos !== prevProps?.app?.todo?.todos){
      
       this.setState({
         ...this.state,
         todos : this.props.app.todo.todos
       })
     }
    // else if(this.props.routerProps.match.params.filter !== this.props.app.todo.routeParam){
    //   console.log(this.props.routerProps.match.params.filter, "---", this.props.app.todo.routeParam);
    //   this.setState({
    //     ...this.state,
    //     todos : this.props.app.todo.todos 
    //   })
    // } 
  }
  handleOnChange = e => {
    this.setState({ value: e.target.value })
    this.props.searchTask(e.target.value)
  }  

  render() {
    const { todos, value } = this.state
    // let routerFilter = this.props.routerProps.match.params.filter
    let routerFilter = "";
    // let todosArr = value.length ? this.props.app.todo.filteredTodos : todos
//     createdAt: "2020-12-23T18:15:13.507Z"
// notes: "TESTONE WORKS FINE"
// status: "DONE"
// subject: "TESTWORK"
// tag: "TESTchange"
// todoDate: "23/12/2020"
// todoTime: "23:44"
// updatedAt: "2020-12-23T19:46:54.029Z"
    // let todosArr =  todos;
    console.log("todos",this.state.todos)
    let renderTodos =
      this.state.todos.length > 0 ? (
        this.state.todos?.map((todo, i) => {
          return (
            <li
              className={`todo-item ${todo.isCompleted ? "completed" : ""}`}
              key={i}
              // onClick={() => {
              //   this.props.handleUpdateTask(todo)
              // }}
            >
              <div className="todo-title-wrapper d-flex justify-content-between mb-50">
                <div className="todo-title-area d-flex align-items-center">
                  <div className="title-wrapper d-flex">
                    <Checkbox
                      color="primary"
                      className="user-checkbox"
                      icon={<Check className="vx-icon" size={12} />}
                      label={""}
                      // checked={todo.isCompleted}
                      size="sm"
                      // onClick={e => {
                      //   e.stopPropagation()
                      //   this.props.completeTask(todo)
                      // }}
                      // onChange={e => e.stopPropagation()}
                    />
                    <h6 className="todo-title mt-50 mx-50">{todo.subject}</h6>
                  </div>
                  {!!todo.tag  ? (
                    <div className="chip-wrapper">
                     
                        <div className="chip mb-0" key={i}>
                          <div className="chip-body">
                            <span className="chip-text">
                              <span
                                className={`bullet bullet-${
                                  todo.tag === "backend"
                                    ? "warning"
                                    : todo.tag === "doc"
                                    ? "success"
                                    : todo.tag === "bug"
                                    ? "danger"
                                    : "success"
                                } bullet-xs`}
                              />
                              <span className="text-capitalize ml-25">
                                {todo.tag}
                              </span>
                            </span>
                          </div>
                        </div>
                    </div>
                   ) : null} 
                </div>
                <div
                  className={`todo-item-action d-flex ${
                    routerFilter === "trashed" ? "justify-content-end" : ""
                  }`}
                >
                  <div
                    className={`todo-item-info d-inline-block ${
                      routerFilter === "trashed" ? "mr-1" : "mr-1 mr-sm-0"
                    }`}
                    onClick={e => {
                      e.stopPropagation()
                      this.props.importantTask(todo)
                    }}
                  >
                    <Info
                      size={17}
                      className={`${todo.isImportant ? "text-success" : ""}`}
                    />
                  </div>
                  <div
                    className="todo-item-favorite d-inline-block mr-1 mr-sm-0"
                    onClick={e => {
                      e.stopPropagation()
                      this.props.starTask(todo)
                    }}
                  >
                    <Star
                      size={17}
                      className={`${todo.isStarred ? "text-warning" : ""}`}
                    />
                  </div>
                  <div
                    className="todo-item-favorite d-inline-block mr-1 mr-sm-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      this.props.handleUpdateTask(todo)
                    }}
      
                  >
                    <Edit
                      size={17}
                      className={`${todo.isStarred ? "text-warning" : ""}`}
                    />
                  </div>
                  {routerFilter !== "trashed" ? (
                    <div
                      className="todo-item-delete d-inline-block mr-1 mr-sm-0"
                      onClick={e => {
                        e.stopPropagation()
                        this.props.trashTask(todo.id)
                      }}
                    >
                      <Trash size={17} />
                    </div>
                  ) : null}
                </div>
              </div>
              {!!todo.notes ? (
                <p className="todo-desc truncate mb-0">{todo.notes}</p>
              ) : (
                ""
              )}
            </li>
          )
        })
      ) : (
        <p className="p-1 text-center mt-2 font-medium-3 text-bold-500">
          No tasks at this time
        </p>
      )

    return (
      <div className="content-right">
        <div className="todo-app-area">
          <div className="todo-app-list-wrapper">
            <div className="todo-app-list">
              <div className="app-fixed-search">
                <div
                  className="sidebar-toggle d-inline-block d-lg-none"
                  onClick={() => this.props.mainSidebar(true)}
                >
                  <Menu size={24} />
                </div>
                <FormGroup className="position-relative has-icon-left m-0 d-inline-block d-lg-block">
                  <Input
                    type="text"
                    placeholder="Search..."
                    onChange={e => this.handleOnChange(e)}
                    value={value}
                  />
                  <div className="form-control-position">
                    <Search size={15} />
                  </div>
                </FormGroup>
              </div>
              <PerfectScrollbar
                className="todo-task-list"
                options={{
                  wheelPropagation: false
                }}
              >
                <ul className="todo-task-list-wrapper">{renderTodos}</ul>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log(state.todoApp);
  return {
    app: state.todoApp
  }
}
export default connect(mapStateToProps, {
  getTodos,
  completeTask,
  starTask,
  importantTask,
  trashTask,
  searchTask,
  GET_TODOS
})(TodoList)
