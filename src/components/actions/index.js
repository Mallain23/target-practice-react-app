import { SubmissionError, focus} from 'redux-form';

import { filterCompanyByStatus,
         statusObject,
         sortFunction,
         formatDataForEntry,
          formatTypeOfReportText,
          formatCompanyProfileData} from './utils'

export const SHOW_EXTENDED_NAV = 'SHOW_EXTENDED_NAV'
export const showExtendedNav = () => ({
    type: SHOW_EXTENDED_NAV
});

export const HIDE_EXTENDED_NAV = 'HIDE_EXTENDED_NAV'
export const hideExtendedNav = () => ({
    type: HIDE_EXTENDED_NAV
});

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

    let sortedCompanyObject = {}

     let arrayOfCompaniesSortedByStatus = statusKeys.map(status =>
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
    const  companies = getState().companies

    const companyData = formatDataForEntry(companyName);
    dispatch(addCompanyToDatabase(companyData));
};

export const ADD_COMPANY_TO_DATABASE = 'ADD_COMPANY_TO_DATABASE'
export const addCompanyToDatabase = companyData => ({
    type: ADD_COMPANY_TO_DATABASE,
    companyData
});


export const fetchCompanyData = _companyName => (dispatch, getState) => {
    const selectedCompanyData = getState().app.companies.find(({ companyName }) =>
        companyName === _companyName)

    dispatch(fetchCompanyDataSuccess(selectedCompanyData))
};

export const FETCH_COMPANY_DATA_SUCCESS = 'FETCH_COMPANY_DATA_SUCCESS'
export const fetchCompanyDataSuccess = companyData => ({
    type: FETCH_COMPANY_DATA_SUCCESS,
    companyData
})

export const removeCompanyFromDatabase = companyName => (dispatch, getState) => {
    const companies = getState().app.companies
    const remainingCompanies = companies.filter(company  => company.companyName !== companyName)

    dispatch(removeCompanyFromDatabaseSuccess(remainingCompanies))
};

export const REMOVE_COMPANY_FROM_DATABASE_SUCCESS = 'REMOVE_COMPANY_FROM_DATABASE_SUCCESS'
export const removeCompanyFromDatabaseSuccess = remainingCompanies => ({
    type: REMOVE_COMPANY_FROM_DATABASE_SUCCESS,
    remainingCompanies
})

export const getFinacnialReport = (title, _typeOfReport) => (dispatch, getState) => {
    let typeOfReport = formatTypeOfReportText(_typeOfReport)

    const report = getState().app.selectedCompany.financialMatters[typeOfReport].find(report => report.title === title)


    dispatch(getFinacnialReportSuccess(report))
};

export const GET_FINANCIAL_REPORT_SUCCESS = 'GET_FINANCIAL_REPORT_SUCCESS'
export const getFinacnialReportSuccess = report => ({
    type: GET_FINANCIAL_REPORT_SUCCESS,
    report
});

export const UPDATE_CURRENT_SELECTED_PAGE = 'UPDATE_CURRENT_SELECTED_PAGE '
export const updateCurrentSelectedPage = page => ({
    type: UPDATE_CURRENT_SELECTED_PAGE,
    page
});

export const OPEN_EDIT_PAGE_MODAL = 'OPEN_EDIT_PAGE_MODAL'
export const openEditPageModal = () => ({
  type: OPEN_EDIT_PAGE_MODAL
});

export const editCompanyOverview = data => (dispatch, getState) => {
    const { companyName, costOfAcquisition } = data
    const companyProfile = formatCompanyProfileData(data);

    const selectedCompany = getState().app.selectedCompany
    const updatedCompanyEntry = Object.assign({}, selectedCompany, {
          companyProfile: companyProfile,
          companyName,
          costOfAcquisition
    })

    const companies = getState().app.companies
    const updatedList = companies.filter(({companyName}) =>
          companyName !== selectedCompany.companyName)

    dispatch(editCompanyOverviewSuccess(updatedCompanyEntry, updatedList))
};

export const EDIT_COMPANY_OVERVIEW_SUCCESS = 'EDIT_COMPANY_OVERVIEW_SUCCESS'
export const editCompanyOverviewSuccess = (updatedEntry, updatedList) => ({
    type: EDIT_COMPANY_OVERVIEW_SUCCESS,
    updatedEntry,
    updatedList
});
