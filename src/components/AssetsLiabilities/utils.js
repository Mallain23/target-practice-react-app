export const formatAL = (data, selectedCompany, editAL) => {
    const  propertyType = data.propertyType.toLowerCase()
    const { financialMatters: _financialMatters } = selectedCompany

    const updatedProperty = editAL ? _financialMatters[propertyType].concat(data) :
                                     _financialMatters[propertyType].filter(({ id} ) => id !== data.id).concat(data);

    const financialMatters = Object.assign({}, _financialMatters, {
        [propertyType]: updatedProperty
    });

    return { financialMatters }
};


export const removeAL = (id, type, selectedCompany)  => {
    const  propertyType = type.toLowerCase()
    const { financialMatters: _financialMatters } = selectedCompany
    const updatedProperty = _financialMatters[propertyType].filter(property =>
        property.id !== parseInt(id))

    const financialMatters = Object.assign({}, _financialMatters, {
        [propertyType]: updatedProperty
    });

    return { financialMatters }
};
