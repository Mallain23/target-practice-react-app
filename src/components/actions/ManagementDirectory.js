import { formatContactDataForDatabaseEntry } from './utils'
export const editExistingContact = contact => (dispatch, getState) => {
    const { companyName } = getState().app.selectedCompany
    const companyData = getState().app.selectedCompany
    const contactToUpdate = getState().app.contactToEdit
    const listOfContacts = getState().app.selectedCompany.managementDirectory
    const companies =  getState().app.companies

    const formattedData = formatContactDataForDatabaseEntry(contact, companyName, companyData, contactToUpdate, listOfContacts, companies)
    const updatedCompanies = formattedData[0]
    const updatedCompanyData  = formattedData[1]

    dispatch(updateContactSuccess(updatedCompanyData, updatedCompanies))
};


export const createNewContact = contact => (dispatch, getState) => {
    const selectedCompany = getState().app.selectedCompany
    const companies =  getState().app.companies
    const listOfContacts = getState().app.selectedCompany.managementDirectory

    const managementDirectory = listOfContacts.concat(contact)

    const updatedCompanyData = Object.assign({}, selectedCompany, {
        managementDirectory
    });

    const updatedCompanies = companies.map(companyData => {
        return companyData.companyName === selectedCompany.companyName ? updatedCompanyData : companyData
    });

    dispatch(updateContactSuccess(updatedCompanyData, updatedCompanies))
};

export const removeContact = contact => (dispatch, getState) => {
    const selectedCompany = getState().app.selectedCompany
    const companies =  getState().app.companies
    const listOfContacts = getState().app.selectedCompany.managementDirectory

    const managementDirectory = listOfContacts.filter(({name}) => name !== contact)

    const updatedCompanyData = Object.assign({}, selectedCompany, {
        managementDirectory
    });

    const updatedCompanies = companies.map(companyData => {
        return companyData.companyName === selectedCompany.companyName ? updatedCompanyData : companyData
    });

    dispatch(updateContactSuccess(updatedCompanyData, updatedCompanies))
};

export const UPDATE_CONTACT_SUCCESS = 'UPDATE_CONTACT_SUCCESS'
export const updateContactSuccess = (updatedCompanyData, updatedCompanies) => ({
    type: UPDATE_CONTACT_SUCCESS,
    updatedCompanyData,
    updatedCompanies
});



export const getContactDataAndSetEditToTrue = name => (dispatch, getState) => {
    const contactList = getState().app.selectedCompany.managementDirectory

    const contactToEdit = contactList.find(contact => contact.name === name)

    dispatch(setEditContactToTrue(contactToEdit))
}

export const SET_EDIT_CONTACT_TO_TRUE = 'SET_EDIT_CONTACT_TO_TRUE'
export const setEditContactToTrue = contactToEdit => ({
    type: SET_EDIT_CONTACT_TO_TRUE,
    contactToEdit
});

export const SET_EDIT_CONTACT_TO_FALSE = 'SET_EDIT_CONTACT_TO_FALSE'
export const setEditContactToFalse = () => ({
    type: SET_EDIT_CONTACT_TO_FALSE
});
