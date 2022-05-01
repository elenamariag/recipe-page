import "./logIn.css";
import React, {useState} from "react";
import Header from "../../components/header/Header";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

function Login (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userRole, setUserRole] = useState('');
    const [username, setUsername] = useState('')

    const navigate=useNavigate();

    function ChangeShow(id){
        if(id=="h-text1"){
            document.getElementById("h-text1").classList.remove("dull-text")
            document.getElementById("h-text2").classList.add("dull-text")

            document.getElementById("mysignup").style.transform="translateX(100%)"
            setTimeout(()=>{
                document.getElementById("mysignup").style.display="none"
                document.getElementById("mylogin").style.display="block"
            },200)

            setTimeout(()=>{
                document.getElementById("mylogin").style.transform="translateX(0%)"
            },200)

        }else if(id=="h-text2"){
            document.getElementById("h-text2").classList.remove("dull-text")
            document.getElementById("h-text1").classList.add("dull-text")
            document.getElementById("mylogin").style.transform="translateX(-100%)"
            setTimeout(()=>{
                document.getElementById("mylogin").style.display="none"
                document.getElementById("mysignup").style.display="block"
            },200)
            setTimeout(()=>{
                document.getElementById("mysignup").style.transform="translateX(0%)"
            },200)
        }
    }
    const loginScreen=async(e)=>{
        e.preventDefault()
        if(password.length==0 || username.length==0){
            alert("Please fill in all the fields")
        }else{
            let user={
                "username": username,
                "password" : password,
            }
            const response=await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signin",user,{headers:{"Content-Type":"application/json"}})

            if(response.data){
                sessionStorage.setItem("USER",JSON.stringify(response.data))
                navigate("/dashboard")
            }

            console.log(JSON.parse(sessionStorage.getItem("USER")))

        }

    }
    const SignupScreen=async(e)=>{
        e.preventDefault()
        let  user;
        if(email.length==0 || password.length==0 || userRole.length==0 || username.length==0 ){
            alert("please fill in all the fields")
        }else{
            if (password.length<6){
                alert("password needs more than 6 characters")
            } else if (!email.includes('@')){
                alert ("email does not include '@' ")
            }
            else if(userRole.includes(',')){
                let userP=userRole.split(',')
                user={
                    "username": username,
                    "email" : email,
                    "password" : password,
                    "role": userP
                }
            }else{
                user={
                    "username": username,
                    "email" : email,
                    "password" : password,
                    "role": [userRole]
                }
            }
        }

        const response=await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signup",user,{headers:{"Content-Type":"application/json"}})
        if(response){
            alert(response.data.message)
            alert("Please go to login and do your thangg 👌")
        }else{
            alert("error")
        }
    }
    return (
        <>
            <Header />
            <div className='home-container'>
                <div className="login-container">
                    <div className="login-header">
                        <a className="header-text" id="h-text1" onClick={() => ChangeShow("h-text1")}>Login</a>
                        <a className="header-text1 dull-text" id="h-text2" onClick={() => ChangeShow("h-text2")}>Signup</a>
                    </div>

                    <div className="my-credentials-container">
                        <div className="login-screen" id="mylogin">
                            <div className="input-group mb-3">
                                <input type="text" name="email" onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="home-btn">
                                <button type="button" onClick={loginScreen} className="hm-btn">Login</button>
                            </div>
                        </div>

                        <div className="signup-screen" id="mysignup">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="User Name" name="username" onChange={(e) => setUsername(e.target.value)} aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)}  aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group">
                                <input type="password" className="form-control" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)}  aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="User role" name="user-role" onChange={(e) => setUserRole(e.target.value)}   aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="home-btn">
                                <button type="button" onClick={SignupScreen} className="hm-btn">Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;