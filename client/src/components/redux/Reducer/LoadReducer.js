const initialState={
    loading:false
}

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_LOADING":
            return {
                ...state,
                loading:true
            }
        case "REMOVE_LOADING":
            return {
                ...state,
                loading:false
            }
        default:
            return{
                ...state
            }

    }
};
export default Reducer;