import React from "react"
import {
  UncontrolledDropdown,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Media
} from "reactstrap"
import PerfectScrollbar from "react-perfect-scrollbar"
import axios from "axios"
import * as Icon from "react-feather"
import { useAuth0 } from "../../../authServices/auth0/auth0Service"
import { history } from "../../../history"
// import { IntlContext } from "../../../utility/context/Internationalization"
import { connect } from 'react-redux';
import { logoutWithJWT } from '../../../redux/actions/auth/loginActions';
import LocationModal from "../../../views/pages/navlocation/locationModal"
import "../../../assets/scss/pages/users.scss"
import { LOGIN_WITH_JWT,Get_User_Info } from '../../../redux/actions/auth/loginActions';

const handleNavigation = (e, path) => {
  e.preventDefault()
  history.push(path)
}


const UserDropdown = props => {
  const { logout, isAuthenticated } = useAuth0()
  return (
    <DropdownMenu right>
      <DropdownItem
        tag="a"
        href="/company/settings"
        onClick={e => handleNavigation(e, "/company/settings")}
      >
        <Icon.User size={14} className="mr-50" />
        <span className="align-middle">Edit Profile</span>
      </DropdownItem>
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => handleNavigation(e, "/email/inbox")}
      >
        <Icon.Mail size={14} className="mr-50" />
        <span className="align-middle">My Inbox</span>
      </DropdownItem>
      <DropdownItem
        tag="a"
        href="/todo/all"
        onClick={e => handleNavigation(e, "/todo/all")}
      >
        <Icon.CheckSquare size={14} className="mr-50" />
        <span className="align-middle">Tasks</span>
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => {
          e.preventDefault()
          if (isAuthenticated) {
            return logout({
              returnTo: window.location.origin + process.env.REACT_APP_PUBLIC_PATH
            })
          } else {
            const provider = props.login?.values?.loggedInWith;
            console.log("provider", props.login);
            if (!!provider) {
              if (provider === "jwt") {
                console.log(props.LOGIN_WITH_JWT())
                return props.LOGIN_WITH_JWT()
              }
              if (provider === "firebase") {
                return props.logoutWithFirebase()
              }
            } else {
              console.log("default_logout");
              localStorage.clear()
              // localStorage.removeItem("access_token");
              history.push("/pages/login")
            }
          }

        }}
      >
        <Icon.Power size={14} className="mr-50" />
        <span className="align-middle">Log Out</span>
      </DropdownItem>
    </DropdownMenu>
  )
}


// dropdown for wallet_nav

const WalletDropdown = props => {
  const { } = useAuth0()
  return (
    <DropdownMenu right>
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => handleNavigation(e, "/pages/navwallet/depositFunds")}
      >
        {/* <Icon.Circle size={14} className="mr-50" />  */}
        <span className="align-middle">Deposit Funds</span>
      </DropdownItem>
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => handleNavigation(e, "/pages/navwallet/withdraw")}
      >
        {/* <Icon.Circle size={14} className="mr-50" /> */}
        <span className="align-middle">Withdraw Funds</span>
      </DropdownItem>
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => handleNavigation(e, "/pages/navwallet/transction")}
      >
        {/* <Icon.Circle size={14} className="mr-50" /> */}
        <span className="align-middle">Transction History</span>
      </DropdownItem>
      
    </DropdownMenu>
  )
}

class NavbarUser extends React.PureComponent {
  state = {
    navbarSearch: false,
    langDropdown: false,
    shoppingCart: [
      {
        id: 1,
        name:
          "Apple - Apple Watch Series 1 42mm Space Gray Aluminum Case Black Sport Band - Space Gray Aluminum",
        desc:
          "Durable, lightweight aluminum cases in silver, space gray, gold, and rose gold. Sport Band in a variety of colors. All the features of the original Apple Watch, plus a new dual-core processor for faster performance. All models run watchOS 3. Requires an iPhone 5 or later.",
        price: "$299",
        img: require("../../../assets/img/pages/eCommerce/4.png"),
        width: 75
      },
      {
        id: 2,
        name:
          "Apple - Macbook® (Latest Model) - 12' Display - Intel Core M5 - 8GB Memory - 512GB Flash Storage Space Gray",
        desc:
          "MacBook delivers a full-size experience in the lightest and most compact Mac notebook ever. With a full-size keyboard, force-sensing trackpad, 12-inch Retina display,1 sixth-generation Intel Core M processor, multifunctional USB-C port, and now up to 10 hours of battery life,2 MacBook features big thinking in an impossibly compact form.",
        price: "$1599.99",
        img: require("../../../assets/img/pages/eCommerce/dell-inspirion.jpg"),
        width: 100,
        imgClass: "mt-1 pl-50"
      },
      {
        id: 3,
        name: "Sony - PlayStation 4 Pro Console",
        desc:
          "PS4 Pro Dynamic 4K Gaming & 4K Entertainment* PS4 Pro gets you closer to your game. Heighten your experiences. Enrich your adventures. Let the super-charged PS4 Pro lead the way.** GREATNESS AWAITS",
        price: "$399.99",
        img: require("../../../assets/img/pages/eCommerce/7.png"),
        width: 88
      },
      {
        id: 4,
        name:
          "Beats by Dr. Dre - Geek Squad Certified Refurbished Beats Studio Wireless On-Ear Headphones - Red",
        desc:
          "Rock out to your favorite songs with these Beats by Dr. Dre Beats Studio Wireless GS-MH8K2AM/A headphones that feature a Beats Acoustic Engine and DSP software for enhanced clarity. ANC (Adaptive Noise Cancellation) allows you to focus on your tunes.",
        price: "$379.99",
        img: require("../../../assets/img/pages/eCommerce/10.png"),
        width: 75
      },
      {
        id: 5,
        name:
          "Sony - 75' Class (74.5' diag) - LED - 2160p - Smart - 3D - 4K Ultra HD TV with High Dynamic Range - Black",
        desc:
          "This Sony 4K HDR TV boasts 4K technology for vibrant hues. Its X940D series features a bold 75-inch screen and slim design. Wires remain hidden, and the unit is easily wall mounted. This television has a 4K Processor X1 and 4K X-Reality PRO for crisp video. This Sony 4K HDR TV is easy to control via voice commands.",
        price: "$4499.99",
        img: require("../../../assets/img/pages/eCommerce/sony-75class-tv.jpg"),
        width: 100,
        imgClass: "mt-1 pl-50"
      },
      {
        id: 6,
        name:
          "Nikon - D810 DSLR Camera with AF-S NIKKOR 24-120mm f/4G ED VR Zoom Lens - Black",
        desc:
          "Shoot arresting photos and 1080p high-definition videos with this Nikon D810 DSLR camera, which features a 36.3-megapixel CMOS sensor and a powerful EXPEED 4 processor for clear, detailed images. The AF-S NIKKOR 24-120mm lens offers shooting versatility. Memory card sold separately.",
        price: "$4099.99",
        img: require("../../../assets/img/pages/eCommerce/canon-camera.jpg"),
        width: 70,
        imgClass: "mt-1 pl-50"
      }
    ],
    suggestions: []
  }

