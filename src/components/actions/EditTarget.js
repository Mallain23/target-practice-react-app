
export const updateTarget = data => (dispatch, getState) => {
    const companies = getState().app.companies
    const selectedCompany = getState().app.selectedCompany
    const { companyName } = selectedCompany

    let updatedCompanyData = Object.assign({}, selectedCompany)

    const propertyKeys = Object.keys(data)
    propertyKeys.forEach(key => updatedCompanyData[key] = data[key])

    const updatedCompanies = companies.map(companyData =>
        companyData.companyName === companyName ? updatedCompanyData : companyData);

     dispatch(updateTargetSuccess(updatedCompanyData, updatedCompanies))
};


export const UPDATE_TARGET_SUCCESS = 'UPDATE_TARGET_SUCCESS'
export const updateTargetSuccess = (updatedCompanyData, updatedCompanies) => ({
        type: UPDATE_TARGET_SUCCESS,
        updatedCompanyData,
        updatedCompanies
});
