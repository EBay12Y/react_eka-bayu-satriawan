import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const auth = true;
    return auth ? <>{children}</> : <Navigate to="/loginformik" />;
};

export default PrivateRoute;
