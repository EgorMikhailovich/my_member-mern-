import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { Disc, X, Circle } from "react-feather"
import classnames from "classnames"
import Logo from "../../../../assets/img/logo/logo.png"
import "../../../../assets/scss/pages/users.scss"
class SidebarHeader extends Component {
  render() {
    let {
      toggleSidebarMenu,
      activeTheme,
      collapsed,
      toggle,
      sidebarVisibility,
      menuShadow
    } = this.props
    return (
      <div className="navbar-header">
        <ul className="nav navbar-nav flex-row">
          <li className="nav-item mr-auto" >
            <NavLink to="/" className="navbar-brand">
              {/* <div className="brand-logo" /> */}
              {/* <h2 className="brand-text mb-0">My Member</h2> */}
              <img src={Logo} className="logo-1" ></img>
            </NavLink>
          </li>
          <li className="nav-item nav-toggle">
            <div className="nav-link modern-nav-toggle">
              {collapsed === false ? (
                <Disc
                  onClick={() => {
                    toggleSidebarMenu(true)
                    toggle()
                  }}
                  className={classnames(
                    "toggle-icon icon-x d-none d-xl-block font-medium-4",
                    {
                      "text-primary": activeTheme === "primary",
                      "text-success": activeTheme === "success",
                      "text-danger": activeTheme === "danger",
                      "text-info": activeTheme === "info",
                      "text-warning": activeTheme === "warning",
                      "text-dark": activeTheme === "dark"
                    }
                  )}
                  size={20}
                  data-tour="toggle-icon"
                />
              ) : (
                <Circle
                  onClick={() => {
                    toggleSidebarMenu(false)
                    toggle()
                  }}
                  className={classnames(
                    "toggle-icon icon-x d-none d-xl-block font-medium-4",
                    {
                      "text-primary": activeTheme === "primary",
                      "text-success": activeTheme === "success",
                      "text-danger": activeTheme === "danger",
                      "text-info": activeTheme === "info",
                      "text-warning": activeTheme === "warning",
                      "text-dark": activeTheme === "dark"
                    }
                  )}
                  size={20}
                />
              )}
              <X
                onClick={sidebarVisibility}
                className={classnames(
                  "toggle-icon icon-x d-block d-xl-none font-medium-4",
                  {
                    "text-primary": activeTheme === "primary",
                    "text-success": activeTheme === "success",
                    "text-danger": activeTheme === "danger",
                    "text-info": activeTheme === "info",
                    "text-warning": activeTheme === "warning",
                    "text-dark": activeTheme === "dark"
                  }
                )}
                size={20}
              />
            </div>
          </li>
        </ul>
        <div
          className={classnames("shadow-bottom", {
            "d-none": menuShadow === false
          })}
        />
      </div>
    )
  }
}

export default SidebarHeader
