export const filterCompanyByStatus = (companyArray, _status) => {
      console.log(companyArray, _status)
      return companyArray.filter(({status}) => status.toLowerCase() === _status)
}

export const sortFunction = (array, sortOption) => {

    array.sort((a, b) => {
        let itemA =  a[sortOption].toUpperCase()
        let itemB = b[sortOption].toUpperCase()

        if (itemA < itemB) {
            return -1
        }

        if (itemA > itemB) {
            return 1
        }

        return 0
    })

    return sortOption === 'overallRating' ? array.reverse() : array
};

export const statusObject = {
    approved: 'Approved',
    pending: 'Pending',
    declined: 'Declined',
    researching: 'Researching'
}
export const formatTypeOfReportText = _typeOfReport  => {
    if (_typeOfReport === 'Annual') {
        return 'financialStatementsAnnual'
    }

    else if (_typeOfReport === 'Quarterly') {
        return  'financialStatementsQuarterly'
    }
};
