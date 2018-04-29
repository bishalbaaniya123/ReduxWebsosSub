// A reducer takes in two things
// 1. The action (info about what happened)
// 2. Copy of the current state

function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            //return the new state with the comment
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            //we need to return the new state without the deleted comment
            console.log('remove comment dispatch');
            return [
                // from the start to the one we want to delete
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ];
        default:
            return state;

    }
    return state;
}


function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            //take the current state
            ...state,
            //overwrite this with a new state
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;