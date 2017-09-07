import { formatCompanyProfileData, formatFinanceData, formatBenefitsData } from './utils'

export const editCompanyOverview = data => (dispatch, getState) => {
    const { companyName, costOfAcquisition } = data
    const companies = getState().app.companies
    const selectedCompany = getState().app.selectedCompany

    const companyProfile = formatCompanyProfileData(data);
    const updatedCompanyData = Object.assign({}, selectedCompany, {
          companyProfile: companyProfile,
          companyName,
          costOfAcquisition
    })

    dispatch(updateTargetSuccess(updatedCompanyData, companies, selectedCompany))
};


export const editCompanyAssessment = data => (dispatch, getState) => {
      const { finalAssessment, overallRating, status } = data
      const companies = getState().app.companies
      const selectedCompany = getState().app.selectedCompany

      const updatedCompanyData = Object.assign({}, selectedCompany, {
            finalAssessment,
            overallRating,
            status
      });

      dispatch(updateTargetSuccess(updatedCompanyData, companies, selectedCompany))
};

export const editLegalData = legal => (dispatch, getState) => {
    const companies = getState().app.companies
    const selectedCompany = getState().app.selectedCompany

    const updatedCompanyData = Object.assign({}, selectedCompany, {
        legal
    });

    dispatch(updateTargetSuccess(updatedCompanyData, companies, selectedCompany))
};

export const editExistingContact = contact => (dispatch, getState) => {
    const selectedCompany = getState().app.selectedCompany
    const contactToEdit = getState().app.contactToEdit
    const listOfContacts = getState().app.selectedCompany.managementDirectory
    const companies =  getState().app.companies

    //first filter out the old contact info, and then add in the new contact = list of updated contacts
    const managementDirectory = listOfContacts.filter(_contact => _contact !== contactToEdit).concat(contact)
    //then add the list of updated contacts to the companies data obj
    const updatedCompanyData = Object.assign({}, selectedCompany, {
        managementDirectory
    });

    dispatch(updateTargetSuccess(updatedCompanyData, companies, selectedCompany))
};


export const createNewContact = contact => (dispatch, getState) => {
    const selectedCompany = getState().app.selectedCompany
    const companies =  getState().app.companies
    const listOfContacts = getState().app.selectedCompany.managementDirectory

    const managementDirectory = listOfContacts.concat(contact)

    const updatedCompanyData = Object.assign({}, selectedCompany, {
        managementDirectory
    });

    dispatch(updateTargetSuccess(updatedCompanyData, companies, selectedCompany))
};

export const removeContact = contact => (dispatch, getState) => {
    const selectedCompany = getState().app.selectedCompany
    const companies =  getState().app.companies
    const listOfContacts = getState().app.selectedCompany.managementDirectory

    const managementDirectory = listOfContacts.filter(({name}) => name !== contact)

    const updatedCompanyData = Object.assign({}, selectedCompany, {
        managementDirectory
    });

    dispatch(updateTargetSuccess(updatedCompanyData, companies, selectedCompany))
};


export const editBenefits = data => (dispatch, getState) => {
    const companies = getState().app.companies
    const selectedCompany = getState().app.selectedCompany

    const formattedDataArray = formatBenefitsData(data)
    const intellectualProperty = formattedDataArray[0]
    const technology = formattedDataArray[1]
    const otherBenefitsProvided = formattedDataArray[2]

    const updatedCompanyData = Object.assign({}, selectedCompany, {
        intellectualProperty,
        technology,
        otherBenefitsProvided
    });

    dispatch(updateTargetSuccess(updatedCompanyData, companies, selectedCompany))
};

export const editFinances = data => (dispatch, getState) => {
    const companies = getState().app.companies
    const selectedCompany = getState().app.selectedCompany

    const financialMatters = formatFinanceData(data, selectedCompany)

    const updatedCompanyData = Object.assign({}, selectedCompany, {
        financialMatters
    });

    dispatch(updateTargetSuccess(updatedCompanyData, companies, selectedCompany))
};


export const editFinancialReport = (report, selectedReport) => (dispatch, getState) => {
    const selectedCompany = getState().app.selectedCompany
    const companies = getState().app.companies
    const typeOfReport = report.type

    const updatedReports = selectedCompany.financialMatters[typeOfReport].filter(report =>
          report !== selectedReport).concat(report);

    dispatch(updateFinanceObjectWithNewData(updatedReports, typeOfReport, selectedCompany))
};


export const addNewALToDatabase = data => (dispatch, getState) => {
    const selectedCompany = getState().app.selectedCompany
    const  propertyType = data.propertyType.toLowerCase()

    const updatedProperty = selectedCompany.financialMatters[propertyType].concat(data)

    dispatch(updateFinanceObjectWithNewData(updatedProperty, propertyType, selectedCompany))
};

export const deleteALFromDatabase = (id, type) => (dispatch, getState) => {
    const selectedCompany = getState().app.selectedCompany
    const  propertyType = type.toLowerCase()

    const updatedProperty = selectedCompany.financialMatters[propertyType].filter(property =>
        property.id !== parseInt(id))

    dispatch(updateFinanceObjectWithNewData(updatedProperty, propertyType, selectedCompany))
};

export const editALInDataBase = data => (dispatch, getState) => {
    const selectedCompany = getState().app.selectedCompany;
    const  propertyType = data.propertyType.toLowerCase();

    const updatedProperty = selectedCompany.financialMatters[propertyType].filter(({ id} ) =>
        id !== data.id).concat(data);

    dispatch(updateFinanceObjectWithNewData(updatedProperty, propertyType, selectedCompany));
};

export const updateFinanceObjectWithNewData = (updatedData, type, selectedCompany) => (dispatch, getState) => {
  const companies = getState().app.companies

  const financialMatters = Object.assign({}, selectedCompany.financialMatters, {
      [type]: updatedData
  });

  const updatedCompanyData = Object.assign({}, selectedCompany, {
      financialMatters
  });

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
