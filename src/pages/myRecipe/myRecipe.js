import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../dashBoard/dashboard.css';
import HeaderOne from '../../components/header/HeaderOne';
import Card1 from '../../components/Card/Card1';
import './myrecipe.css';
import profile from "../../assets/profile.png";

const MyRecipe = () => {
    const[myRecipeData,setMyRecipeData]=useState([])

    const [show,setShow]=useState(false)

    const[loader,setLoader]=useState("data does not exist")
    const navigate=useNavigate()

    const ButtonClicked=()=>{
        setShow(!show)
    }
    const SignOut=()=>{
        sessionStorage.clear("USER")
        navigate("/")
    }

    useEffect(()=>{

        let l=JSON.parse(localStorage.getItem("myrecipe"))
        if(l==null ||l==undefined){

        }else{
            setMyRecipeData(l)

            myRecipeData.map((d)=>{
            })
        }

    },[])


    return (
        <>
            <HeaderOne ButtonClicked={ButtonClicked}/>
            <div className='dashboard-container'>

                <h1 className='api-search'>My Recipe</h1>
                <div className='Add-recipe-btn-container'>
                    <div className='add-recipe-btn' onClick={(e)=>{
                        e.preventDefault()
                        navigate("/addrecipe")
                    }}>
                        Add Recipe
                    </div>
                </div>
                <div className='full-width'>
                    <div className='add-recipe-container Cards-container'>
                        <div className='full-width'>
                            {myRecipeData.length>0?
                                <>
                                    {myRecipeData.map((r)=>{return <Card1 title1={r.name} img1={r.image}/>})}
                                </> :<div> {loader} </div>}
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

export default MyRecipe