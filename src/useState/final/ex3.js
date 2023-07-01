import { useState } from "react";


const Index6=()=>{
   

const [list, setlist]=useState([]);

    const [message,setmesssage]=useState({
        text:"",
        id:"",
    });

    const[editingItem, seteditingItem]= useState({
        id:"",
        isEditing:false,
    });

    const chengeMessage= (e)=>{
        setmesssage({
        ...message,
        text:e.target.value,
        });
    };

const hadlesubmit=(e)=>{
    e.preventDefault();
    let newTodo={
        text:message.text,
        id:new Date().getTime().toString()
    };
    setlist([...list, newTodo]);
    setmesssage({
        text:"",
        id:"",
    })
};

const handledelete=(id) =>{
    let newTodos=list.filter((eachItem)=>{
        return eachItem.id !== id;
    })
    setlist(newTodos);
}
const changeEditstate =(id)=>{
    
    seteditingItem({
        ...editingItem,
        id:id,
        isEditing:true,
    });

 let editableitem=list.find((eachItem)=>eachItem.id===id);
 setmesssage ({
    ...message,
    text:editableitem.text,
    id:editableitem.id,
 });
 console.log(editableitem);
};

const handleedit=(e)=>{
    e.preventDefault();
    console.log("previou todos", list);
    let newTodos=list.map((eachItem)=>{
        if(eachItem.id===editingItem.id)
        {
            return{
            text:message.text,
            id:editingItem.id
            };

        }
        else{
            return eachItem;
        }
    })
    setlist(newTodos);
    setmesssage({
        text:"",
        id:""
    });
    seteditingItem({
        id:"",
        isEditing:"false",
    });
};

    return(
        <div>
            <form>
                <input type="text"
                name="message"
                id="message"
                placeholder="enter your name"
                value={message.text}
                onChange={chengeMessage}

                />
                {editingItem.isEditing ? (<button onClick={handleedit}type="submit">

                    edit
                </button>
                ):(
                <button onClick={hadlesubmit} type="submit">add</button>
                )}
            </form>
            <hr />
            {list.length===0 && <h4> there is no item in the list</h4>}
            <ul>
                {
                    list.map((eachItem) =>{
                        const {text, id}=eachItem;
                        return <li key={id}>
                            <span>{text}</span>
                            <button onClick={() =>changeEditstate(id)}>edit</button>
                            <button onClick={()=> handledelete(id)}>delete</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default Index6;