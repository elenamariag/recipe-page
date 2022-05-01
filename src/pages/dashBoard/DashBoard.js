import React,{useState,useEffect} from 'react';
import "./dashboard.css";
import HeaderOne from "../../components/headerOne/HeaderOne";
import {useNavigate} from "react-router-dom";
import Card from "../../components/card/Card";
import profile from "../../assets/profile.png";
import axios from "axios";


const Dashboard = () => {
    const [show,setShow]=useState(false)
    const[data,setdata]=useState([])
    const[fetchR,setFetchR]=useState(false)
    const[SearchData,SetSearchData]=useState("")
    const[loader,setLoader]=useState("")
    const navigate=useNavigate()

    const APP_ID = "a52b4d43";
    const APP_KEY = "e0e5c667605f5e91d8275c973531b80a";

    const ButtonClicked=()=>{
        setShow(!show)
    }
    const SignOut=()=>{
        sessionStorage.clear("USER")
        navigate("/")
    }
    const SearchR=(d)=>{
        if (sessionStorage.getItem("USER")!=null && sessionStorage.getItem("USER")!=undefined ){
            SetSearchData(d)
            GetData()
            FetchData()
            setFetchR(true)
        }

    }
    const FetchData=async()=>{
        setLoader("....Loading")
        setdata([])
        const response = await axios.get(`https://api.edamam.com/search?q=${SearchData}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        if(response.data.hits.length==0){
            setLoader("data not found")
        }else{
            setLoader("")
        }
        setdata(response.data.hits)
    }
    const GetData=async()=>{
    }
    useEffect(()=>{
        GetData()
        setFetchR(false)
    },[data,SearchData])

    useEffect(()=>{

        if(sessionStorage.getItem("USER")===null){
            navigate("/")
        }else{

        }
    })
    const CardData=(r)=>{
        const cardstate={
            ingredients:r.recipe.ingredients,
            origin:r.recipe.cuisineType,
            details:r.recipe.ingredientLines,
            name:r.recipe.label,
            image:r.recipe.image

        }
        navigate("/product",{state:cardstate})
    }
    return (
        <>
            <HeaderOne ButtonClicked={ButtonClicked} SearchR={SearchR}/>
            <div className='dashboard-container'>

                <h1 className='api-search'>{SearchData}</h1>
                <div className='full-width'>
                    <div className='add-recipe-container Cards-container'>
                        <div className='full-width'>
                            {data.length>0?
                                <>
                                    {data.map((r)=>{
                                        return<Card CardData={()=>CardData(r)} title={r.recipe.label} img={r.recipe.image}/>
                                    })}
                                </>:<div> {loader} </div>}
                        </div>
                    </div>
                    <div className='right-menu' style={show==false?{transition: "all .2s ease" ,transform: "translateX(200%)"}:{transition: "all .2s ease" , transform: "translateX(0%)"}}>
                        <div className='right-dash'>
                            <div className='user-profile-container'>
                                <img src={profile} />
                                <div className='sign-out-btn' onClick={SignOut}>Sign Out</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;