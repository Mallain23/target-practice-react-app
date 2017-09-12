export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY'
export const toggleVisibility = ( )=> ({
    type: TOGGLE_VISIBILITY
});

export const CLOSE_MODAL = 'CLOSE_MODAL'
export const closeModal = () => ({
    type: CLOSE_MODAL
});

export const OPEN_MODAL = 'OPEN_MODAL'
export const openModal = () => ({
    type: OPEN_MODAL
});

export const OPEN_EDIT_PAGE_MODAL = 'OPEN_EDIT_PAGE_MODAL'
export const openEditPageModal = name => {
    name = name ? name : '';

    return {
        type: OPEN_EDIT_PAGE_MODAL,
        name
    }
};

export const OPEN_AL_MODAL = 'OPEN_AL_MODAL'
export const openALModal = propertyType => ({
    type: OPEN_AL_MODAL,
    propertyType
});


export const openEditALModal = (type, id)=> (dispatch, getState) => {

    const selectedCompany = getState().app.selectedCompany
    const propertyType = type.toLowerCase()

    const propertyToEdit = selectedCompany.financialMatters[propertyType].find(property =>
        property.id === parseInt(id))

    dispatch(updateStateWithPropertyToEdit(propertyToEdit, type))
};

export const UPDATE_STATE_WITH_PROPERTY_TO_EDIT = 'UPDATE_STATE_WITH_PROPERTY_TO_EDIT'
export const updateStateWithPropertyToEdit = (propertyToEdit, propertyType) => ({
    type: UPDATE_STATE_WITH_PROPERTY_TO_EDIT,
    propertyToEdit,
    propertyType
})
