const initState = {
    counterStore: 23
};

export default function counter(state=initState, action={}) {
    switch(action.type) {
case'INCREMENT':{
    return Object.assign({},state,{counterStore:state.counterStore+1});
};
case'DECREMENT':{
    return Object.assign({},state,{counterStore:state.counterStore-1});
};
        default: 
            return state;
    }
}

