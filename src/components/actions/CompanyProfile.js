import { formatCompanyProfileData, formatContactDataForDatabaseEntry } from './utils'

export const editCompanyOverview = data => (dispatch, getState) => {
    const { companyName, costOfAcquisition } = data
    const companies = getState().app.companies
    const selectedCompany = getState().app.selectedCompany

    const companyProfile = formatCompanyProfileData(data);
    const updatedCompany = Object.assign({}, selectedCompany, {
          companyProfile: companyProfile,
          companyName,
          costOfAcquisition
    })

    const updatedCompanies = companies.map(companyData =>
        companyData.companyName === selectedCompany.companyName ? updatedCompany : companyData);
    // const updatedList = companies.filter(({companyName}) =>
    //       companyName !== selectedCompany.companyName)

    dispatch(editCompanyOverviewSuccess(updatedCompany, updatedCompanies))
};

export const EDIT_COMPANY_OVERVIEW_SUCCESS = 'EDIT_COMPANY_OVERVIEW_SUCCESS'
export const editCompanyOverviewSuccess = (updatedCompany, updatedCompanies) => ({
    type: EDIT_COMPANY_OVERVIEW_SUCCESS,
    updatedCompany,
    updatedCompanies
});

export const editCompanyAssessment = data => (dispatch, getState) => {
      const { finalAssessment, overallRating, status } = data
      const companies = getState().app.companies
      const selectedCompany = getState().app.selectedCompany

      const updatedCompany = Object.assign({}, selectedCompany, {
            finalAssessment,
            overallRating,
            status
      });

      const updatedCompanies = companies.map(companyData => {
            return companyData.companyName === selectedCompany.companyName ? updatedCompany : companyData
        });

      dispatch(editCompanyOverviewSuccess(updatedCompany, updatedCompanies))
};

export const editLegalData = legal => (dispatch, getState) => {
    const companies = getState().app.companies
    const selectedCompany = getState().app.selectedCompany

    const updatedCompany = Object.assign({}, selectedCompany, {
        legal
    });

    const updatedCompanies = companies.map(companyData => {
          return companyData.companyName === selectedCompany.companyName ? updatedCompany : companyData
      });

      dispatch(editCompanyOverviewSuccess(updatedCompany, updatedCompanies))
};
