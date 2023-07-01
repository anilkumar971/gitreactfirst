import { useReducer } from "react";



const reducer= ( state,action)=>{
    if(action.type === "DELETE_PERSON"){
        const newpersons=state.data.filter((eachItem)=>{
            return eachItem.id !==action.payload;
        });
       return{
        ...state,
        data:newpersons,
        length:state.length-1,
       };
    }
    return state;
};

const First =()=>
{
    const intialState ={
        data:[
            { id:"65",firstName:"anil",email:"anil@gmail.com"},
            { id:"76",firstName:"kumar",email:"kumar@gmail.com"},
        ],
        length:2,
    };

    const [state ,dispatch ]=useReducer(reducer,intialState);

    const handledelete=(id)=>{
        dispatch({
            type:"DELETE_PERSON",
            payload:id


        });
    };

    const handleedit =(id)=>{
        dispatch({
            type:"UPDATE_PERSON",
            payload:id
        })
    }
    return(
        <div>
            <h1>current users length :{state.length}</h1>
            {
            state.data.map((eachItem) => {
                const {id,firstName,email}=eachItem
                 return (
                  <div  key={id}>
                  <h3>{firstName}</h3>
                  <p>{email}</p>

                  <button onClick={() =>handledelete(id)}>delete</button>
                  <button onClick={() =>handleedit(id)}>edit</button>

                </div>
             );
            })
        }
        </div>
    );
};
export default First;