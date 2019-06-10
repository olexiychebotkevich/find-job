const initState = {
    counterStore: 23
};

export default function counter(state=initState, action={}) {
    switch(action.type) {
case "INCREMENT":{
    return Object.assign({},state,{counterSrore:state.counterStore+1});
}
        default: 
            return state;
    }
}
