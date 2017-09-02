import { mockData, companyArray } from './MockData'
import { TOGGLE_COMPANY_SELECTED,
         UPDATE_SEARCH_RESULTS_SUCCESS,
         SORT_COMPANIES_SUCCESS,
         SORT_COMPANIES_BY_STATUS_SUCCESS,
         VIEW_COMPANIES_BY_STATUS,
         CLOSE_MODAL,
         OPEN_MODAL,
         ADD_COMPANY_TO_DATABASE} from '../components/actions'


const initialState = {
    companies: mockData,
    key: 0,
    companySelected: false,
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
    },
    showModal: false
};

export default function reducer(state = initialState, action) {
    if (action.type === UPDATE_SEARCH_RESULTS_SUCCESS) {

          const { searchResults } = action

          return Object.assign({}, state, {
              searchResults
          });
    }

    else if (action.type === SORT_COMPANIES_SUCCESS) {
        const { sortedCompanies: searchResults } = action
            return Object.assign({}, state, {
                searchResults,
                key: state.key + 1
            });
    }

    else if (action.type === SORT_COMPANIES_BY_STATUS_SUCCESS) {
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

    else if (action.type === CLOSE_MODAL) {
        return Object.assign({}, state, {
            showModal: false
        });
    }

    else if (action.type === OPEN_MODAL) {
      return Object.assign({}, state, {
          showModal: true
      });
    }

    else if (action.type === ADD_COMPANY_TO_DATABASE) {
        const { companyData: company } = action
        console.log(company)
        return Object.assign({}, state, {
            companies: [...state.companies, company ],
            searchResults: [...state.companies, company]
        });
    }

    return state
};
