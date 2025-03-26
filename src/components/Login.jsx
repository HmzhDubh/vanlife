import { useState } from 'react'
import { Link, redirect, Form } from "react-router-dom"
import { loginUser } from "../api.js"

export async function action({request}){
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const data = await loginUser({email, password})
    console.log(data)
    localStorage.setItem("loggedin", true)
    return redirect('/host')
}


export default function Login() {

    return(
        <div className="flex flex-col items-center pb-40">
            <h1 className="text-3xl font-bold m-10">Sign in to your account</h1>
            <Form method="post" className="flex flex-col items-center" replace>
                <input
                    className="rounded p-2 ps-32 pe-32 border text-center"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    >
                </input>
                <input
                    className="rounded p-2 ps-32 pe-32 border text-center"
                    name="password"
                    type="password"
                    placeholder="Password"
                    >

                </input>

                <button className="bg-yellow-600 m-10 rounded w-full p-3 text-white ">Sign In</button>

                <span>Don't have an account? <Link className="text-yellow-600">Create one now</Link></span>

            </Form>
        </div>

    )

}