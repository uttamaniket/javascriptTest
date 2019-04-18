const initialState ={
    age:21,
    history:[]
}

const reducer = (state= initialState, action) => {
    const newState = {...state}
    switch(action.type){
    case 'AGE_UP':
        // newState.age += action.value
        return {
            ...state,
            age: state.age + action.value,
            history:state.history.concat({age:state.age + action.value})
        }
      
    case 'AGE_DOWN':
        // newState.age-= action.value
        return {
            ...state,
            age: state.age - action.value,
            history:state.history.concat({age:state.age - action.value})
        }
      
   
} return newState}

export default reducer