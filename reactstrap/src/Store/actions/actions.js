
export const loading = () => {
    return {
        type:"LOADING"
    }
}

export const ageUpAsc = (val) => {
    return {type:'AGE_UP', value:val}
}

export const ageUp = val => {
    return dispach => {
            dispach(loading() )
            setTimeout(() => {
                    dispach(ageUpAsc(val))
            },5000
            )
    }
}

export const ageDown = (val) => {
    return {type:'AGE_DOWN', value:val}
}