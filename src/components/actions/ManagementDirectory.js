
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
