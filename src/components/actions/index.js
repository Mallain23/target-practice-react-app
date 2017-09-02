import { filterCompanyByStatus , statusObject} from './utils'

// export const TOGGLE_COMPANY_SELECTED = 'TOGGLE_COMPANY_SELECTED'
// export const toggleCompanySelected = () => ({
//     type: TOGGLE_COMPANY_SELECTED
// });


export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM '
export const updateSearchTerm = searchTerm => ({
    type: UPDATE_SEARCH_TERM,
    searchTerm
});

export const VIEW_COMPANIES_BY_STATUS = 'VIEW_COMPANIES_BY_STATUS'
export const viewCompaniesByStatus = statusType => ({
    type: VIEW_COMPANIES_BY_STATUS,
    viewCompaniesByStatus: {
        view: true,
        statusType
    }
});

export const SAVE_SORTED_COMPANY_DATA_TO_STATE = 'SAVE_SORTED_COMPANY_DATA_TO_STATE'
export const saveSortedCompanyDataToState = companyStatus => ({
    type: SAVE_SORTED_COMPANY_DATA_TO_STATE,
    companyStatus
})


export const sortCompaniesByStatus = () => (dispatch, getState) => {
    const { companies } = getState()
    const statusKeys = Object.keys(statusObject)

    let sortedCompanyObject = {}

    const arrayOfCompaniesSortedByStatus = statusKeys.map(status =>
        sortedCompanyObject[status] = filterCompanyByStatus(companies, status));

    dispatch(saveSortedCompanyDataToState(sortedCompanyObject));
};
