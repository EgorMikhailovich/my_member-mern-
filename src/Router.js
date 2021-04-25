import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import knowledgeBaseCategory from "./views/pages/knowledge-base/Category"
import knowledgeBaseQuestion from "./views/pages/knowledge-base/Questions"
import { ContextLayout } from "./utility/context/Layout"
import TestingMain from "./views/pages/mySchool/Testing/Recommended/recommendedMain"

// Route-based code splitting
const analyticsDashboard = lazy(() =>
  import("./views/dashboard/analytics/AnalyticsDashboard")
)
const ecommerceDashboard = lazy(() =>
  import("./views/dashboard/ecommerce/EcommerceDashboard")
)

const email = lazy(() => import("./views/apps/email/Email"))
const emailCompose = lazy(() => import("./views/pages/marketing/email/compose/compose"))
const chat = lazy(() => import("./views/apps/chat/Chat"))
const todo = lazy(() => import("./views/apps/todo/Todo"))
const goals = lazy(() => import("./views/apps/goal/goal"))
const calendar = lazy(() => import("./views/apps/calendar/Calendar"))
const appointment = lazy(() => import("./views/apps/appointment/Appointment"))
const shop = lazy(() => import("./views/apps/ecommerce/shop/Shop"))
const wishlist = lazy(() => import("./views/apps/ecommerce/wishlist/Wishlist"))
const checkout = lazy(() => import("./views/apps/ecommerce/cart/Cart"))
const productDetail = lazy(() => import("./views/apps/ecommerce/detail/Detail"))
const grid = lazy(() => import("./views/ui-elements/grid/Grid"))
const typography = lazy(() =>
  import("./views/ui-elements/typography/Typography")
)
const textutilities = lazy(() =>
  import("./views/ui-elements/text-utilities/TextUtilities")
)
const syntaxhighlighter = lazy(() =>
  import("./views/ui-elements/syntax-highlighter/SyntaxHighlighter")
)
const colors = lazy(() => import("./views/ui-elements/colors/Colors"))
const reactfeather = lazy(() =>
  import("./views/ui-elements/icons/FeatherIcons")
)
const basicCards = lazy(() => import("./views/ui-elements/cards/basic/Cards"))
const statisticsCards = lazy(() =>
  import("./views/ui-elements/cards/statistics/StatisticsCards")
)
const analyticsCards = lazy(() =>
  import("./views/ui-elements/cards/analytics/Analytics")
)
const actionCards = lazy(() =>
  import("./views/ui-elements/cards/actions/CardActions")
)
const Alerts = lazy(() => import("./components/reactstrap/alerts/Alerts"))
const Buttons = lazy(() => import("./components/reactstrap/buttons/Buttons"))
const Breadcrumbs = lazy(() =>
  import("./components/reactstrap/breadcrumbs/Breadcrumbs")
)
const Carousel = lazy(() => import("./components/reactstrap/carousel/Carousel"))
const Collapse = lazy(() => import("./components/reactstrap/collapse/Collapse"))
const Dropdowns = lazy(() =>
  import("./components/reactstrap/dropdowns/Dropdown")
)
const ListGroup = lazy(() =>
  import("./components/reactstrap/listGroup/ListGroup")
)
const Modals = lazy(() => import("./components/reactstrap/modal/Modal"))
const Pagination = lazy(() =>
  import("./components/reactstrap/pagination/Pagination")
)
const NavComponent = lazy(() =>
  import("./components/reactstrap/navComponent/NavComponent")
)
const Navbar = lazy(() => import("./components/reactstrap/navbar/Navbar"))
const Tabs = lazy(() => import("./components/reactstrap/tabs/Tabs"))
const TabPills = lazy(() => import("./components/reactstrap/tabPills/TabPills"))
const Tooltips = lazy(() => import("./components/reactstrap/tooltips/Tooltips"))
const Popovers = lazy(() => import("./components/reactstrap/popovers/Popovers"))
const Badge = lazy(() => import("./components/reactstrap/badge/Badge"))
const BadgePill = lazy(() =>
  import("./components/reactstrap/badgePills/BadgePill")
)
const Progress = lazy(() => import("./components/reactstrap/progress/Progress"))
const Media = lazy(() => import("./components/reactstrap/media/MediaObject"))
const Spinners = lazy(() => import("./components/reactstrap/spinners/Spinners"))
const Toasts = lazy(() => import("./components/reactstrap/toasts/Toasts"))
const avatar = lazy(() => import("./components/@vuexy/avatar/Avatar"))
const AutoComplete = lazy(() =>
  import("./components/@vuexy/autoComplete/AutoComplete")
)
const chips = lazy(() => import("./components/@vuexy/chips/Chips"))
const divider = lazy(() => import("./components/@vuexy/divider/Divider"))
const vuexyWizard = lazy(() => import("./components/@vuexy/wizard/Wizard"))
const listView = lazy(() => import("./views/ui-elements/data-list/ListView"))
const thumbView = lazy(() => import("./views/ui-elements/data-list/ThumbView"))
const newstudentform = lazy(() => import("./views/pages/newstudent/createStudentmain"))
const newmemberform = lazy(() => import("./views/pages/newmember/createMembermain"))
const studentInfo = lazy(() => import("./views/pages/studentInfo/infoStudentmain"))
const memberInfo = lazy(() => import("./views/pages/memberInfo/infoMembermain"))
const setting = lazy(() => import("./views/pages/settings/settingMain"))
const ShopAddMembership = lazy(() => import("./views/pages/shop/membership/membershipMain"))
const ShopAddTesting = lazy(() => import("./views/pages/shop/testing/TestingMain"))
const MymoneyAddExpense = lazy(() => import("./views/pages/myMoney/expense/expenseMain"))
const MymoneyFinanceAddFinance1 = lazy(() => import("./views/pages/myMoney/finance/finance1/financeMain"))
const MymoneyFinanceAddDelinquent = lazy(() => import("./views/pages/myMoney/finance/delinquent/delinquentMain"))
const MymoneyFinanceAddForcast = lazy(() => import("./views/pages/myMoney/finance/forcast/forcastMain"))
const MymoneyFinanceAddTesting = lazy(() => import("./views/pages/myMoney/finance/testing/testingMain"))
const MymoneyFinanceAddccexpiring = lazy(() => import("./views/pages/myMoney/finance/ccexpiring/ccexpiringMain"))

