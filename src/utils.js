import { redirect } from "react-router-dom";

export function requireAuth() {
    const isLoggedIn = localStorage.getItem("loggedin");
    console.log(isLoggedIn)
    if (!isLoggedIn) {
        return redirect("/");
    }

    return null;
}