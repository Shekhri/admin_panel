import Boss from "../pages/boss";
import Chances from "../pages/chances";
import Contact from "../pages/contact";
import DashboardPages from "../pages/dashboard";
import News from "../pages/news";
import Login from "../pages/Login";
import NotFound from "../pages/notFound";
import Projects from "../pages/projects";

export const dataRouter = [
    {
        id: 1,
        link: "/",
        element: <Login/>
    },
    {
        id : 2,
        link : "/*",
        element : <NotFound/>
    },
    {
        id: 3,
        link: window.localStorage.getItem('AuthToken') &&  "/admin/dashboard",
        element: window.localStorage.getItem('AuthToken') && <DashboardPages/> 
    },
    {
        id: 4,
        link:  window.localStorage.getItem('AuthToken') &&  "/projects",
        element:  window.localStorage.getItem('AuthToken') && <Projects/>
    },
    {
        id: 5,
        link: window.localStorage.getItem('AuthToken') &&  "/news",
        element: window.localStorage.getItem('AuthToken') && <News/> 
    },
    {
        id: 6,
        link:  window.localStorage.getItem('AuthToken') &&  "/contact",
        element:  window.localStorage.getItem('AuthToken') && <Contact/>
    },
    {
        id: 7,
        link:  window.localStorage.getItem('AuthToken') &&  "/chances",
        element:  window.localStorage.getItem('AuthToken') && <Chances/>
    },
    {
        id: 8,
        link:  window.localStorage.getItem('AuthToken') &&  "/boss",
        element:  window.localStorage.getItem('AuthToken') && <Boss/>
    },
    
]