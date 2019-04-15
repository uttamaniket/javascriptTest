let initionalstate = {
    name:'Aniket',
    age: 30
}

function user(state= initionalstate, action){
    switch(action.type){
        case "update_user":
            return  {
                name:action.payload.name,
                age: action.payload.age
                }
            

        case "update_user1":
                return {
                        name:'Aman',
                        age: 60
                }
                

     default: return state
                            }
}

export default user