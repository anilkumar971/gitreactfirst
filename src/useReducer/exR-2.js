import { useEffect, useReducer, useState  } from "react";

  const reducer =(state,action)=>
  {
    if (action.type ==="UPDATE_USERS_DATA")
    {
        return{
            ...state,
            usersdata:action.payload,
        };
    }
    if (action.type ==="LOADING")
    {
        return{
            ...state,
            isLoding:action.payload,
        };
    }
    if(action.type ==="DELETE_USER")
    {
        const newUsers=state.usersdata.filter(
            (eachUser)=>eachUser.id !==action.payload
        );
    return{
        ...state,
        usersdata:newUsers,
    };
    }
    if(action.type ==="ONCLICK_EDIT")
    {
        return{
            ...state,
            isEditing:action.payload,
        }
    }
    if(action.type ==="UPDATE_USER")
    {
        const newUsers=state.usersdata.map((eachUser)=>{
            if(eachUser.id === action.payload.id)
            {
                return{
                    id:action.payload.id,
                    name:action.payload.name,
                    email:action.payload.email,
                };
            }else{
                return eachUser;
            }
        });
        return{
            ...state,
            usersdata:newUsers,
        }
    }


    return state;
  }
 const First1 =()=>{
    const fetchusersdata=async(URL)=>{

        dispatch({ type:"LOADING",payload:true})
        dispatch({type:"ERROR",payload:{status:false,msg:""}})
       try{
        const response =await  fetch(URL);
        const data=await response.json();
        dispatch({ type:"UPDATE_USERS_DATA", payload:data})
        dispatch({ type:"LOADING",payload:false})
        dispatch({type:"ERROR",payload:{status:false,msg:""}})

       }
       catch(error)
       {
         console.log(error)
         dispatch({ type:"LOADING",payload:false})
            dispatch({type:"ERROR",payload:{status:true,msg: error.message}});
            
           // dispatch({type:"ERROR",payload:{status:false,msg:""}})
       }
    };

    useEffect(()=>{
    fetchusersdata('https://jsonplaceholder.typicode.com/users');
    },[])

     const intialState ={
        usersdata:[],
        isLoding:false,
        isError:{status:false,msg:""},
        isEditing:{status:false,id:"" ,name:"",email:""},
     };

    const [state ,dispatch ]=useReducer(reducer,intialState);

    const handledelete =(id)=>{
        dispatch({ type:"DELETE_USER",payload:id})
    }
    const updateData=(id,name,email)=>{
        dispatch({type:"UPDATE_USER",payload:{
            id,name,email
        },
    });
    dispatch({typer:"ONCLICK_EDIT",
     payload:{status:false,id:"",name:"",email:""},
    })
    };

    if(state.isLoding)
    {
        return(
            <div>
                <h3>Loading....</h3>
            </div>
        )
    }
    return(
        <div>
            <h1>users information</h1>
            {state.isEditing?.status && <EditFormContainer id={state.isEditing.id}
            comingtitle= {state.isEditing.name}  comingemail={state.isEditing.email}
            updateData={updateData}/>}
            {
                state.usersdata.map((eachUser)=>{
                    const {id,name,email}=eachUser;    
                    return(
                        <div key={id} style={{background:"lightblue"}}>
                          <h3>{name}</h3>
                          <p>{email}</p>
                          <button onClick={()=>handledelete(id)}>delete</button>
                          <button onClick={()=>dispatch({type:"ONCLICK_EDIT",
                            payload:{status:true,id:id,name:name,email},})
                            }>edit</button>

                            </div>
                    )          
                  })
            }
        </div>
    )
 };

 const EditFormContainer =( {id,comingtitle, comingemail,updateData})=>{
 const [title ,settitle]=useState( comingtitle || "");
 const [email ,setemail]=useState( comingemail || "");

    return(

        <>
        <form>
            <input type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) =>settitle(e.target.value)} />
            <input type="email" 
            name="email"
            id="email" 
            value={email}
            onChange={(e) => setemail(e.target.value)} />
            <button onClick={()=>updateData(id,title,email)}>update Data d</button>

        </form>
        
        </>
    )
 }
 export default First1;