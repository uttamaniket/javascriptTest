const initialState = {
   
    b:1
}

const reducer1 = ( state = initialState,action) => {

    switch(action.type){
        case 'UPDATEB' :
        return {
            ...state,
            b: state.b + action.a
        }
        case 'RESETB':
        return{
            ...state,
            b: 1
        }
        default: return state
    }
    
}

export default reducer1