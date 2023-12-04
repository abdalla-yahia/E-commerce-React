import getAllHook,{CreateHook} from '../../Hooks/Custom-Hooks'
import { CREATE_REVIEW, GET_ALL_REVIEWERS } from '../Types/Types'

// Get all Reviewers
const getAllReviewers = ()=>async (dispatchEvent) => {
    try {

        const reviewrs = await getAllHook('/api/v1/reviews')

        dispatchEvent({
            type: GET_ALL_REVIEWERS,
            payload: reviewrs.data
        })
        
    } catch (error) {
        console.log(error)
    }
}

export default getAllReviewers

// Create a new review

export const createReview = (review) => async (dispatch) => {
    try {
        const newReview = await CreateHook('/api/v1/reviews', review)
        dispatch({
            type: CREATE_REVIEW,
            payload: newReview.data
        })
    } catch (error) {
        console.log(error)
    }
}