const MarketingNurting = lazy(() => import("./views/pages/marketing/email/nurturing/nurturingMain"))
const MarketingSytems = lazy(() => import("./views/pages/marketing/email/system/system"))
// const MarketingLibrary = lazy(() => import("./views/pages/marketing/email/library/libraryMain"))

const MarketingTextAddNurting = lazy(() => import("./views/pages/marketing/text/nurturing/nurturingMain"))
const MarketingTextAddSystem = lazy(() => import("./views/pages/marketing/text/system/system"))
const MarketingTextAddLibrary = lazy(() => import("./views/pages/marketing/text/library/libraryMain"))

const Navsupport = lazy(() => import("./views/pages/navsupport/navSupportMain"))
const DepositFunds = lazy(() => import("./views/pages/navwallet/depositFunds/depositFundMain"))
const Withdraw = lazy(() => import("./views/pages/navwallet/withdraw/withdrawMain"))
const Transction = lazy(() => import("./views/pages/navwallet/transction/transctionMain"))
const NavLocation = lazy(() => import("./views/pages/navlocation/locationModal"))



const missYoucall = lazy(() => import("./views/pages/mySchool/MissYouCall/missyoucallMain"))
const renewals = lazy(() => import("./views/pages/mySchool/renewals/renewals"))
const birthday = lazy(() => import("./views/pages/mySchool/birthday/birthday"))
const select = lazy(() => import("./views/forms/form-elements/select/Select"))
const switchComponent = lazy(() =>
  import("./views/forms/form-elements/switch/Switch")
)
const checkbox = lazy(() =>
  import("./views/forms/form-elements/checkboxes/Checkboxes")
)
const radio = lazy(() => import("./views/forms/form-elements/radio/Radio"))
const input = lazy(() => import("./views/forms/form-elements/input/Input"))
const group = lazy(() =>
  import("./views/forms/form-elements/input-groups/InputGoups")
)
const numberInput = lazy(() =>
  import("./views/forms/form-elements/number-input/NumberInput")
)
const textarea = lazy(() =>
  import("./views/forms/form-elements/textarea/Textarea")
)
const pickers = lazy(() =>
  import("./views/forms/form-elements/datepicker/Pickers")
)
const inputMask = lazy(() =>
  import("./views/forms/form-elements/input-mask/InputMask")
)
const layout = lazy(() => import("./views/forms/form-layouts/FormLayouts"))
const formik = lazy(() => import("./views/forms/formik/Formik"))
const tables = lazy(() => import("./views/tables/reactstrap/Tables"))
const ReactTables = lazy(() =>
  import("./views/tables/react-tables/ReactTables")
)
const Aggrid = lazy(() => import("./views/tables/aggrid/Aggrid"))
const DataTable = lazy(() => import("./views/tables/data-tables/DataTables"))
const profile = lazy(() => import("./views/pages/profile/Profile"))
const faq = lazy(() => import("./views/pages/faq/FAQ"))
const knowledgeBase = lazy(() =>
  import("./views/pages/knowledge-base/KnowledgeBase")
)
const search = lazy(() => import("./views/pages/search/Search"))
const accountSettings = lazy(() =>
  import("./views/pages/account-settings/AccountSettings")
)
// const invoice = lazy(() => import("./views/pages/invoice/Invoice"))
const invoice1 = lazy(() => import("./views/pages/documents/invoice1/invoiceMain"))
// const invoice = lazy(() => import("./views/pages/documents/invoice1/Invoice"))
const comingSoon = lazy(() => import("./views/pages/misc/ComingSoon"))
const error404 = lazy(() => import("./views/pages/misc/error/404"))
const error500 = lazy(() => import("./views/pages/misc/error/500"))
const authorized = lazy(() => import("./views/pages/misc/NotAuthorized"))
const maintenance = lazy(() => import("./views/pages/misc/Maintenance"))
const homeMain = lazy(() => import("./views/homepage/homeMain"))
const ThankYouPage = lazy(() => import("./views/pages/ThankYou/thankyou"))
const apex = lazy(() => import("./views/charts/apex/ApexCharts"))
const chartjs = lazy(() => import("./views/charts/chart-js/ChartJS"))
const extreme = lazy(() => import("./views/charts/recharts/Recharts"))
const leafletMaps = lazy(() => import("./views/maps/Maps"))
const toastr = lazy(() => import("./extensions/toastify/Toastify"))
const sweetAlert = lazy(() => import("./extensions/sweet-alert/SweetAlert"))
const rcSlider = lazy(() => import("./extensions/rc-slider/Slider"))
const uploader = lazy(() => import("./extensions/dropzone/Dropzone"))
const editor = lazy(() => import("./extensions/editor/Editor"))
const drop = lazy(() => import("./extensions/drag-and-drop/DragAndDrop"))
const tour = lazy(() => import("./extensions/tour/Tour"))
const clipboard = lazy(() =>
  import("./extensions/copy-to-clipboard/CopyToClipboard")
)
const menu = lazy(() => import("./extensions/contexify/Contexify"))
const swiper = lazy(() => import("./extensions/swiper/Swiper"))
const i18n = lazy(() => import("./extensions/i18n/I18n"))
const reactPaginate = lazy(() => import("./extensions/pagination/Pagination"))
const tree = lazy(() => import("./extensions/treeview/TreeView"))
const Import = lazy(() => import("./extensions/import-export/Import"))
const Export = lazy(() => import("./extensions/import-export/Export"))
const ExportSelected = lazy(() =>
  import("./extensions/import-export/ExportSelected")
)
const userList = lazy(() => import("./views/apps/user/list/activeUsersList"))
const memberList = lazy(() => import("./views/apps/members/list/activeUsersList"))
const activetrailuserList = lazy(() => import("./views/apps/user/list/activeTrail"))
const allEmailList = lazy(() => import("./views/pages/marketing/email/sent/sentEmail"))
const composeEmail = lazy(() => import("./views/pages/marketing/email/compose/compose"))
const libraryEmail = lazy(() => import("./views/pages/marketing/email/library/library"))
const leadlistuserList = lazy(() => import("./views/apps/user/list/leadList"))
const camplistuserList = lazy(() => import("./views/apps/user/list/campList"))
const usersByProgramList = lazy(() => import("./views/pages/usersByProgram/usersByProgramMain"))
const membershipByProgramList = lazy(() => import("./views/pages/membershipByProgram/MembershipByProgramMain"))
const testingEligible = lazy(() => import("./views/pages/mySchool/Testing/Eligible/eligibleMain"))
const testingRecommended = lazy(() => import("./views/pages/mySchool/Testing/Recommended/recommendedMain"))
const testingRegistered = lazy(() => import("./views/pages/mySchool/Testing/Registered/registeredMain"))
const candidateManage = lazy(() => import("./views/pages/mySchool/Candidates/candidateMain"))
const StatisticsActiveStudent =  lazy(() => import("./views/pages/statistics/activeStudent/activeStudentMain"))
const StatisticsActiveTrail =  lazy(() => import("./views/pages/statistics/activeTrail/activeTrailMain"))
const StatisticsLead =  lazy(() => import("./views/pages/statistics/lead/leadMain"))
const StatisticsCamp =  lazy(() => import("./views/pages/statistics/camp/campMain"))
const StatisticsformerStudent =  lazy(() => import("./views/pages/statistics/formerStudent/formerStudentMain"))
const StatisticsformerTrail =  lazy(() => import("./views/pages/statistics/formerTrail/formerTrailMain"))
const StatisticsafterSchool =  lazy(() => import("./views/pages/statistics/afterSchool/afterSchoolMain"))
const formerstudentuserList = lazy(() => import("./views/apps/user/list/formerStudent"))
const formertrailuserList = lazy(() => import("./views/apps/user/list/formerTrail"))
const afterschooluserList = lazy(() => import("./views/apps/user/list/afterSchool"))
const userEdit = lazy(() => import("./views/apps/user/edit/Edit"))
const userView = lazy(() => import("./views/apps/user/view/View"))
const Login = lazy(() => import("./views/pages/authentication/login/Login"))
const forgotPassword = lazy(() =>
  import("./views/pages/authentication/ForgotPassword")
)
const lockScreen = lazy(() => import("./views/pages/authentication/LockScreen"))
const resetPassword = lazy(() =>
  import("./views/pages/authentication/ResetPassword")
)
const register = lazy(() =>
  import("./views/pages/authentication/register/Register")
)
const accessControl = lazy(() =>
  import("./extensions/access-control/AccessControl")
)
// Set Layout and Component Using App Route
const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner />}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  
  state = {
    loggedinUser : JSON.parse(localStorage.getItem('userdata')),
  }
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute exact
            path="/"
            component={homeMain}
            fullLayout
           
          />
          <AppRoute exact path={'/dashboard'} component={analyticsDashboard} />
          
          <AppRoute
            path="/ecommerce-dashboard"
            component={ecommerceDashboard}
          />
          
          <AppRoute
            path="/email"
            exact
            component={() => <Redirect to="/email/inbox" />}
          />

          <AppRoute path="/email/:filter" component={emailCompose} />
          <AppRoute path="/chat" component={chat} />
          <AppRoute
            path="/todo"
            exact
            component={() => <Redirect to="/todo/all" />}
          />
          <AppRoute
            path="/goal"
            exact
            component={() => <Redirect to="/goal/all" />}
          />
          <AppRoute path="/todo/:filter" component={todo} />
          <AppRoute path="/goal/:filter" component={goals} />
          <AppRoute path="/calendar" component={calendar} />
          <AppRoute path="/app/appointment" component={appointment} />
          <AppRoute path="/ecommerce/shop" component={shop} />
          <AppRoute path="/ecommerce/wishlist" component={wishlist} />
          
          <AppRoute
            path="/ecommerce/product-detail"
            component={productDetail}
          />
          <AppRoute
            path="/ecommerce/checkout"
            component={checkout}
            permission="admin"
          />
          <AppRoute path="/data-list/list-view" component={listView} />
          <AppRoute path="/data-list/thumb-view" component={thumbView} />
          {/* custom routes start  */}
          <AppRoute path="/data-list/add-new-student" component={newstudentform} />
          <AppRoute path="/data-list/add-new-member" component={newmemberform} />
          <AppRoute path="/student-info" component={studentInfo} />
          <AppRoute path="/member-info" component={memberInfo} />
          <AppRoute path="/company/settings" component={setting} />
          <AppRoute path="/company/shop/membership" component={ShopAddMembership} />
          <AppRoute path="/admin/shop/membership" component={ShopAddMembership} />
          <AppRoute path="/company/shop/testing" component={ShopAddTesting} />
          <AppRoute path="/company/mymoney/expense" component={ MymoneyAddExpense} />
          <AppRoute path="/company/mymoney/finance/finance1" component={MymoneyFinanceAddFinance1} />
          <AppRoute path="/company/mymoney/finance/delinquent" component={MymoneyFinanceAddDelinquent} />
          <AppRoute path="/company/mymoney/finance/forcast" component={MymoneyFinanceAddForcast} />
          <AppRoute path="/company/mymoney/finance/testing" component={MymoneyFinanceAddTesting} />
          <AppRoute path="/company/mymoney/finance/ccexpiring" component={MymoneyFinanceAddccexpiring} />
          <AppRoute path="/company/marketing/email/nurturing" component={ MarketingNurting} />
          <AppRoute path="/company/marketing/email/system" component={MarketingSytems } />

          <AppRoute path="/company/marketing/text/nurturing" component={ MarketingTextAddNurting} />
          <AppRoute path="/company/marketing/text/system" component={MarketingTextAddSystem } />
          <AppRoute path="/company/marketing/text/library" component={MarketingTextAddLibrary } />

          <AppRoute path="/app/miss-you-call" component={missYoucall} />
          <AppRoute path="/app/renewals" component={renewals} />
          <AppRoute path="/app/birthday" component={birthday} />
          {/* custom route end  */}
          <AppRoute path="/app/student/activetrail" component={newstudentform} />
          <AppRoute path="/app/member/activetrail" component={newmemberform} />
          <AppRoute path="/app/student/leadlist" component={leadlistuserList} />
          <AppRoute path="/app/student/camplist" component={camplistuserList} />
          <AppRoute path="/app/student/formerstudent" component={formerstudentuserList} />
          <AppRoute path="/app/student/formertrail" component={formertrailuserList} />
          <AppRoute path="/app/student/afterschool" component={afterschooluserList} />
          <AppRoute path="/app/members/list" component={usersByProgramList} />
          <AppRoute path="/app/student/membershipbyprogram" component={membershipByProgramList} />
          <AppRoute path="/app/school/test/eligible" component={testingEligible} />
          <AppRoute path="/app/school/test/recommended" component={testingRecommended} />
          <AppRoute path="/app/school/test/registered" component={testingRegistered} />
          <AppRoute path="/app/school/candidates" component={candidateManage} />
          <AppRoute path="/app/statistics/active-student" component={StatisticsActiveStudent} />
          <AppRoute path="/app/statistics/active-trail" component={StatisticsActiveTrail} />
          <AppRoute path="/app/statistics/lead" component={StatisticsLead} />
          <AppRoute path="/app/statistics/camp" component={StatisticsCamp} />
          <AppRoute path="/app/statistics/former-student" component={StatisticsformerStudent} />
          <AppRoute path="/app/statistics/former-trail" component={StatisticsformerTrail} />
          <AppRoute path="/app/statistics/after-school" component={StatisticsafterSchool} />
          <AppRoute path="/company/documents" component={invoice1} />
          
          

          <AppRoute path="/ui-element/grid" component={grid} />
          <AppRoute path="/ui-element/typography" component={typography} />
          <AppRoute
            path="/ui-element/textutilities"
            component={textutilities}
          />
          <AppRoute
            path="/ui-element/syntaxhighlighter"
            component={syntaxhighlighter}
          />
          <AppRoute path="/colors/colors" component={colors} />
          <AppRoute path="/icons/reactfeather" component={reactfeather} />
          <AppRoute path="/cards/basic" component={basicCards} />
          <AppRoute path="/cards/statistics" component={statisticsCards} />
          <AppRoute path="/cards/analytics" component={analyticsCards} />
          <AppRoute path="/cards/action" component={actionCards} />
          <AppRoute path="/components/alerts" component={Alerts} />
          <AppRoute path="/components/buttons" component={Buttons} />
          <AppRoute path="/components/breadcrumbs" component={Breadcrumbs} />
          <AppRoute path="/components/carousel" component={Carousel} />
          <AppRoute path="/components/collapse" component={Collapse} />
          <AppRoute path="/components/dropdowns" component={Dropdowns} />
          <AppRoute path="/components/list-group" component={ListGroup} />
          <AppRoute path="/components/modals" component={Modals} />
          <AppRoute path="/components/pagination" component={Pagination} />
          <AppRoute path="/components/nav-component" component={NavComponent} />
          <AppRoute path="/components/navbar" component={Navbar} />
          <AppRoute path="/components/tabs-component" component={Tabs} />
          <AppRoute path="/components/pills-component" component={TabPills} />
          <AppRoute path="/components/tooltips" component={Tooltips} />
          <AppRoute path="/components/popovers" component={Popovers} />
          <AppRoute path="/components/badges" component={Badge} />
          <AppRoute path="/components/pill-badges" component={BadgePill} />
          <AppRoute path="/components/progress" component={Progress} />
          <AppRoute path="/components/media-objects" component={Media} />
          <AppRoute path="/components/spinners" component={Spinners} />
          <AppRoute path="/components/toasts" component={Toasts} />
          <AppRoute
            path="/extra-components/auto-complete"
            component={AutoComplete}
          />
          <AppRoute path="/extra-components/avatar" component={avatar} />
          <AppRoute path="/extra-components/chips" component={chips} />
          <AppRoute path="/extra-components/divider" component={divider} />
          <AppRoute path="/forms/wizard" component={vuexyWizard} />
          <AppRoute path="/forms/elements/select" component={select} />
          <AppRoute path="/forms/elements/switch" component={switchComponent} />
          <AppRoute path="/forms/elements/checkbox" component={checkbox} />
          <AppRoute path="/forms/elements/radio" component={radio} />
          <AppRoute path="/forms/elements/input" component={input} />
          <AppRoute path="/forms/elements/input-group" component={group} />
          <AppRoute
            path="/forms/elements/number-input"
            component={numberInput}
          />
          <AppRoute path="/forms/elements/textarea" component={textarea} />
          <AppRoute path="/forms/elements/pickers" component={pickers} />
          <AppRoute path="/forms/elements/input-mask" component={inputMask} />
          <AppRoute path="/forms/layout/form-layout" component={layout} />
          <AppRoute path="/forms/formik" component={formik} />{" "}
          <AppRoute path="/tables/reactstrap" component={tables} />
          <AppRoute path="/tables/react-tables" component={ReactTables} />
          <AppRoute path="/tables/agGrid" component={Aggrid} />
          <AppRoute path="/tables/data-tables" component={DataTable} />
          <AppRoute path="/pages/profile" component={profile} />
          <AppRoute path="/pages/faq" component={faq} />
          <AppRoute
            path="/pages/knowledge-base"
            component={knowledgeBase}
            exact
          />
          <AppRoute
            path="/pages/knowledge-base/category"
            component={knowledgeBaseCategory}
            exact
          />
          <AppRoute
            path="/pages/knowledge-base/category/questions"
            component={knowledgeBaseQuestion}
          />
          <AppRoute path="/pages/search" component={search} />
          <AppRoute
            path="/pages/account-settings"
            component={accountSettings}
          />
          {/* <AppRoute path="/pages/invoice" component={invoice} /> */}
          
          {/* topnavsupport <AppRoute path="/pages/ navsupport" component={navsupport} />*/}

          <AppRoute path="/pages/navsupport" component={Navsupport} />
          <AppRoute path="/pages/navwallet/depositFunds/" component={DepositFunds} />
          <AppRoute path="/pages/navwallet/withdraw/" component={Withdraw} />
          <AppRoute path="/pages/navwallet/transction/" component={Transction} />
          <AppRoute path="/pages/navlocation/" component={NavLocation} />

          <AppRoute
            path="/misc/coming-soon"
            component={comingSoon}
            fullLayout
          />
          <AppRoute path="/misc/error/404" component={error404} fullLayout />
          <AppRoute path="/pages/login" component={Login} fullLayout />
          <AppRoute path="/pages/register" component={register} fullLayout />
          <AppRoute
            path="/pages/forgot-password"
            component={forgotPassword}
            fullLayout
          />
          <AppRoute
            path="/pages/lock-screen"
            component={lockScreen}
            fullLayout
          />
          <AppRoute
            path="/pages/reset-password"
            component={resetPassword}
            fullLayout
          />
          <AppRoute path="/misc/error/500" component={error500} fullLayout />
          <AppRoute
            path="/misc/not-authorized"
            component={authorized}
            fullLayout
          />
          <AppRoute
            path="/misc/maintenance"
            component={maintenance}
            fullLayout
          />
           
          <AppRoute
            path="/thank-you-registration"
            component={ThankYouPage}
            fullLayout
            
          />
          <AppRoute path="/app/marketing/email/sent_all_email" component={allEmailList} />
          <AppRoute path="/app/marketing/email/compose" component={composeEmail} />
          <AppRoute path="/app/marketing/email/library" component={libraryEmail} />
          
          <AppRoute path="/app/marketing/text/nurting" component={MarketingTextAddNurting} />
          <AppRoute path="/app/marketing/text/system" component={MarketingTextAddSystem} />
          <AppRoute path="/app/marketing/text/library" component={MarketingTextAddLibrary} />

          <AppRoute path="/app/student/list" component={userList} />
          <AppRoute path="/app/member/list" component={memberList} />
          <AppRoute path="/app/student/active-trail/list" component={activetrailuserList} />

          <AppRoute path="/app/student/former-student/list" component={formerstudentuserList} />
          <AppRoute path="/app/student/former-trail/list" component={formertrailuserList} />
          <AppRoute path="/app/student/after-school/list" component={afterschooluserList} />
          <AppRoute path="/app/student/lead-list/list" component={leadlistuserList} />
          <AppRoute path="/app/student/camp-list/list" component={camplistuserList} />
          <AppRoute path="/app/user/edit" component={userEdit} />
          <AppRoute path="/app/user/view" component={userView} />
          <AppRoute path="/charts/apex" component={apex} />
          <AppRoute path="/charts/chartjs" component={chartjs} />
          <AppRoute path="/charts/recharts" component={extreme} />
          <AppRoute path="/maps/leaflet" component={leafletMaps} />
          <AppRoute path="/extensions/sweet-alert" component={sweetAlert} />
          <AppRoute path="/extensions/toastr" component={toastr} />
          <AppRoute path="/extensions/slider" component={rcSlider} />
          <AppRoute path="/extensions/file-uploader" component={uploader} />
          <AppRoute path="/extensions/wysiwyg-editor" component={editor} />
          <AppRoute path="/extensions/drag-and-drop" component={drop} />
          <AppRoute path="/extensions/tour" component={tour} />
          <AppRoute path="/extensions/clipboard" component={clipboard} />
          <AppRoute path="/extensions/context-menu" component={menu} />
          <AppRoute path="/extensions/swiper" component={swiper} />
          <AppRoute
            path="/extensions/access-control"
            component={accessControl}
          />
          <AppRoute path="/extensions/i18n" component={i18n} />
          <AppRoute path="/extensions/tree" component={tree} />
          <AppRoute path="/extensions/import" component={Import} />
          <AppRoute path="/extensions/export" component={Export} />
          <AppRoute
            path="/extensions/export-selected"
            component={ExportSelected}
          />
          <AppRoute path="/extensions/pagination" component={reactPaginate} />
          <AppRoute component={error404} fullLayout />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter