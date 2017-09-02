import { mockData, companyArray } from './MockData'
import { TOGGLE_COMPANY_SELECTED,
         UPDATE_SEARCH_TERM,
         SAVE_SORTED_COMPANY_DATA_TO_STATE,
         VIEW_COMPANIES_BY_STATUS } from '../components/actions'
import { sortFunction } from './utils'

const initialState = {
    companies: mockData,
    companySelected: false,
    searchTerm: '',
    searchResults: mockData,
    companyStatus: {
        approved: [],
        declined: [],
        pending: [],
        researching: []
    },
    viewCompaniesByStatus: {
        view: false,
        statusType: null
    }
};

export default function reducer(state = initialState, action) {
    if (action.type === UPDATE_SEARCH_TERM) {
          const { searchTerm } = action
          const { companies } = state

          const searchResults = companies.filter( ({companyName }) =>
              companyName.toLowerCase().includes(searchTerm.toLowerCase()));

         const sortedResults = sortFunction(searchResults, 'companyName')

          return Object.assign({}, state, {
              searchTerm,
              searchResults: sortedResults
          });
    }

    else if (action.type === SAVE_SORTED_COMPANY_DATA_TO_STATE) {
        const { companyStatus } = action

        return Object.assign({}, state, {
          companyStatus
        });
    }

    else if (action.type === VIEW_COMPANIES_BY_STATUS) {
        const { viewCompaniesByStatus } = action
        return Object.assign({}, state, {
            viewCompaniesByStatus
        });
    }

    return state
};
