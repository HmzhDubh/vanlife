import { useRouteError, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AuthError() {
    const error = useRouteError();
    const navigate = useNavigate();

    useEffect(() => {
        if (error?.status === 302) {
            navigate("/login", { replace: true }); // ✅ Handle redirect manually
        }
    }, [error, navigate]);

    return <p>Redirecting...</p>;
}