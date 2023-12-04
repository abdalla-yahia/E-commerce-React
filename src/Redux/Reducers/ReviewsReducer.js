import { CREATE_REVIEW, GET_ALL_REVIEWERS } from "../Types/Types"


const initialState = {
    reviews: [],
    loading:true
}

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_REVIEWERS:
            return {
               ...state,
               reviews: action.payload,
                loading: false
            }
        case CREATE_REVIEW:
            return {
               ...state,
                loading: false
            }
        default:
            return state
    }
}

export default reviewReducer