import { lazy } from "react";



const Dashboard = lazy(() => import("../pages/Dashboard/index.js"));


const CoreRoutes = [
  {
    path: "/home",
    component: Dashboard,
    name:'home'
  },

]

let routes = [...CoreRoutes]

export default routes;