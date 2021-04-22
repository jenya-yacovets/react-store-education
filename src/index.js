import {createStore} from 'redux'

const reducer = (state = 0, action) => {

    switch(action.type){
        case 'INC':
            return state + 1;
        default:
            return state
    }
}

const store = createStore(reducer)

console.log(Math.floor(Math.random()*10))