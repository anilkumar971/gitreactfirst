import { useEffect, useState } from "react";

  

const URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const Final3 =()=>{

    const[drinksdata, setdrinksdata]=useState([]);
    const[searchTeram, setsearchTeram]=useState("");
    const[loading, setloading]=useState(false);
    const[iserror,setiserror]=useState({status:false,msg:""})
   
    const fetchDrink = async(apiURL)=>{
        setloading(true)
        setiserror({status:false, msg:""});
    try{
        const response = await fetch(apiURL);
        const {drinks}= await response.json();
        setdrinksdata(drinks);
        setloading(false);
        setiserror({status:false, msg:""})
        if(!drinks){
        throw new Error("data not found");
    }
    }
    catch (error)
    {
        console.log(error);
        setloading(false)
        setiserror({
            status:true,
            msg: error.message ||"something went wrong..",});
    }

   };

   useEffect(() =>{
    const correctURL=`${URL}${searchTeram}`
    fetchDrink(correctURL);
   },[searchTeram])

    return(
        <div>
        <form> 
            <input type="text" name="search" id="search"  
            placeholder="seacrh something new.." 
            value={searchTeram} 
            onChange={(e) =>setsearchTeram(e.target.value)}
              />
            
              </form>
              <hr />
              {loading && !iserror?.status && <h3>loading...</h3>}
              { !iserror?.status && <h3 style={{ color:"red"}}>{iserror.msg}</h3>}
              {!loading && !iserror?.status &&(
              <ul className="cocktail-data">
                {
                  drinksdata.map((eachdrink)=>{
                  const{ idDrink,strDrink,strDrinkThumb}=eachdrink;

                    return (<li key={idDrink}>
                        <div>
                            <img src={strDrinkThumb} alt={strDrink} />
                        </div>
                        <div className="text">
                            <h3>{strDrink}</h3>

                        </div>
                    </li> 
                  );
                    } ) }
              </ul>
              )
            }
        </div>
    );
};
export default Final3;