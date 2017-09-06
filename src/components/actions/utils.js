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
};

export const formatCompanyProfileData= data => {
     const {
             yearFounded,
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

    return  { yearFounded,
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

export const formatFinanceData = (data, selectedCompany) => {

    const { status,
            statementFromCompany,
            companyProjections,
            areProjectionsReasonable,
            internalFinancialRating,
            internalAssessmentOfFinances,
            isAudited,
            whoAudits

    } = data
    const { assets,
            liabilities,
            totalLiabilities,
            totalValueOfAllAssets,
            financialStatementsAnnual,
            financialStatementsQuarterly,
    } = selectedCompany.financialMatters

    return { statementFromCompany,
        assets,
        totalValueOfAllAssets,
        liabilities,
        totalLiabilities,
        financialStatementsAnnual,
        financialStatementsQuarterly,
        financesAudited: {
            isAudited,
            whoAudits
        },
        businessMargins: {
            status,
            companyProjections,
            areProjectionsReasonable
        }
    };
};

export const formatBenefitsData = data => {
  const {   patents,
    trademarks,
    copyrights,
    negative,
    internalAssessmentOfIP,
    licenses,
    softwareUse,
    assessment,
    services,
    products,
    people,
    revenueEnhancements,
    miscellaneous,
    assessmentOfOtherBenefits,
    internalIPRating,
    internalTechRating,
    internalOtherBenefitsRating } = data

    return  [
        { patents,
          trademarks,
          copyrights,
          negative,
          internalAssessmentOfIP,
          internalIPRating},
        {
          licenses,
          softwareUse,
          assessment,
          internalTechRating
        },
        {
          products,
          people,
          revenueEnhancements,
          miscellaneous,
          assessmentOfOtherBenefits,
          internalOtherBenefitsRating
        }
    ]
};

export const formatDataForEntry = companyName => ({
    companyName,
    costOfAcquisition: 'No Information Provided',
    companyProfile: {
        yearFounded: 'No Information Provided',
        location: {
            headQaurters: 'No Information Provided',
            principlePlaceOfBusiness: 'No Information Provided',
            numberOfOffices: 'No Information Provided'
        },
        numberOfEmployees: 'No Information Provided',
        generalBusinessActivities: 'No Information Provided',
        companyStrategy: {
            vision: 'No Information Provided',
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
        financialStatementsAnnual: [ {title:'2017 Annual Financial Report', Report: 'No Information Provided', type: 'financialStatementsAnnual'},
                                     {title:'2016 Annual Financial Report', Report: 'No Information Provided', type: 'financialStatementsAnnual'},
                                     {title:'2015 Annual Financial Report', Report: 'No Information Provided', type: 'financialStatementsAnnual'},
                                     {title:'2014 Annual Financial Report', Report: 'No Information Provided', type: 'financialStatementsAnnual'}

        ],
        financialStatementsQuarterly: [ {title: '2017 Q1 Financial Report', Report: 'No Information Provided', type: 'financialStatementsQuarterly'},
                                        {title: '2017 Q2 Financial Report', Report: 'No Information Provided', type: 'financialStatementsQuarterly'},
                                        {title: '2017 Q3 Financial Report', Report: 'No Information Provided', type: 'financialStatementsQuarterly'},
                                        {title: '2016 Q1 Financial Report', Report: 'No Information Provided', type: 'financialStatementsQuarterly'},
                                        {title: '2016 Q2 Financial Report', Report: 'No Information Provided', type: 'financialStatementsQuarterly'},
                                        {title: '2016 Q3 Financial Report', Report: 'No Information Provided', type: 'financialStatementsQuarterly'},
                                        {title: '2016 Q4 Financial Report', Report: 'No Information Provided', type: 'financialStatementsQuarterly'},
                                        {title: '2015 Q1 Financial Report', Report: 'No Information Provided', type: 'financialStatementsQuarterly'},
                                        {title: '2015 Q2 Financial Report', Report: 'No Information Provided', type: 'financialStatementsQuarterly'},
                                        {title: '2015 Q3 Financial Report', Report: 'No Information Provided', type: 'financialStatementsQuarterly'},
                                        {title: '2015 Q4 Financial Report', Report: 'No Information Provided', type: 'financialStatementsQuarterly'}
        ],
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
        patents: 'No Information Provided',
        trademarks: 'No Information Provided',
        copyrights: 'No Information Provided',
        negative: 'No Information Provided',
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
        miscellaneous: 'No Information Provided',
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
    managementDirectory: ['No Information Provided'],
    finalAssessment: 'No Information Provided',
    overallRating: 'No Information Provided',
    status: 'Researching'
})
