import "./headerone.css";
import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/forkknife.png';
import menu from '../../assets/menu.jpeg';


const HeaderOne = (props) => {
    const navigate=useNavigate()
    const[showN,setShowN]=useState("none")
    const [Sd,setSd]=useState("");
    function toggleNav(el){
        let elem = document.getElementById(el);
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
            document.getElementById("recepie1").classList.remove("link-active1")
            if(document.getElementById("home1").classList.contains("link-active1")){

            }else{
                document.getElementById("home1").classList.add("link-active1")
            }
            navigate("/dashboard")


        }else if(e.target.name=="recepie"){
            document.getElementById("home1").classList.remove("link-active1")
            document.getElementById("recepie1").classList.add("link-active1")
            navigate("/myrecipe")
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
            <section className="home-header1">
                <div className="container">
                    <div className="full-width1">
                        <div className="logo-box1">
                            <div className="logo-container1">
                                Our Cooking Journal <img  className='logo-img' src={logo}/>
                            </div>
                        </div>
                        <div className="search-box1">
                            <div className="nav-list">
                                <ul>
                                    <li>
                                        <div className='select-container1'>
                                            <div className='select-input-container1'>
                                                <input placeholder='search for recipes' onChange={(e)=>setSd(e.target.value)} />
                                                <i className="fa fa-search"onClick={()=>props.SearchR(Sd)}  style={{fontSize:"20px",color:"black",cursor:"pointer"}}></i>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="nav-box1">
                            <div className="home-btn-container1">
                                <div className='nav-list'>
                                    <ul>
                                        <li><a href="/home" className='link-active1' name="home" id="home1" onClick={ChangeActive}>Home</a></li>
                                        <li><a href="" name="recepie" id="recepie1" onClick={ChangeActive}>My Recipes</a></li>
                                    </ul>

                                    <div className="menu-icon1" onClick={()=>props.ButtonClicked()} >
                                        <img src={menu}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default HeaderOne;