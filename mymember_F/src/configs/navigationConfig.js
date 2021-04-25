import React from "react"
import * as Icon from "react-feather"
import "../assets/scss/pages/users.scss"

// sidebar menu desktop
const SchoolNavigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={25} color="orangered" />,
    navLink: "/dashboard"
  },
  {
    id: "users",
    title: "Student",
    type: "collapse",
    icon: <Icon.User size={25} color="deeppink" />,
    children: [
      {
        id: "list",
        title: "Students",
        type: "item",
        icon: <Icon.Users size={14} color="deeppink" />,
        permissions: ["admin", "editor"],
        navLink: "/app/student/list"
      },
      {
        id: "Active Trials",
        title: "Active Trials",
        type: "item",
        icon: <Icon.BarChart2 size={14} color="blue" />,
        permissions: ["admin", "editor"],
        navLink: "/app/student/active-trail/list"
      },
      {
        id: "Lead",
        title: "Lead",
        type: "item",
        icon: <Icon.CheckSquare size={14} color="green" />,
        permissions: ["admin", "editor"],
        navLink: "/app/student/lead-list/list"
      },
      {
        id: "Former",
        title: "Former Student",
        type: "item",
        icon: <Icon.Database size={14} color="red" />,
        permissions: ["admin", "editor"],
        navLink: "/app/student/former-student/list"
      },
      {
        id: "FormerTrial",
        title: "Former Trial",
        type: "item",
        icon: <Icon.BarChart2 size={14} color="orange" />,
        permissions: ["admin", "editor"],
        navLink: "/app/student/former-trail/list"
      },
      {
        id: "comingSoon",
        title: "After School",
        type: "item",
        icon: <Icon.Book size={14} color="Grey" />,
        permissions: ["admin", "editor"],
        navLink: "/app/student/after-school/list"
      },
      {
        id: "edit1",
        title: "Camp",
        type: "item",
        icon: <Icon.UserCheck size={14} color="blue" />,
        permissions: ["admin", "editor"],
        navLink: "/app/student/camp-list/list"
      },
      {
        id: "edit",
        title: "Student By Program",
        type: "item",
        icon: <Icon.PlusSquare size={14} color="purple" />,
        permissions: ["admin", "editor"],
        navLink: "/app/student/by-program"
      },
      {
        id: "edit",
        title: "Membership By Program",
        type: "item",
        icon: <Icon.PlusSquare size={14} color="purple" />,
        permissions: ["admin", "editor"],
        navLink: "/app/student/membershipbyprogram"
      }
    ]
  },
  {
    id: "eCommerc",
    title: "My School",
    type: "collapse",
    icon: <Icon.Book size={25} color="darkorange" />,
    children: [
      {
        id: "miss You Call",
        title: "Miss You Call",
        type: "item",
        icon: <Icon.PhoneCall size={12} color="deeppink" />,
        permissions: ["admin", "editor"],
        navLink: "/app/miss-you-call"
      },
      {
        id: "renewals",
        title: "Renewals",
        type: "item",
        icon: <Icon.RefreshCcw size={12} color="blue" />,
        permissions: ["admin", "editor"],
        navLink: "/app/renewals"
      },
      {
        id: "birthday",
        title: "Birthday",
        type: "item",
        icon: <Icon.Box size={12} color="green" />,
        permissions: ["admin", "editor"],
        navLink: "/app/birthday"
      },
      {
        id: "candidates",
        title: "Candidates",
        type: "item",
        icon: <Icon.User size={12} color="orange" />,
        permissions: ["admin", "editor"],
        navLink: "/app/school/candidates"
      },

      {
        id: "testing",
        title: "Testing",
        type: "collapse",
        icon: <Icon.User size={12} color="orange" />,
        children: [
          {
            id: "eligible",
            title: "Eligible",
            type: "item",
            icon: <Icon.Circle size={10} color="deeppink" />,
            permissions: ["admin", "editor"],
            navLink: "/app/school/test/eligible"
          },
          {
            id: "recommended",
            title: "Recommended",
            type: "item",
            icon: <Icon.Circle size={10} color="deeppink" />,
            permissions: ["admin", "editor"],
            navLink: "/app/school/test/recommended"
          },
          {
            id: "registered",
            title: "Registered",
            type: "item",
            icon: <Icon.Circle size={10} color="deeppink" />,
            permissions: ["admin", "editor"],
            navLink: "/app/school/test/registered"
          },
        ]
      }

    ]
  },
  {
    id: "Todo",
    title: "Task and Goals",
    type: "collapse",
    icon: <Icon.CheckSquare size={25} color="darkcyan" />,
    children: [
      {
        id: "todo",
        title: "To-Do List",
        type: "item",
        icon: <Icon.PenTool size={12} color="Green" />,
        permissions: ["admin", "editor"],
        navLink: "/todo/all"
      },
      {
        id: "goal",
        title: "Goals",
        type: "item",
        icon: <Icon.Target size={12} color="purple" />,
        permissions: ["admin", "editor"],
        navLink: "/goal/all"
      }
    ]
  },
  {
    id: "calendar",
    title: "Calendar",
    type: "collapse",
    icon: <Icon.Calendar size={25} color="goldenrod" />,
    children: [
      {
        id: "calenda",
        title: "Attendance",
        type: "item",
        icon: <Icon.Calendar size={12} color="deeppink" />,
        permissions: ["admin", "editor"],
        navLink: "/calendar"
      },
      {
        id: "appointment",
        title: "Appointment",
        type: "item",
        icon: <Icon.RefreshCcw size={12} color="blue" />,
        permissions: ["admin", "editor"],
        navLink: "/app/appointment"
      },
      {
        id: "selfcheckin",
        title: "Self Check In",
        type: "item",
        icon: <Icon.CheckSquare size={12} color="green" />,
        permissions: ["admin", "editor"],
        navLink: "/calendar/Self Check In"
      },
    ]
  },
  {
    id: "marketings",
    title: "Marketing",
    type: "collapse",
    icon: <Icon.BarChart size={25} color="red" />,
    children: [
      {
        id: "email",
        title: "Email",
        type: "collapse",
        icon: <Icon.Mail size={12} color="black" />,
        children: [
          {
            id: "compose",
            title: "Compose",
            type: "item",
            icon: <Icon.Circle size={10} color="green" />,
            permissions: ["admin", "editor"],
            navLink: "/app/marketing/email/compose"
          },
          {
            id: "library",
            title: "Library",
            type: "item",
            icon: <Icon.Circle size={10} color="black" />,
            permissions: ["admin", "editor"],
            navLink: "/app/marketing/email/library"
          },
          {
            id: "nurturing",
            title: "Nurturing",
            type: "item",
            icon: <Icon.Circle size={10} color="deeppink" />,
            permissions: ["admin", "editor"],
            navLink: "/email/draft"
          },
          {
            id: "system",
            title: "System",
            type: "item",
            icon: <Icon.Circle size={10} color="blue" />,
            permissions: ["admin", "editor"],
            navLink: "/email/starred"
          },
          
          {
            id: "sent",
            title: "Sent",
            type: "item",
            icon: <Icon.Circle size={10} color="red" />,
            permissions: ["admin", "editor"],
            navLink: "/app/marketing/email/sent_all_email"
          },
        ]
      },
      {
        id: "text",
        title: "Text",
        type: "collapse",
        icon: <Icon.Mail size={12} color="black" />,
        children: [
          // {
          //   id: "text",
          //   title: "Text",
          //   type: "item",
          //   icon: <Icon.Circle size={10} color="green" />,
          //   permissions: ["admin", "editor"],
          //   navLink: "/app/marketing/email/compose"
          // },
          {
            id: "library",
            title: "Nurturing",
            type: "item",
            icon: <Icon.Circle size={10} color="black" />,
            permissions: ["admin", "editor"],
            navLink: "/app/marketing/text/nurting"
          },
          {
            id: "systemText",
            title: "System",
            type: "item",
            icon: <Icon.Circle size={10} color="blue" />,
            permissions: ["admin", "editor"],
            navLink: "/app/marketing/text/system"
          },
          
          {
            id: "library",
            title: "Library",
            type: "item",
            icon: <Icon.Circle size={10} color="red" />,
            permissions: ["admin", "editor"],
            navLink: "/app/marketing/text/library"
          },
        ]
      },

    ]
  },
  {
    id: "eCommerce",
    title: "Shop",
    type: "collapse",
    icon: <Icon.ShoppingCart size={25} color="blue" />,
    children: [
      {
        id: "member",
        title: "Membership",
        type: "item",
        icon: <Icon.Circle size={12} color="red" />,
        permissions: ["admin", "editor"],
        navLink: "/company/shop/membership"
      },
      {
        id: "shop",
        title: "Store",
        type: "item",
        icon: <Icon.ShoppingCart size={12} color="red" />,
        permissions: ["admin", "editor"],
        navLink: "/ecommerce/shop"
      },
      {
        id: "testing",
        title: "Testing",
        type: "item",
        icon: <Icon.RefreshCcw size={12} color="black" />,
        permissions: ["admin", "editor"],
        navLink: "/company/shop/testing"
      },
      {
        id: "purchase history",
        title: "Purchase History",
        type: "item",
        icon: <Icon.DollarSign size={12} color="orange" />,
        permissions: ["admin", "editor"],
        navLink: "/ecommerce/purchase history"
      }
    ]
  },
  {
    id: "cards",
    title: "My Money",
    type: "collapse",
    icon: <Icon.CreditCard size={25} color="darkgreen" />,
    children: [
      {
        id: "expense",
        title: "Expense",
        type: "item",
        icon: <Icon.CheckSquare size={12} color="blue" />,
        permissions: ["admin", "editor"],
        navLink: "/company/mymoney/expense"
      },
      {
        id: "finance",
        title: "Finance",
        type: "collapse",
        icon: <Icon.Clock size={12} color="deeppink" />,
        children: [
          {
            id: "finance1",
            title: "Finance",
            type: "item",
            icon: <Icon.Circle size={10} color="black" />,
            permissions: ["admin", "editor"],
            navLink: "/company/mymoney/finance/finance1"
          },
          {
            id: "delinquent",
            title: "Delinquent",
            type: "item",
            icon: <Icon.Circle size={10} color="green" />,
            permissions: ["admin", "editor"],
            navLink: "/company/mymoney/finance/delinquent"
          },
          {
            id: "forecast",
            title: "Forecast",
            type: "item",
            icon: <Icon.Circle size={10} color="blue" />,
            permissions: ["admin", "editor"],
            navLink: "/company/mymoney/finance/forcast"
          },
          {
            id: "CC Expiring",
            title: "CC Expiring",
            type: "item",
            icon: <Icon.Circle size={10} color="red" />,
            permissions: ["admin", "editor"],
            navLink: "/company/mymoney/finance/ccexpiring"
          },
          {
            id: "testing",
            title: "Testing",
            type: "item",
            icon: <Icon.Circle size={10} color="orange" />,
            permissions: ["admin", "editor"],
            navLink: "/company/mymoney/finance/testing"
          },

        ]
      },
    ]
  },
  {
    id: "statistics",
    title: "Statistics",
    type: "collapse",
    icon: <Icon.BarChart size={25} color="Chocolate" />,
    children: [
      {
        id: "active students",
        title: "Active Students",
        type: "item",
        icon: <Icon.Users size={12} color="green" />,
        permissions: ["admin", "editor"],
        navLink: "/app/statistics/active-student"
      },
      {
        id: "active trial",
        title: "Active Trial",
        type: "item",
        icon: <Icon.BarChart size={12} color="blue" />,
        permissions: ["admin", "editor"],
        navLink: "/app/statistics/active-trail"
      },
      {
        id: "lead",
        title: "Lead",
        type: "item",
        icon: <Icon.CheckSquare size={12} color="deeppink" />,
        permissions: ["admin", "editor"],
        navLink: "/app/statistics/lead"
      },
      {
        id: "former student",
        title: "Former Student",
        type: "item",
        icon: <Icon.Circle size={12} color="green" />,
        permissions: ["admin", "editor"],
        navLink: "/app/statistics/former-student"
      },
      {
        id: "former trial",
        title: "Former Trial",
        type: "item",
        icon: <Icon.BarChart2 size={12} color="black" />,
        permissions: ["admin", "editor"],
        navLink: "/app/statistics/former-trail"
      },
      {
        id: "after school",
        title: "After school",
        type: "item",
        icon: <Icon.Book size={12} color="red" />,
        permissions: ["admin", "editor"],
        navLink: "/app/statistics/after-school"
      },
      {
        id: "camp",
        title: "Camp",
        type: "item",
        icon: <Icon.UserX size={12} color="orange" />,
        permissions: ["admin", "editor"],
        navLink: "/app/statistics/camp"
      },
    ]
  },
  {
    id: "documents",
    title: "Documents",
    type: "item",
    icon: <Icon.File size={25} color="purple" />,
    permissions: ["admin", "editor"],
    navLink: "/company/documents"
  },
  {
    id: "setting",
    title: "Settings",
    type: "item",
    icon: <Icon.Settings size={25} color="red" />,
    permissions: ["admin", "editor"],
    navLink: "/company/settings"
  }

]

const AdminNavigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={25} color="orangered" />,
    navLink: "/admin/dashboard"
  },
  {
    id: "usermanagement",
    title: "User Management",
    type: "item",
    icon: <Icon.User size={25} color="deeppink" />,
    navLink: "/app/member/list"
  },
  {
    id: "hq_dashboard",
    title: "HQ Dashboard",
    type: "item",
    icon: <Icon.UserCheck size={25} color="darkcyan" />,
    navLink: "/"
  },
  {
    id: "studentmanagemnt",
    title: "Student Managemnt",
    type: "item",
    icon: <Icon.User size={25} color="goldenrod" />,
    navLink: "/"
  },
  {
    id: "students",
    title: "Students (889)",
    type: "item",
    icon: <Icon.ShoppingCart size={25} color="blue" />,
    navLink: "/"
  },
  {
    id: "eCommerce",
    title: "Shop",
    type: "collapse",
    icon: <Icon.ShoppingCart size={25} color="blue" />,
    children: [
      {
        id: "member",
        title: "Membership",
        type: "item",
        icon: <Icon.Circle size={12} color="red" />,
        permissions: ["admin", "editor"],
        navLink: "/admin/shop/membership"
      },
      {
        id: "shop",
        title: "Store",
        type: "item",
        icon: <Icon.ShoppingCart size={12} color="red" />,
        permissions: ["admin", "editor"],
        navLink: "/ecommerce/shop"
      }
    ]
  },
  {
    id: "activetrials",
    title: "Active Trials (2)",
    type: "item",
    icon: <Icon.Shield size={25} color="darkgreen" />,
    navLink: "/"
  },
  {
    id: "leads",
    title: "Leads (1)",
    type: "item",
    icon: <Icon.BarChart size={25} color="Chocolate" />,
    navLink: "/"
  },
  {
    id: "formerstudents",
    title: "Former Students",
    type: "item",
    icon: <Icon.UserX size={25} color="purple" />,
    navLink: "/"
  },
  {
    id: "misscall",
    title: "Miss you call",
    type: "item",
    icon: <Icon.PhoneMissed size={25} color="goldenrod" />,
    navLink: "/"
  },
  {
    id: "othersetting",
    title: "Other Settings",
    navLink: "/company/settings",
    type: "item",
    icon: <Icon.Settings size={25} color="red" />,
  },
  {
    id: "renewals",
    title: "Renewals",
    type: "item",
    icon: <Icon.RefreshCcw size={25} color="deeppink" />,
    navLink: "/"
  },
  {
    id: "bithday",
    title: "Bithday",
    type: "item",
    icon: <Icon.Gift size={25} color="purple" />,
    navLink: "/"
  },
  {
    id: "candidates",
    title: "Candidates",
    type: "item",
    icon: <Icon.Users size={25} color="Chocolate" />,
    navLink: "/"
  },
  {
    id: "testing",
    title: "Testing",
    type: "item",
    icon: <Icon.Sliders size={25} color="darkgreen" />,
    navLink: "/"
  },
  {
    id: "newdashboard",
    title: "New Dashboard",
    type: "item",
    icon: <Icon.Plus size={25} color="orangered" />,
    navLink: "/"
  },

]

export default {
  SchoolNavigationConfig: SchoolNavigationConfig,
  AdminNavigationConfig: AdminNavigationConfig
}
