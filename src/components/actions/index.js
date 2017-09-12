import { formatTypeOfReportText, sortFunction } from './utils'


export const ADD_TARGET_TO_DATABASE = 'ADD_TARGET_TO_DATABASE'
export const addTargetToDatabase = companyData => ({
   type: ADD_TARGET_TO_DATABASE,
   companyData
});

export const removeTargetFromDatabase = companyName => (dispatch, getState) => {
    const companies = getState().app.companies
    const remainingCompanies = companies.filter(company  => company.companyName !== companyName)

    dispatch(removeTargetFromDatabaseSuccess(remainingCompanies))
};


export const REMOVE_TARGET_FROM_DATABASE_SUCCESS = 'REMOVE_TARGET_FROM_DATABASE_SUCCESS'
export const removeTargetFromDatabaseSuccess = remainingCompanies => ({
    type: REMOVE_TARGET_FROM_DATABASE_SUCCESS,
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


export const fetchTargetData = _companyName => (dispatch, getState) => {
    const selectedCompanyData = getState().app.companies.find(({ companyName }) =>
        companyName === _companyName);

    dispatch(fetchTargetDataSuccess(selectedCompanyData));
};

export const FETCH_TARGET_DATA_SUCCESS = 'FETCH_TARGET_DATA_SUCCESS'
export const fetchTargetDataSuccess = companyData => ({
    type: FETCH_TARGET_DATA_SUCCESS,
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
