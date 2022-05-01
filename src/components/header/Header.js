import './header.css';
import logo from '../../assets/forkknife.png';
import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import menu from "../../assets/menu.jpeg";

const Header = () => {
    const navigate=useNavigate()
    const[showN,setShowN]=useState("none")
    function toggleNav(el){
        var elem = document.getElementById(el);
        elem.style.transition = "all 1s ease-in-out";
        elem.style.display="block"
        if(window.getComputedStyle(elem).height==="150px"){
            elem.style.height = "0px";
        }else{
            elem.style.height = "150px";
        }


    }
    const ChangeActive=(e)=>{
        e.preventDefault()
        if(e.target.name=="home"){
            document.getElementById("recepie").classList.remove("link-active")
            if(document.getElementById("home").classList.contains("link-active")){

            }else{
                document.getElementById("home").classList.add("link-active")
            }
            navigate("/")


        }else if(e.target.name=="recepie"){
            document.getElementById("home").classList.remove("link-active")
            document.getElementById("recepie").classList.add("link-active")

        }
    }
    useEffect(()=>{
        function Resize(){

            if(window.screen.width>750){
                setShowN("none")

            }else{
                setShowN("block")

            }
        }
        window.addEventListener("resize",Resize)
    })

    return (
        <div>
            <section className="home-header">
                <div className="homecontainer">
                    <div className="full-width">
                        <div className="logo-box">
                            <div className="logo-container">
                                Our Cooking Journal <img  className='logo-img' src={logo}/>
                            </div>
                        </div>
                        <div className="search-box">
                            <div className="nav-list">
                                <ul>
                                    <li>
                                        <div className='select-container'>
                                            <div className='select-input-container'>
                                                <input placeholder='search for recepies' />
                                                <i className="fa fa-search" style={{fontSize:"20px",color:"black"}}></i>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="nav-box">
                            <div className="home-btn-container">
                                <div className='nav-list'>
                                    <ul>
                                        <li><a href="/" className='link-active' name="home" id="home" onClick={ChangeActive}>Home</a></li>

                                        <li><a href="" name="recepie" id="recepie" onClick={ChangeActive}>My Recipes</a></li>

                                    </ul>
                                    <a className="home-login-btn" href='/login'>Login</a>
                                    <div className="menu-icon" onClick={()=>toggleNav('ShowNav')} >
                                        <img src={menu}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div class="show-nav" id="ShowNav" style={{display:showN}}>
                <ul>
                    <li><a href="" className='link-active' name="home" id="home" onClick={ChangeActive}>Home</a></li>

                    <li><a href="" name="recepie" id="recepie" onClick={ChangeActive}>My Recipes</a></li>

                    <li>
                        <div className='select-container'>
                            <div className='select-input-container'>
                                <input placeholder='search for recepies' />
                                <i className="fa fa-search" style={{fontSize:"20px",color:"black"}}></i>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="home-btn-container">
                            <a class="home-login-btn" href='/login'>Login</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;