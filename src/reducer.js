export const initialState = {
    song: [],
    customerID: null,
    userToken: null,
    storeID: null
}

export const reducer = (state, action) => {
    //console.log(action)
    switch (action.type) {

        case 'LOAD_SONG':
            return{
                ...state,
                song: [...state.song, ...action.songs]
            }
        case 'ADD_SONG':
            if (state.song.length < 5) {
                return {
                    ...state,
                    song: [...state.song, action.newsong],
                }
            }
            else
                return
        
        case 'REMOVE_SONGS_LOGOUT':
            return{
                ...state,
                song: []
            }
        case 'SET_USER_TOKEN':
            return {
                ...state,
                userToken: action.token
            }
        case 'SET_USER_ID':
            return{
                ...state,
                customerID: action.customerID
            }
        case 'SET_USER_LOG_OUT':
            return{
                ...state,
                userToken: action.userToken,
                storeID: action.storeID
            }
        case 'SET_STORE_ID':
            return {
                ...state,
                storeID: action.storeID
            }
        default:
            return
    }
}