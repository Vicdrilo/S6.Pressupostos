import { useState } from "react";
import { useDataContext } from "../context/DataProvider";


type typeProps = {
    title: string;
    description: string;
    price: number;
    check: boolean;
    //changeState: React.Dispatch<React.SetStateAction<boolean>>
}
export function CheckBox ({title, description, price, check}: typeProps){

    /*
    const [checked, setChecked] = useState(check);
    
    const changeCheck = () =>{
        if(!checked){
            setChecked(true);
            console.log('IsChecked? ', checked);
        }else{
            setChecked(false);
            console.log('IsChecked? ', checked);
        }
    }*/
    
    return(
        <form className="cb-container">
            <div className="cb-description-container">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="cb-price-container">
                <h1>{price}</h1><h2>€</h2>
            </div>
            <div className="cb-checkbox-container">
                <input type="checkbox" id={title} name={title} onChange={changeCheck}/>
                <label htmlFor={title}>Afegir</label>
            </div>
        </form>
    )
}