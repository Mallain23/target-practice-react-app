import { mockData } from './MockData'
import { TOGGLE_COMPANY_SELECTED } from '../actions'

const initialState = {
  companies: mockData,
  companySelected: true
}

export default function reducer(state = initialState, action) {
    return state
}
