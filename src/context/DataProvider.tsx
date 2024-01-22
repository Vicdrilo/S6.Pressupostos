import React, {useState, useContext, ReactNode} from "react";

const dataContext: React.Context<Array<object>> = React.createContext();
const stateCheckbox: React.Context<boolean> = React.createContext();
const stateToggleCheckbox: React.Context<React.Dispatch<React.SetStateAction<boolean>>> = React.createContext();

export function useDataContext(){
    return useContext(dataContext);
}
export function useStateCheckbox(){
    return useContext(stateCheckbox);
}
export function useStateToggleCheckbox(){
    return useContext(stateToggleCheckbox);
}

interface ChildrenType {
    children: ReactNode;
}
export function DataProvider({children}: ChildrenType){

    const options = [
        {
          title: 'Seo',
          description: 'Programació d\'una web responsive completa',
          price: 300
        },{
          title: 'Ads',
          description: 'Programació d\'una web responsive completa',
          price: 400
        },{
          title: 'Web',
          description: 'Programació d\'una web responsive completa',
          price: 500
        }
    ];


    const [checked, setChecked] = useState(false);
    const changeCheck = () =>{
        if(!checked){
            setChecked(true);
            console.log('IsChecked? ', checked);
        }else{
            setChecked(false);
            console.log('IsChecked? ', checked);
        }
    }


    return(
        <dataContext.Provider value={options}>
            <stateCheckbox.Provider value={checked}>
                <stateToggleCheckbox.Provider value={changeCheck}>
                    {children}
                </stateToggleCheckbox.Provider>
            </stateCheckbox.Provider>
        </dataContext.Provider>
    );
}