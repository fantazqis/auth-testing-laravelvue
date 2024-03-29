import example from './components/ExampleComponent.vue'
import home from './components/HomePage.vue'
import login from './components/LoginPage.vue'
import dashboard from './components/DashboardComponent.vue'
import table from './components/TableComponent.vue'

export const routes = [
    // {
    //     path: "/",
    //     name: "LandingPages",
    //     component: example
    // },
    {
        path: "/",
        name: "home",
        component: home
    },
    {
        path: "/login",
        name: "login",
        component: login
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: dashboard
    },
    {
        path: "/table",
        name: "table",
        component: table
    }
]