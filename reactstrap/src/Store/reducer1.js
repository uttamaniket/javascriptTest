const initialState = {
    a:1
}

const reducer1 = ( state = initialState,action) => {

    switch(action.type){
        case 'UPDATEA':
            return {
                ...state,
                a: state.a + action.b}
        case 'RESETA':
                return{
                    
                    a: 1
                }

        default: return state
    }
    
}

export default reducer1