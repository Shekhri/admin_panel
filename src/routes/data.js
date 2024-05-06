import Boss from "../pages/boss";
import Chances from "../pages/chances";
import Contact from "../pages/contact";
import DashboardPages from "../pages/dashboard";
import News from "../pages/news";
import NotFound from "../pages/notFound";
import Projects from "../pages/projects";

export const dataRouter = [
    {
        id : 1,
        path : "/boss",
        element : <Boss/>
    },
    {
        id : 2,
        path : "/chances",
        element : <Chances/>
    },
    {
        id : 3,
        path : "/DashboardPages",
        element : <DashboardPages/>
    },
    {
        id : 4,
        path : "/contact",
        element : <Contact/>
    },
    {
        id : 5,
        path : "/news",
        element : <News/>
    },
    {
        id : 6,
        path : "/*",
        element : <NotFound/>
    },
    {
        id : 7,
        path : "/",
        element : <Projects/>
    }
]