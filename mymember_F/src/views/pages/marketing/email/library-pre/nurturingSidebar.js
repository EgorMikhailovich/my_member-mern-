
import React from "react"
import {Collapse,Card,CardBody,CardHeader,CardTitle} from "reactstrap"
import { Mail, Phone, FileText, Plus,FolderPlus,Folder } from "react-feather"
import NewFolder from "./createFolderModal"

const collapseItems = [
  {
    id: 1,
    title: "Lead",
    content:<>
        <div style={{marginLeft:"10px"}}><Folder size="10"/><a href="/email/inbox"> upon entry </a> </div>
        <div style={{marginLeft:"10px"}}><Folder size="10"/>Demo </div>
        <div style={{marginLeft:"10px"}}><Folder size="10"/>SDFDSFDSF </div>
        <div style={{marginLeft:"10px"}}><Folder size="10"/>Demo </div>
        <div style={{marginLeft:"10px"}}><Folder size="10"/>Demo </div>
        <div style={{marginLeft:"10px"}}><NewFolder/> </div>
        </>
  },
  {
    id: 2,
    title: "Active Trial",
    content:<>
    <div style={{marginLeft:"10px"}}><Folder size="10"/><a href="/email/inbox"> upon entry </a> </div>
    <div style={{marginLeft:"10px"}}><Folder size="10"/>Demo </div>
    <div style={{marginLeft:"10px"}}><Folder size="10"/>SDFDSFDSF </div>
    <div style={{marginLeft:"10px"}}><Folder size="10"/>Demo </div>
    <div style={{marginLeft:"10px"}}><Folder size="10"/>Demo </div>
    </>
      },
  {
    id: 3,
    title: "Former Trial",
    content:<>
    <div style={{marginLeft:"10px"}}><Folder size="10"/><a href="/email/inbox"> upon entry </a> </div>
    <div style={{marginLeft:"10px"}}><Folder size="10"/>Demo </div>
    <div style={{marginLeft:"10px"}}><Folder size="10"/>SDFDSFDSF </div>
    <div style={{marginLeft:"10px"}}><Folder size="10"/>Demo </div>
    <div style={{marginLeft:"10px"}}><Folder size="10"/>Demo </div>
    </>
},
  {
    id: 4,
    title: "Former Student",
    content:<>
    <div style={{marginLeft:"10px"}}><Folder size="10"/><a href="/email/inbox"> upon entry </a> </div>
    <div style={{marginLeft:"10px"}}><Folder size="10"/>Demo </div>
    <div style={{marginLeft:"10px"}}><Folder size="10"/>SDFDSFDSF </div>
    <div style={{marginLeft:"10px"}}><Folder size="10"/>Demo </div>
    <div style={{marginLeft:"10px"}}><Folder size="10"/>Demo </div>
    </>  },
  {
    id: 5,
    title: "Draft",
   
  }
]

class Accordion extends React.Component {

  state = { collapseID: ""}

  toggleCollapse = collapseID => {
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }))
    }


  render() {

      const accordionItems = collapseItems.map(collapseItem => {
          return (
            <Card
              key={collapseItem.id}
              onClick={() => this.toggleCollapse(collapseItem.id)}
            >
              <CardHeader>
                <CardTitle className="lead collapse-title collapsed">
                 
                  <FolderPlus size="18"/>
                  {collapseItem.title}
                </CardTitle>
              </CardHeader>
              <Collapse
                isOpen={collapseItem.id === this.state.collapseID}
                onEntering={this.onEntering}
                onEntered={this.onEntered}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <CardBody>{collapseItem.content}</CardBody>
              </Collapse>
            </Card>
          )
        })

    return(
      <div className="collapse-bordered vx-collapse collapse-icon accordion-icon-rotate">
      {accordionItems}
    </div>
    )
  }
}
export default Accordion