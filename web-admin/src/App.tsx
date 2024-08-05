import './App.css'
import {Layout} from "./layout";
import {IndexPage} from "./pages/index";
import {LoginPage} from "./pages/login";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import  'normalize.css'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "index",
                element: <IndexPage/>,
            },
            {
                path: "login",
                element: <LoginPage/>,
            },
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App
