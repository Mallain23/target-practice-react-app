import { filterCompanyByStatus , statusObject, sortFunction, formatDataForEntry } from './utils'

// export const TOGGLE_COMPANY_SELECTED = 'TOGGLE_COMPANY_SELECTED'
// export const toggleCompanySelected = () => ({
//     type: TOGGLE_COMPANY_SELECTED
// });


export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS '
export const updateSearchResults = searchTerm => (dispatch, getState) => {
    const { companies } = getState().app

    const searchResults = companies.filter( ({companyName }) =>
        companyName.toLowerCase().includes(searchTerm.toLowerCase()));

    const sortedResults = sortFunction(searchResults, 'companyName')

    dispatch(updateSearchResultsSuccess(sortedResults))
};

export const UPDATE_SEARCH_RESULTS_SUCCESS = 'UPDATE_SEARCH_RESULTS_SUCCESS'
export const updateSearchResultsSuccess = searchResults => ({
    type: UPDATE_SEARCH_RESULTS_SUCCESS,
    searchResults
});


export const VIEW_COMPANIES_BY_STATUS = 'VIEW_COMPANIES_BY_STATUS'
export const viewCompaniesByStatus = statusType => ({
    type: VIEW_COMPANIES_BY_STATUS,
    viewCompaniesByStatus: {
        view: true,
        statusType
    }
});

export const sortCompanies = sortOption => (dispatch, getState) => {
    const { companies } = getState().app
    let sortedCompanies = sortFunction(companies, sortOption)
    sortedCompanies = sortOption === 'overallRating' ? sortedCompanies.reverse() : sortedCompanies

    dispatch(sortCompaniesSuccess(sortedCompanies))
};

export const SORT_COMPANIES_SUCCESS = 'SORT_COMPANIES_SUCCESS'
export const sortCompaniesSuccess = sortedCompanies => ({
    type: SORT_COMPANIES_SUCCESS,
    sortedCompanies,

});

export const sortCompaniesByStatus = () => (dispatch, getState) => {
    const { companies } = getState().app
    const statusKeys = Object.keys(statusObject)
    console.log(companies)
    let sortedCompanyObject = {}

    const arrayOfCompaniesSortedByStatus = statusKeys.map(status =>
        sortedCompanyObject[status] = filterCompanyByStatus(companies, status));

    dispatch(sortCompaniesByStatusSuccess(sortedCompanyObject));
};

export const SORT_COMPANIES_BY_STATUS_SUCCESS = 'SORT_COMPANIES_BY_STATUS_SUCCESS'
export const sortCompaniesByStatusSuccess = companyStatus => ({
    type: SORT_COMPANIES_BY_STATUS_SUCCESS,
    companyStatus
})

export const CLOSE_MODAL = 'CLOSE_MODAL'
export const closeModal = () => ({
    type: CLOSE_MODAL
});

export const OPEN_MODAL = 'OPEN_MODAL'
export const openModal = () => ({
    type: OPEN_MODAL
});

export const formatDataForDatabaseEntry = company => (dispatch, getState) => {
    const { companyName } = company
    const companyData = formatDataForEntry(companyName)
    dispatch(addCompanyToDatabase(companyData))
}

export const ADD_COMPANY_TO_DATABASE = 'ADD_COMPANY_TO_DATABASE'
export const addCompanyToDatabase = companyData => ({
    type: ADD_COMPANY_TO_DATABASE,
    companyData
})
