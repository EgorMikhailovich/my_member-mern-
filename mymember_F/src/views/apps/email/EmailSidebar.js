import React from "react"
import { FormGroup, Button, ListGroup, ListGroupItem } from "reactstrap"
import PerfectScrollbar from "react-perfect-scrollbar"
import { X, FolderPlus, Plus } from "react-feather"
import { changeFilter } from "../../../redux/actions/email/index"
import { GetFolderList } from "../../../redux/actions/mymoney/index"
import { connect } from "react-redux"
import "../../../assets/scss/plugins/extensions/editor.scss"
import AddCategory from "./categoryModal"
class EmailSidebar extends React.Component {
  state = {
    modal: false
  }
  componentDidMount() {
    this.props.GetFolderList();
  }
  render() {

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
            <a href="/app/marketing/email/compose">
            <Button.Ripple
              block
              className="my-2 btn-block"
              color="primary"
              // onClick={() => {
              //   this.props.handleComposeSidebar("open")
              //   this.props.mainSidebar(false)
              // }}
            
            >
              <Plus size={14} />
              <span className="align-middle ml-50">Add</span>
            </Button.Ripple>
            </a>
            
          </FormGroup>
          <PerfectScrollbar
            className="sidebar-menu-list"
            options={{
              wheelPropagation: false
            }}
          >
            <ListGroup className="list-group-messages font-medium-1">
              <ListGroupItem
                onClick={() => this.props.changeFilter("schedule-mail")}
                active={"/email/inbox" === this.props.routerProps.location.pathname}
                className="border-0 cursor-pointer pt-0"
              >
                <FolderPlus size={21} />
                <span className="align-middle ml-1">Schedule Mail</span>
                <div className="badge badge-pill badge-primary mt-25 float-right">
                  {/* <span className="align-middle">3</span> */}
                </div>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.props.changeFilter("sent")}
                active={"/email/sent" === this.props.routerProps.location.pathname}
                className="border-0 cursor-pointer"
              >
                <FolderPlus size={21} />
                <span className="align-middle ml-1">Camp</span>

              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.props.changeFilter("draft")}
                active={"/email/draft" === this.props.routerProps.location.pathname}
                className="border-0 cursor-pointer"
              >
                <FolderPlus size={21} />
                <span className="align-middle ml-1">Letterhead</span>
                <div className="badge badge-pill badge-warning mt-25 float-right">
                  {/* <span className="align-middle">4</span> */}
                </div>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => {
                  this.props.changeFilter("starred")
                }}
                active={"/email/starred" === this.props.routerProps.location.pathname}
                className="border-0 cursor-pointer"
              >
                <FolderPlus size={21} />
                <span className="align-middle ml-1">Starred</span>
              </ListGroupItem>
              <ListGroupItem
                onClick={() => this.props.changeFilter("spam")}
                active={"/email/spam" === this.props.routerProps.location.pathname}
                className="border-0 cursor-pointer"
              >
                <FolderPlus size={21} />
                <span className="align-middle ml-1">Demo</span>
                <div className="badge badge-pill badge-danger mt-25 float-right">
                  {/* <span className="align-middle">3</span> */}
                </div>
              </ListGroupItem>

              {this.props.folderLists?.allComposeFolderList.length > 0 &&
                this.props.folderLists?.allComposeFolderList.reverse().map((v, i) =>
                  <ListGroupItem
                    onClick={() => this.props.changeFilter(`${v.categoryName}`)}
                    active={`/email/${v.categoryName}` === this.props.routerProps.location.pathname}
                    className="border-0 cursor-pointer"
                    key={v._id}
                  >
                    <FolderPlus size={21} />
                    <span className="align-middle ml-1">{v.categoryName}</span>
                  </ListGroupItem>

                )}
              <ListGroupItem className="border-0 cursor-pointer">
                <AddCategory />
              </ListGroupItem>
            </ListGroup>
          </PerfectScrollbar>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    folderLists: state.mymoney
  }
}

export default connect(mapStateToProps, { changeFilter, GetFolderList })(EmailSidebar)
