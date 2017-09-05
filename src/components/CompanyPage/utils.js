export const renderPageContent = selectedPage => {
    if (selectedPage === 'CompanyOverview') {
        return <CompanyOverview {...this.props} />
    }

    else if (selectedPage === 'CompanyDirectory') {
        return <CompanyDirectory {...this.props} />
    }

    else if (selectedPage === 'FinalAssessmentPage') {
        return <FinalAssessmentPage {...this.props} />
    }

    else if (selectedPage === 'FinancialPage') {
        return <FinancialPage {...this.props} />
    }

    else if (selectedPage === 'BenefitsPage') {
        return <BenefitsPage {...this.props} />
    }

    else return <LegalPage {...this.props/>}
}
