export const LoadState = () =>{
    try{
        // used to get data from the localstorage
        const getState = localStorage.getItem("state");
        if(getState === null){
            return undefined;
        }
        return JSON.parse(getState)
    }catch(err){
        return undefined;
    }
};

// function to store data to loal storage

export const SaveState = (state) =>{
    try{
    const stateSave = JSON.stringify(state);
    localStorage.setItem("state",stateSave);
    }catch(err){
        console.error(err)
    }
} 


