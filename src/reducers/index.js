import { mockData, companyArray } from './MockData'
import { ADD_COMPANY_TO_DATABASE,
         FETCH_COMPANY_DATA_SUCCESS,
         REMOVE_COMPANY_FROM_DATABASE_SUCCESS,
         GET_FINANCIAL_REPORT_SUCCESS,
         UPDATE_CURRENT_SELECTED_PAGE ,
         UPDATE_SEARCH_RESULTS_SUCCESS,} from '../components/actions'
import { SET_EDIT_CONTACT_TO_FALSE, SET_EDIT_CONTACT_TO_TRUE} from '../components/actions/ManagementDirectory'
import { UPDATE_TARGET_SUCCESS} from '../components/actions/EditTarget'
import { SHOW_EXTENDED_NAV,
         HIDE_EXTENDED_NAV,
         CLOSE_MODAL,
         OPEN_MODAL,
         OPEN_EDIT_PAGE_MODAL,
         OPEN_AL_MODAL,
         UPDATE_STATE_WITH_PROPERTY_TO_EDIT } from '../components/actions/ShowHideActions'
import { SORT_COMPANIES,
         SORT_COMPANIES_BY_STATUS_SUCCESS,
         VIEW_COMPANIES_BY_STATUS } from '../components/actions/SortActions'

const COMPANY_NAME = 'companyName'
const COMPANY_OVERVIEW = 'Company Overview'

const initialState = {
    companies: mockData,
    showExtendedNav: false,
    sortOption: COMPANY_NAME,
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
    showModal: false,
    showEditModal: false,
    showALModal: false,
    contactName: null,
    editContact: false,
    editReport: false,
    editAL: false,
    propertyType: null,
    contactToEdit: null,
    id: 40,
    propertyToEdit: null
};

export default function reducer(state = initialState, action) {
    if (action.type === UPDATE_SEARCH_RESULTS_SUCCESS) {
          const { searchResults } = action

          return Object.assign({}, state, {
              searchResults
          });
    }

    else if (action.type === SORT_COMPANIES) {
        const { sortOption } = action
            return Object.assign({}, state, {
                sortOption
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
            showModal: false,
            showEditModal: false,
            showALModal: false,
            editAL: false

        });
    }

    else if (action.type === OPEN_MODAL) {
      return Object.assign({}, state, {
          showModal: true
      });
    }

    else if (action.type === OPEN_AL_MODAL) {

        const { propertyType } = action

        return Object.assign({}, state, {
            showALModal: true,
            showEditModal: true,
            propertyType,
        });
    }
    else if (action.type === UPDATE_STATE_WITH_PROPERTY_TO_EDIT) {
        const { propertyToEdit, propertyType} = action

        return Object.assign({}, state, {
            showALModal: true,
            showEditModal: true,
            editAL: true,
            propertyToEdit,
            propertyType
        });
    }

    else if (action.type === OPEN_EDIT_PAGE_MODAL) {
        const { name: contactName} = action

        return Object.assign({}, state, {
            showEditModal: true,
            contactName
        });
    }

    else if (action.type === ADD_COMPANY_TO_DATABASE) {
        const { companyData: company } = action

        return Object.assign({}, state, {
            companies: [...state.companies, company ],
            searchResults: [...state.companies, company],
            selectedCompany: company
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
              selectedPage: COMPANY_OVERVIEW
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

        return Object.assign({}, state, {
            selectedFinancialReport,
            editReport: true
        });
    }

    else if(action.type === UPDATE_CURRENT_SELECTED_PAGE) {
        const { page: selectedPage } = action
        return Object.assign({}, state, {
            selectedPage
        });
    }

    else if (action.type === SET_EDIT_CONTACT_TO_TRUE) {
        const { contactToEdit } = action
        return Object.assign({}, state, {
            editContact: true,
            contactToEdit
        })
    }

    else if (action.type === SET_EDIT_CONTACT_TO_FALSE) {
        return Object.assign({}, state, {
            editContact: false,
            showEditModal: true
        })
    }

    else if (action.type === UPDATE_TARGET_SUCCESS) {
        const { updatedCompanyData, updatedCompanies } = action

        const id = state.showALModal && !state.editAL ? state.id + 1 : state.id

        return Object.assign({}, state, {
            companies: updatedCompanies,
            searchResults: updatedCompanies,
            selectedCompany: updatedCompanyData,
            showEditModal: false,
            editReport: false,
            showALModal: false,
            editAL: false,
            id
        })
    }

    return state
};
