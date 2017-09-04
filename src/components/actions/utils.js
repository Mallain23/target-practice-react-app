export const filterCompanyByStatus = (companyArray, _status) => {
      return companyArray.filter(({status}) => status === _status)
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

    return array;
};

export const statusObject = {
    approved: 'approved',
    pending: 'pending',
    declined: 'declined',
    researching: 'researching'
}
export const formatTypeOfReportText = _typeOfReport  => {
    if (_typeOfReport === 'Annual') {
        return 'financialStatementsAnnual'
    }

    else if (_typeOfReport === 'Quarterly') {
        return  'financialStatementsQuarterly'
    }

    return 'financialStatementsMonthly'
};

export const formatDataForEntry = companyName => ({
    companyName,
    companyProfile: {
        yearFounded: 'No Information Provided',
        location: {
            headQaurters: 'No Information Provided',
            principlePlaceOfBusiness: 'No Information Provided',
            otherStates: ['No Information Provided'],
            numberOfOffices: 'No Information Provided'
        },
        numberOfEmployees: 'No Information Provided',
        generalBusinessActivities: {
            purpose: 'No Information Provided',
            vistion: 'No Information Provided',
            missionStatement: 'No Information Provided',
            coreValues: 'No Information Provided',
            goals: 'No Information Provided'
        },
        industryInformation: {
            backgrondInformation: 'No Information Provided',
            presentCondition: 'No Information Provided',
            workForce: 'No Information Provided'
        },
    },
    financialMatters: {
        statementFromCompany: 'No Information Provided',
        assets: ['No Information Provided'],
        totalValueOfAllAssets: 'No Information Provided',
        liabilities: ['No Information Provided'],
        totalLiabilities: 'No Information Provided',
        summaryOnDebtOwed: 'No Information Provided',
        financialStatementsAnnual: [],
        financialStatementsQuarterly: [],
        financialStatementsMonthly: [],
        financesAudited: {
            isAudited: 'No Information Provided',
            whoAudits: 'No Information Provided',
            forHowLong: 'No Information Provided'
        },
        businessMargins: {
            status: 'No Information Provided',
            companyProjections: 'No Information Provided',
            areProjectionsReasonable:  'No Information Provided'
        },
        internalAssessmentOfFinances: 'No Information Provided',
        internalFinancialRating: 'No Information Provided'
    },
    intellectualProperty: {
        patents: ['No Information Provided'],
        trademarks: ['No Information Provided'],
        copyrights: ['No Information Provided'],
        litigation: 'No Information Provided',
        internalAssessmentOfIP: 'No Information Provided',
        internalIPRating: 'No Information Provided'
    },
    technology: {
        licenses: 'No Information Provided',
        softwareUse: 'No Information Provided',
        benefits: 'No Information Provided',
        assessment: 'No Information Provided',
        internalTechRating: 'No Information Provided'
    },
    otherBenefitsProvided: {
        services: 'No Information Provided',
        products: 'No Information Provided',
        people: 'No Information Provided',
        revenueEnhancements: 'No Information Provided',
        misccellaneous: 'No Information Provided',
        assesment: 'No Information Provided',
        internalOtherBenefitsRating: 'No Information Provided'
    },
    legal: {
        futureLitgiation: 'No Information Provided',
        currentLitigation: 'No Information Provided',
        otherLitigation: 'No Information Provided',
        reviewofContracts: 'No Information Provided',
        threatened: 'No Information Provided',
        settlement: 'No Information Provided',
        arbitration: 'No Information Provided',
        otherRegulatory: 'No Information Provided',
        assessment: 'No Information Provided',
        internalIssues: 'No Information Provided',
        rating: 'No Information Provided'
    },
    ManagementDirectory: ['No Information Provided'],
    finalAssessment: 'No Information Provided',
    overallRating: 'No Information Provided',
    status: 'researching'
})
