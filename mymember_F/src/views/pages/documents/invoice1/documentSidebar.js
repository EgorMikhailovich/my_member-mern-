import React from "react"
import { UncontrolledCollapse, Card, CardHeader, CardTitle, CardBody, Row } from "reactstrap"
import { Plus, FolderMinus, FolderPlus } from "react-feather"
import NewFolder from "./createFolderModal"
import { Get_DocFolder_LIST } from '../../../../redux/actions/document';
import { connect } from 'react-redux';
import NewSubFolder from './createSubFolderModal'



class CollapseUncontrolled extends React.Component {


  componentDidMount() {
    this.props.Get_DocFolder_LIST();

  }

  render() {
    return (
      <React.Fragment>
        <Card style={{ paddingBottom: "3rem", backgroundColor: "#c1c1c126", paddingTop: "0.5rem" }}>
          <Row style={{ justifyContent: "space-around", textAlign: "center", marginTop: "10px", alignItems: "center" }} >
            <div>
              <p>Folders</p>
            </div>

            <NewFolder />
          </Row>

          {this.props.documentFolderList?.documentFolderList.length > 0 &&
            this.props.documentFolderList?.documentFolderList.reverse().map((v, i) =>

              <div className="vx-collapse collapse-bordered collapse-icon accordion-icon-rotate" >
                <CardHeader id={v.folderName} style={{ paddingTop: "0.6rem" }}>
                  <CardTitle className="lead collapse-title collapsed">

                    <FolderPlus size="18" /> {v.folderName}
                  </CardTitle>
                </CardHeader>
                <UncontrolledCollapse toggler={`#${v.folderName}`}>
                
                  <CardBody style={{ padding: "0" }} >
                      <ul style={{marginBottom:"0"}}>
                      {v.subFolder?.map((subFolder, _i) => 
                        <li style={{ listStyle: "none", paddingBottom: "10px" }}>
                          <FolderMinus size="14" /> {subFolder.subFolderName}
                        </li>
                        
                        )}
                      
                        <NewSubFolder  
                         isSubFolder={true}
                         mainFolder={v}
                        />
                      </ul>

                   
                  </CardBody>
                   
                   
                </UncontrolledCollapse>

              </div>
            )}
        </Card>

      </React.Fragment>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    documentFolderList: state.document
  }
}
// export default CollapseUncontrolled
export default connect(mapStateToProps, { Get_DocFolder_LIST })(CollapseUncontrolled);