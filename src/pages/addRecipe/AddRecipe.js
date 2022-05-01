import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "./addrecipe.css";
import HeaderOne from '../../components/headerOne/HeaderOne';
import profile from '../../assets/profile.png';
import '../dashBoard/dashboard.css';

const AddRecipe = () => {
    const location=useLocation()
    const[foodtitle,setfoodtitle]=useState("")
    const [show,setShow]=useState(false)
    const cardstate={
        ingredients:[],
        orign:'',
        details:[],
        name:'',
        image:'',
        category:''

    }

    const[gredients,setGredients]=useState([])
    const[gredientName,setGredientName]=useState("")


    const[direction,setDirection]=useState([])
    const[directionName,setDirectionName]=useState("")

    const[myImage,setMyImage]=useState('./camera.png')
    const[selectedImg,setSelectImg]=useState(false)

    const[origin,setOrigin]=useState("")
    const navigate=useNavigate()

    const ButtonClicked=()=>{

        setShow(!show)
    }
    const SignOut=()=>{
        sessionStorage.clear("USER")
        navigate("/")
    }


    const ImageHandler=(e)=>{

        setSelectImg(true)
        const reader=new FileReader();
        reader.addEventListener("load",()=>{
            setMyImage(reader.result)

        })
        reader.readAsDataURL(e.target.files[0])


    }
    const SubmitRecipe=(e)=>{
        e.preventDefault()
        let c=document.getElementById("category").value
        cardstate.ingredients=gredients
        cardstate.orign=origin
        cardstate.details=direction
        cardstate.name=foodtitle
        cardstate.image=myImage
        cardstate.category=c

        let checkarr=JSON.parse(localStorage.getItem("myrecipe"))

        if(checkarr==undefined || checkarr==null){
            let myarr=[]
            myarr.push(cardstate)
            localStorage.setItem("myrecipe",JSON.stringify(myarr))
        }else{
            let myarr=[...checkarr,cardstate]
            localStorage.setItem("myrecipe",JSON.stringify(myarr))
        }

        alert("Your recipe is being uploaded 😋 ")
        navigate('/myrecipe')

    }


    return (
        <>
            <HeaderOne ButtonClicked={ButtonClicked} />

            <div className='MyRecipies'>
                <div className='add-recipe-container'>

                    <div className='recipe-container'>

                        <div className='product-img-container'>
                            <div className='recipe-header'>Addrecipe</div>
                            <div className='recipe-img'>
                                {selectedImg? <img src={myImage}/>: <img src={myImage}/>}
                            </div>

                            <div className='image-chooser'>

                                <input type="file" onChange={ImageHandler} accept="image/*"/>
                            </div>
                            <div className='product-name'>
                                <input placeholder='Food Title' className='select-food-title' onChange={(e)=>setfoodtitle(e.target.value)}/>
                            </div>
                        </div>
                        <div className='ingridents-container'>
                            <div className='product-ingredients'>
                                <div className='ingredient-header'>Ingredients</div>
                                <div className='addingredient-header'>
                                    <div className='add-ingredient'>
                                        <input placeholder='Add-ingredients' className='Add-ingredients' onChange={(e)=>setGredientName(e.target.value)}/>
                                        <span className='AddButton' onClick={(e)=>{
                                            e.preventDefault()

                                            setGredients([...gredients,gredientName])
                                        }}>+</span>
                                    </div>


                                </div>
                                <div className='ingredient-list-container'>
                                    {gredients.map((data,index)=>{
                                        return(
                                            <div className='addingredient-header'>{data}</div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='details-container'>
                                <div className='ingredient-header'>Details</div>
                                <div className='addingredient-header'>
                                    <div className='add-ingredient'>
                                        <input placeholder='Add-Details' className='Add-ingredients' onChange={(e)=>setDirectionName(e.target.value)}/>
                                        <span className='AddButton' onClick={(e)=>{
                                            e.preventDefault()

                                            setDirection([...direction,directionName])
                                        }}>+</span>
                                    </div>


                                </div>
                                <div className='ingredient-list-container'>
                                    {direction.map((data,index)=>{
                                        return(
                                            <div className='addingredient-header'>{data}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='product-img-container'>

                            <div>
                                <p className='origin-header'>Origin </p>

                            </div>
                            <div>
                                <input className='origin-text' placeholder='Enter Origin' onChange={(e)=>setOrigin(e.target.value)}/>
                            </div>
                            <div className='select-category'>

                                <select name="category" id="category">
                                    <option value="select-category">Select category</option>
                                    <option value="none">none</option>
                                    <option value="vegetarian">vegetarian</option>
                                    <option value="vegan">vegan</option>
                                    <option value="pescatarian">pescatarian</option>
                                    <option value="gluten-free">gluten-free</option>
                                    <option value="dairy-free">dairy-free</option>
                                    <option value="peanut-free">peanut-free</option>
                                </select>
                            </div>
                            <div className='upload-recipe-btn-container'>
                                <div className='upload-recipe-btn' onClick={SubmitRecipe}>
                                    Upload my delicious recipe
                                </div>
                            </div>
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

export default AddRecipe;