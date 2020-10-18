export const initialState = {
    use: null,
    playlists: [],
    playing: false,
    item: null,
    token: null
};

const reducer = (state, action) => {
    // amazing debugging tool
    console.log(action);

    // action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export default reducer;