export const initialState = {
    song: [
        {
            name: 'Havana',
            author: 'Camila Cabello ft. Young Thug'
        },
        {
            name: 'Havana',
            author: 'Camila Cabello ft. Young Thug'
        },
        {
            name: 'Havana',
            author: 'Camila Cabello ft. Young Thug'
        },
        {
            name: 'Havana',
            author: 'Camila Cabello ft. Young Thug'
        }
    ],
    userToken: null,
    storeID: null
}

export const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {

        case 'ADD_SONG':
            if (state.song.length < 5) {
                return {
                    ...state,
                    song: [...state.song, action.newsong],
                }
            }
            else
                return

        case 'SET_USER_TOKEN':
            return {
                ...state,
                userToken: action.token
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