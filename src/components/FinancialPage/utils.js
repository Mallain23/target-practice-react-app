export const formatFinanceData = (data, selectedCompany) => {

    const {
        status,
        statementFromCompany,
        companyProjections,
        areProjectionsReasonable,
        internalFinancialRating,
        internalAssessmentOfFinances,
        isAudited,
        whoAudits
    } = data;

    const {
        assets,
        liabilities,
        totalLiabilities,
        totalValueOfAllAssets,
        financialStatementsAnnual,
        financialStatementsQuarterly,
    } = selectedCompany.financialMatters;

    return {
        financialMatters: {
            statementFromCompany,
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
            },
            internalAssessmentOfFinances,
            internalFinancialRating
        }
    };
};

export const formatFinanceStatements = (report, selectedReport, selectedCompany) => {
    const { type: typeOfReport} = report
    const updatedReports = selectedCompany.financialMatters[typeOfReport].filter(report =>
        report !== selectedReport).concat(report);

    const financialMatters = Object.assign({}, selectedCompany.financialMatters, {
        [typeOfReport]: updatedReports
    });

    return { financialMatters }
};

export const TITLE = 'title'
