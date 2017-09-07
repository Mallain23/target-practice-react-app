export const formatCompanyProfileData = data => {

         const {
                 yearFounded,
                 companyName,
                 costOfAcquisition,
                 generalBusinessActivities,
                 numberOfEmployees,
                 headQaurters,
                 principlePlaceOfBusiness,
                 numberOfOffices,
                 vision,
                 coreValues,
                 goals,
                 backgroundInformation,
                 presentCondition
          } = data

    return  {
        location: {
            headQaurters,
            principlePlaceOfBusiness,
            numberOfOffices
        },
        numberOfEmployees,
        generalBusinessActivities,
        companyStrategy: {
            vision,
            coreValues,
            goals
        },
        industryInformation: {
            backgroundInformation,
            presentCondition
        }
    };
};

export const formatContacts = (contact, selectedCompany, editContact, contactToEdit) => {
  const listOfContacts = selectedCompany.managementDirectory
  const managementDirectory = editContact ? listOfContacts.filter(_contact => _contact !== contactToEdit).concat(contact) :
                                            listOfContacts.concat(contact);

    return {managementDirectory}
};

export const removeContact = (contact, selectedCompany) => {
    const listOfContacts = selectedCompany.managementDirectory
    const managementDirectory = listOfContacts.filter(({name}) => name !== contact)

    return {managementDirectory}
}
