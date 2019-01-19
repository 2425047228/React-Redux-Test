// widget.js

// Actions
export const types = {add:'ADD', sub:'SUB'};
// Action Creators
export const actions = {
    add:function() {
        return {type:types.add, value:1};
    },
    sub:function() {
        return {type:types.sub, value:1};
    }
};


const defaultState = {widget: null, isLoading: false, value:0};
  
// Reducer
export default function TestReducer(state = defaultState, action = {}) {
    console.log(state);
    switch (action.type) {
        case types.add:
            return {value:state.value + action.value};
        case types.sub:
            return {value:state.value - action.value};
        default: return state;
    }
}
