import { mockData, companyArray } from './MockData'
import { SHOW_EXTENDED_NAV,
         HIDE_EXTENDED_NAV,
         UPDATE_SEARCH_RESULTS_SUCCESS,
         SORT_COMPANIES_SUCCESS,
         SORT_COMPANIES_BY_STATUS_SUCCESS,
         VIEW_COMPANIES_BY_STATUS,
         CLOSE_MODAL,
         OPEN_MODAL,
         ADD_COMPANY_TO_DATABASE,
         FETCH_COMPANY_DATA_SUCCESS,
         REMOVE_COMPANY_FROM_DATABASE_SUCCESS,
         GET_FINANCIAL_REPORT_SUCCESS } from '../components/actions'


const initialState = {
    companies: mockData,
    key: 0,
    showExtendedNav: false,
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
    selectedCompany: {},
    selectedPage: null,
    selectedFinancialReport: null,
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

        return Object.assign({}, state, {
            companies: [...state.companies, company ],
            searchResults: [...state.companies, company],
            error: null
        });
    }

    else if (action.type === SHOW_EXTENDED_NAV) {
        return Object.assign({}, state, {
            showExtendedNav: true
        });
    }

    else if (action.type === HIDE_EXTENDED_NAV) {
        return Object.assign({}, state, {
            showExtendedNav: false
        });
    }

    else if (action.type === FETCH_COMPANY_DATA_SUCCESS) {
          const { companyData: selectedCompany } = action

          return Object.assign({}, state, {
              selectedCompany,
              selectedPage: 'Company Overview Page'
          });
    }

    else if(action.type === REMOVE_COMPANY_FROM_DATABASE_SUCCESS) {
        const { remainingCompanies: companies } = action
        return Object.assign({}, state, {
            companies,
            showExtendedNav: false,
            selectedCompany: {}
        })
    }

    else if (action.type === GET_FINANCIAL_REPORT_SUCCESS) {
        const { report: selectedFinancialReport } = action
        console.log(selectedFinancialReport)
        return Object.assign({}, state, {
            selectedFinancialReport
        });
    }

    return state
};
