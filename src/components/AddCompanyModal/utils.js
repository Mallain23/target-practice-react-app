const NO_INFORMATION_PROVIDED = 'No Information Provided'
const NO_DATA_AVAILABLE_YET = 'No Data Available Yet'

export const formatDataForDatabaseEntry = ({companyName}) => ({
    companyName,
    costOfAcquisition: NO_INFORMATION_PROVIDED,
    companyProfile: {
        yearFounded: NO_INFORMATION_PROVIDED,
        location: {
            headQaurters: NO_INFORMATION_PROVIDED,
            principlePlaceOfBusiness: NO_INFORMATION_PROVIDED,
            numberOfOffices: NO_INFORMATION_PROVIDED
        },
        numberOfEmployees: NO_INFORMATION_PROVIDED,
        generalBusinessActivities: NO_INFORMATION_PROVIDED,
        companyStrategy: {
            vision: NO_INFORMATION_PROVIDED,
            coreValues: NO_INFORMATION_PROVIDED,
            goals: NO_INFORMATION_PROVIDED,
        },
        industryInformation: {
            backgroundInformation: NO_INFORMATION_PROVIDED,
            presentCondition: NO_INFORMATION_PROVIDED,
            workForce: NO_INFORMATION_PROVIDED
        },
    },
    financialMatters: {
        statementFromCompany: NO_INFORMATION_PROVIDED,
        assets: [],
        totalValueOfAllAssets: NO_DATA_AVAILABLE_YET,
        liabilities: [],
        totalLiabilities: NO_DATA_AVAILABLE_YET,
        financialStatementsAnnual: [ {title:'2017 Annual Financial Statement', Report: NO_INFORMATION_PROVIDED, type: 'financialStatementsAnnual'},
                                     {title:'2016 Annual Financial Statement', Report: NO_INFORMATION_PROVIDED, type: 'financialStatementsAnnual'},
                                     {title:'2015 Annual Financial Statement', Report: NO_INFORMATION_PROVIDED, type: 'financialStatementsAnnual'},
                                     {title:'2014 Annual Financial Statement', Report: NO_INFORMATION_PROVIDED, type: 'financialStatementsAnnual'}

        ],
        financialStatementsQuarterly: [ {title: '2017 Q1 Financial Statement', Report: NO_INFORMATION_PROVIDED, type: 'financialStatementsQuarterly'},
                                        {title: '2017 Q2 Financial Statement', Report: NO_INFORMATION_PROVIDED, type: 'financialStatementsQuarterly'},
                                        {title: '2017 Q3 Financial Statement', Report: NO_INFORMATION_PROVIDED, type: 'financialStatementsQuarterly'},
                                        {title: '2016 Q1 Financial Statement', Report: NO_INFORMATION_PROVIDED, type: 'financialStatementsQuarterly'},
                                        {title: '2016 Q2 Financial Statement', Report: NO_INFORMATION_PROVIDED, type: 'financialStatementsQuarterly'},
                                        {title: '2016 Q3 Financial Statement', Report: NO_INFORMATION_PROVIDED, type: 'financialStatementsQuarterly'},
                                        {title: '2016 Q4 Financial Statement', Report: NO_INFORMATION_PROVIDED, type: 'financialStatementsQuarterly'},
                                        {title: '2015 Q1 Financial Statement', Report: NO_INFORMATION_PROVIDED, type: 'financialStatementsQuarterly'},
                                        {title: '2015 Q2 Financial Statement', Report: NO_INFORMATION_PROVIDED, type: 'financialStatementsQuarterly'},
                                        {title: '2015 Q3 Financial Statement', Report: NO_INFORMATION_PROVIDED, type: 'financialStatementsQuarterly'},
                                        {title: '2015 Q4 Financial Statement', Report: NO_INFORMATION_PROVIDED, type: 'financialStatementsQuarterly'}
        ],
        financesAudited: {
            isAudited: NO_INFORMATION_PROVIDED,
            whoAudits: NO_INFORMATION_PROVIDED,
            forHowLong: NO_INFORMATION_PROVIDED
        },
        businessMargins: {
            status: NO_INFORMATION_PROVIDED,
            companyProjections: NO_INFORMATION_PROVIDED,
            areProjectionsReasonable:  NO_INFORMATION_PROVIDED
        },
        internalAssessmentOfFinances: NO_INFORMATION_PROVIDED,
        internalFinancialRating: NO_INFORMATION_PROVIDED
    },
    intellectualProperty: {
        patents: NO_INFORMATION_PROVIDED,
        trademarks: NO_INFORMATION_PROVIDED,
        copyrights: NO_INFORMATION_PROVIDED,
        negative: NO_INFORMATION_PROVIDED,
        internalAssessmentOfIP: NO_INFORMATION_PROVIDED,
        internalIPRating: '0'
    },
    technology: {
        licenses: NO_INFORMATION_PROVIDED,
        softwareUse: NO_INFORMATION_PROVIDED,
        benefits: NO_INFORMATION_PROVIDED,
        assessment: NO_INFORMATION_PROVIDED,
        internalTechRating: '0'
    },
    otherBenefitsProvided: {
        services: NO_INFORMATION_PROVIDED,
        products: NO_INFORMATION_PROVIDED,
        people: NO_INFORMATION_PROVIDED,
        revenueEnhancements: NO_INFORMATION_PROVIDED,
        miscellaneous: NO_INFORMATION_PROVIDED,
        assesment: NO_INFORMATION_PROVIDED,
        internalOtherBenefitsRating: '0'
    },
    legal: {
        futureLitgiation: NO_INFORMATION_PROVIDED,
        currentLitigation: NO_INFORMATION_PROVIDED,
        otherLitigation: NO_INFORMATION_PROVIDED,
        reviewofContracts: NO_INFORMATION_PROVIDED,
        threatened: NO_INFORMATION_PROVIDED,
        settlement: NO_INFORMATION_PROVIDED,
        arbitration: NO_INFORMATION_PROVIDED,
        otherRegulatory: NO_INFORMATION_PROVIDED,
        assessment: NO_INFORMATION_PROVIDED,
        internalIssues: NO_INFORMATION_PROVIDED,
        rating: '0'
    },
    managementDirectory: [],
    finalAssessment: NO_INFORMATION_PROVIDED,
    overallRating: '0',
    status: 'Researching'
})

export const DUPLICATE_COMPANY_STRING = "A Company with the same name already exists in the database!"
