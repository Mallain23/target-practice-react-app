export const filterCompanyByStatus = (companyArray, _status) => {
      return companyArray.filter(({status}) => status === _status)
}


export const statusObject = {
    approved: 'approved',
    pending: 'pending',
    declined: 'declined',
    researching: 'researching'
}
