
export const updateTarget = data => (dispatch, getState) => {
    const companies = getState().app.companies
    const selectedCompany = getState().app.selectedCompany

    let updatedCompanyData = Object.assign({}, selectedCompany)

    const propertyKeys = Object.keys(data)
    propertyKeys.forEach(key => updatedCompanyData[key] = data[key])

     dispatch(updateTargetSuccess(updatedCompanyData, companies, selectedCompany))
};


export const UPDATE_TARGET_SUCCESS = 'UPDATE_TARGET_SUCCESS'
export const updateTargetSuccess = (updatedCompanyData, companies, selectedCompany) => {
    const { companyName } = selectedCompany

    const updatedCompanies = companies.map(companyData =>
        companyData.companyName === companyName ? updatedCompanyData : companyData);

    return {
        type: UPDATE_TARGET_SUCCESS,
        updatedCompanyData,
        updatedCompanies
    };
};
