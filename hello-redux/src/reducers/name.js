let initionalstate = {
    user:'Aniket'
}

function username(state= initionalstate, action){
    switch(action.type){
        case 'user':return{
            user: action.payload.user
        }
        default : return state
    }
    
}

export default username