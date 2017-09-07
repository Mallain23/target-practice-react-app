export const calcTotalAssetValue = assets => {
    if (assets.length < 1 ) {
        return 'No Data Available Yet'
    }
    const value =  assets.reduce((acc, asset) => {
      return acc + parseInt(asset.value);
    }, 0);

    return `$${value.toLocaleString()}`
};

export const calcTotalLiabilityValue = liabilities => {
    if (liabilities.length < 1 ) {
        return 'No Data Available Yet'
    }
    const value =  liabilities.reduce((acc, liability) => {
      return acc - parseInt(liability.value);
    }, 0);

   return `$${value.toLocaleString()}`
};


export const formatAL = (data, selectedCompany, editAL) => {
    const  propertyType = data.propertyType.toLowerCase()
    const { financialMatters: _financialMatters } = selectedCompany
  
    const updatedProperty = !editAL ? _financialMatters[propertyType].concat(data) :
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
