
import React from "react"
import {
  Collapse,
  ListGroup,
  FormGroup,
  Button,
  ListGroupItem,
}
  from "reactstrap"
import SweetAlert from 'react-bootstrap-sweetalert';
import PerfectScrollbar from "react-perfect-scrollbar"
import { X, Trash, FolderPlus } from "react-feather"
import { DELETE_SUB_FOLDER, GET_SCHEDULE_MAILS, GET_CATEGORIES, CHANGE_FILTER, DELETE_FOLDER } from "../../../../../redux/actions/compose"
import { connect } from "react-redux"
import RenameFolder from "./renameFolderName"
import NewFolder from "./composeCategoryModal"


import "../../../../../assets/scss/plugins/extensions/editor.scss"

class ComposeSidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collapseID: "",
      rowData: null,
      defaultAlert: false,
      ActiveFolderAction: null,
      actionFolderId: null,
      defaultAlert4sub:false,
      defaultSubFolder: {},
      isEditorr:"",
      datafirst:""
    }
  

  }

  toggleCollapse = (collapseID) => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }))
  }

  componentDidMount(){
    this.props.GET_CATEGORIES();
    this.setState({rowData:this.props.categories});
    
  }
  componentDidUpdate(prevProps) {
    if (prevProps.categories !== this.props.categories) {
      for (let mainFolder of this.props.categories) {
        if (mainFolder.folder.length != 0) {
          let _1stSubFolder = mainFolder.folder[0];
          this.setState({
            rowData: this.props.categories,
            loading: false,
          })
          this.props.CHANGE_FILTER(
            `${mainFolder.categoryName}/${_1stSubFolder.folderName}`,
            _1stSubFolder._id
          )
          break;
        }
      }
    }
  }

  CallCHANGEFILTER = (_path,id) =>{
     this.props.CHANGE_FILTER(_path,id);
     if(this.props.isEditorr == true){
      this.props.handleIsEditor(false)
     }
     
  }
  deleteFolder = (item) => {
    this.setState({ defaultAlert: true, actionFolder: item })
  }
  deleteSubFolder = (item)=>{
    this.setState({ defaultAlert4sub: true, actionFolder: item })
  }

  handleAlertOfSubFolder = (action) => {
    if (action === 'confirmAlert') {
      this.props.DELETE_SUB_FOLDER(this.state.actionFolder)
    }
    this.setState({ defaultAlert4sub: false, actionFolder: null })
  }
  handleAlertOfMainFolder = (action) => {
    if (action === 'confirmAlert') {
      this.props.DELETE_FOLDER(this.state.actionFolder)
    }
    this.setState({ defaultAlert: false, actionFolder: null })
  }
  
  handleAlert = (action) => {
    if (action === 'confirmAlert') {
      this.props.DELETE_FOLDER(this.state.actionFolder)
    }
    this.setState({ defaultAlert4sub:false,defaultAlert: false, actionFolder: null })
  }
  
  render() {
    const { rowData } = this.state
    const mainfolder = this.props.routerProps.location.pathname.split("/");
    return (
      <React.Fragment>
        <div
          className="sidebar-close-icon"
          onClick={() => this.props.mainSidebar(false)}
        >
          <X size={18} />
        </div>
        <div className="email-app-menu">
          <FormGroup className="form-group-compose text-center compose-btn">
            <Button.Ripple
              className="my-1 btn-block"
              color="primary"
            >
              <NewFolder
                isEditMainFolder={false}
                isEditSubFolder={false}
                folder={null}
                //  subFolder={this.props.folder}
                isSubFolder={false}
              />
            </Button.Ripple>
          </FormGroup>
          <PerfectScrollbar
            className="sidebar-menu-list"
            options={{
              wheelPropagation: false
            }}
          >
            <ListGroup style={{ width: "100%" }} className="list-group-messages font-medium-1">
              {
                this.props.categories ? this.props.categories.map((collapseItem, id) => {
                  return (
                    <ListGroupItem
                    key={id}
                      onClick={() => this.toggleCollapse(id + 1)}
                      className="border-0 cursor-pointer pt-0"
                    >
                      <ListGroupItem
                        className="border-0 cursor-pointer pt-0"
                        active={collapseItem.categoryName === mainfolder[mainfolder.length - 2]}
                      >
                        <FolderPlus size={21} />
                        <span className="align-middle ml-1" >{collapseItem.categoryName}</span>
                        <div className="mt-25 float-right">
                          <Trash size="18"
                            style={{ marginRight: "10px" }}
                            onClick={() => { this.deleteFolder(collapseItem) }}
                          />
                          <RenameFolder
                            showTemplate={()=>{return true}}
                            isEditMainFolder={true}
                            isEditSubFolder={false}
                            mainFolder={collapseItem}
                            isSubFolder={false}
                          />
                        </div>
                      </ListGroupItem>

                      <Collapse
                        isOpen={id + 1 === this.state.collapseID}
                        onEntering={this.onEntering}
                        onEntered={this.onEntered}
                        onExiting={this.onExiting}
                        onExited={this.onExited}
                      >
                        <ListGroup style={{ width: "100%" }} className="list-group-messages font-medium-1">
                          {collapseItem.folder?.map((subFolder, _i) => {
                            return (
                              <ListGroupItem
                                key={_i}
                                onClick={() => 
                                this.CallCHANGEFILTER(`${collapseItem.categoryName}/${subFolder.folderName}`, subFolder._id) }
                                active={`app/marketing/email/compose/${collapseItem.categoryName}/${subFolder.folderName}` === this.props.routerProps.location.pathname}
                                className="border-0 cursor-pointer pt-0"

                              >
                                <FolderPlus size={18} />
                                <span className="align-middle ml-1">{subFolder.folderName}</span>
                                <div className="mt-25 float-right">
                                  <Trash size="18"
                                    style={{ marginRight: "10px" }}
                                    onClick={() => { this.deleteSubFolder(subFolder) }}
                                  />
                                  <RenameFolder
                                    showTemplate={()=>{return true}}
                                    isEditMainFolder={false}
                                    isEditSubFolder={true}
                                    isSubFolder={false}
                                    folder={collapseItem}
                                    subFolder={subFolder}
                                  />
                                </div>
                              </ListGroupItem>
                            )
                          })}
                          <ListGroupItem
                            active={false}
                            className="border-0 cursor-pointer pt-0"
                          >
                            <NewFolder
                              isEditMainFolder={false}
                              isEditSubFolder={false}
                              isSubFolder={true}
                              
                              mainFolder={collapseItem}
                            />
                          </ListGroupItem>
                        </ListGroup>
                      </Collapse>
                    </ListGroupItem>
                  )
                }):"list is empty"
              }
            </ListGroup>
          </PerfectScrollbar>
        </div>
        <SweetAlert title="Are you sure?"
          warning
          show={this.state.defaultAlert}
          showCancel
          reverseButtons
          cancelBtnBsStyle="danger"
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          onConfirm={() => {
            this.handleAlertOfMainFolder("confirmAlert")
          }}
          onCancel={() => {
            this.handleAlert("cancelAlert")
          }}
        >
          You won't be able to revert this!
        </SweetAlert>
        <SweetAlert title="Are you sure?"
          warning
          show={this.state.defaultAlert4sub}
          showCancel
          reverseButtons
          cancelBtnBsStyle="danger"
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          onConfirm={() => {
            this.handleAlertOfSubFolder("confirmAlert")
          }}
          onCancel={() => {
            this.handleAlert("cancelAlert")
          }}
        >
          You won't be able to revert this!
        </SweetAlert>
      </React.Fragment>
   
   )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.EmailComposeMarketing.categories,
    allScheduleMails: state.EmailComposeMarketing.allScheduleMails,
  }
}
export default connect(mapStateToProps, {
  DELETE_SUB_FOLDER,
  CHANGE_FILTER,
  GET_CATEGORIES,
  DELETE_FOLDER,
  GET_SCHEDULE_MAILS,
})(ComposeSidebar)