  componentDidMount() {
    this.props.Get_User_Info();
   
  }

  handleNavbarSearch = () => {
    this.setState({
      navbarSearch: !this.state.navbarSearch
    })
  }

  removeItem = id => {
    let cart = this.state.shoppingCart

    let updatedCart = cart.filter(i => i.id !== id)

    this.setState({
      shoppingCart: updatedCart
    })
  }

  handleLangDropdown = () =>
    this.setState({ langDropdown: !this.state.langDropdown })

  render() {
    const renderCartItems = this.state.shoppingCart.map(item => {
      return (
        <div className="cart-item" key={item.id}>
          <Media
            className="p-0"
            onClick={() => history.push("/ecommerce/product-detail")}
          >
            <Media className="text-center pr-0 mr-1" left>
              <img
                className={`${
                  item.imgClass
                    ? item.imgClass + " cart-item-img"
                    : "cart-item-img"
                }`}
                src={item.img}
                width={item.width}
                alt="Cart Item"
              />
            </Media>
            <Media className="overflow-hidden pr-1 py-1 pl-0" body>
              <span className="item-title text-truncate text-bold-500 d-block mb-50">
                {item.name}
              </span>
              <span className="item-desc font-small-2 text-truncate d-block">
                {item.desc}
              </span>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <span className="align-middle d-block">1 x {item.price}</span>
                <Icon.X
                  className="danger"
                  size={15}
                  onClick={e => {
                    e.stopPropagation()
                    this.removeItem(item.id)
                  }}
                />
              </div>
            </Media>
          </Media>
        </div>
      )
    })

    return (
      <ul className="nav navbar-nav navbar-nav-user float-right">
       
       
          <UncontrolledDropdown className="walletdropdown nav-item tp-hdr-menu">
              <DropdownToggle tag="a" className="nav-link dropdown-user-link">
                <div className="user-nav d-sm-flex d-none pt_mar">
                <Icon.CreditCard size={20} color="blue" />

                 <span className="user-status text_span_tp"> Wallet</span> 
                </div>

              </DropdownToggle>
          < WalletDropdown {...this.props} />
        </UncontrolledDropdown >
         <div className="user-nav d-sm-flex d-none tp-hdr-menu">
             <a href="pages/navsupport">
             
               <Icon.CheckCircle size={20} color="green" />
               <span className="user-status text_span_tp"> Support</span> 
             </a>
          </div>
       
            <div className="user-nav d-sm-flex d-none ">

              <LocationModal/>

            </div>
        <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
          <DropdownToggle tag="a" className="nav-link dropdown-user-link">
            <div className="user-nav d-sm-flex d-none">
              <span className="user-name text-bold-600">
                
              </span>
              <span className="user-name text-bold-600">
              {this.props.userinfo.userInfo.username}
              </span>
            </div>
            <span data-tour="user">
            <img
              src={this.props.userinfo.userInfo.logo}
              className="round"
              height="40"
              width="40"
              alt="ProfileImg"
            />
          </span>
          {/* </div>
                
                )} */}
            
          </DropdownToggle>
          <UserDropdown {...this.props} />
        </UncontrolledDropdown>
      </ul>
    )
  }
}
const mapStateToProps = (state) => {
  
   return {
     login : state.auth,
     userinfo:state.userinfo

     
   }
}
export default connect(mapStateToProps, {LOGIN_WITH_JWT,Get_User_Info})(NavbarUser)
