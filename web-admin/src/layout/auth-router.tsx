import {
    Outlet,
    Navigate,
    useLocation
} from 'react-router-dom'
import useAuthStore from "../store/useAuthStore.ts";
const  AuthRouter = () => {
    const isLogin = useAuthStore(state => state.isLogin);
    const location = useLocation();

    if (!isLogin && location.pathname !== '/login'){
        return <Navigate to="/login" replace={true} />;
    }

    return (
        <Outlet />
    )
}

export default AuthRouter;