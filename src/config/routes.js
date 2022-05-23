import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic"

import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn/SignIn"
import CrearAvion from "../pages/Admin/Aviones/CrearAvion"
import EditarAvion from "../pages/Admin/Aviones/EditarAvion"

import Home from "../pages/home";
import Contact from "../pages/contact";
import Profile from "../pages/Client/profile"

import NotFound from "../pages/not_found";



const routesAdmin = [
  {
    path: "/admin/",
    layout: LayoutAdmin,
    page: AdminHome,
  },
  {
    path: "/admin/login",
    layout: LayoutAdmin,
    page: AdminSignIn,
  },
  {
    path: "/admin/crear-avion",
    layout: LayoutAdmin,
    page: CrearAvion,
  },
  {
    path: "/admin/editar-avion/:id",
    layout: LayoutAdmin,
    page: EditarAvion,
  },
]

const routesClient = [
  {
    path: "/",
    layout: LayoutBasic,
    page: Home,
  },
  {
    path: "/contact",
    layout: LayoutBasic,
    page: Contact,
  },
  {
    path: "/profile",
    layout: LayoutBasic,
    page: Profile,
  }
]

const routeNotFound = [
  {
    path: "*",
    layout: LayoutBasic,
    page: NotFound,
  }
]

const routes = [...routesAdmin, ...routesClient, ...routeNotFound]
export default routes;