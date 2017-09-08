import { filterCompanyByStatus,
         statusObject,
         formatTypeOfReportText } from './utils'

export const SORT_COMPANIES = 'SORT_COMPANIES'
export const sortCompanies = sortOption => ({
    type: SORT_COMPANIES,
    sortOption
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

export const VIEW_COMPANIES_BY_STATUS = 'VIEW_COMPANIES_BY_STATUS'
export const viewCompaniesByStatus = statusType => ({
    type: VIEW_COMPANIES_BY_STATUS,
    viewCompaniesByStatus: {
        view: true,
        statusType
    }
});
