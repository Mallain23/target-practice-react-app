import { formatTypeOfReportText, sortFunction } from './utils'


export const ADD_COMPANY_TO_DATABASE = 'ADD_COMPANY_TO_DATABASE'
export const addCompanyToDatabase = companyData => ({
   type: ADD_COMPANY_TO_DATABASE,
   companyData
});

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


export const fetchCompanyData = _companyName => (dispatch, getState) => {
    const selectedCompanyData = getState().app.companies.find(({ companyName }) =>
        companyName === _companyName);

    dispatch(fetchCompanyDataSuccess(selectedCompanyData));
};

export const FETCH_COMPANY_DATA_SUCCESS = 'FETCH_COMPANY_DATA_SUCCESS'
export const fetchCompanyDataSuccess = companyData => ({
    type: FETCH_COMPANY_DATA_SUCCESS,
    companyData
})


export const getFinacnialReport = (title, _typeOfReport) => (dispatch, getState) => {
    let typeOfReport = formatTypeOfReportText(_typeOfReport)

    const report = getState().app.selectedCompany.financialMatters[typeOfReport].find(report =>
        report.title === title)

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
