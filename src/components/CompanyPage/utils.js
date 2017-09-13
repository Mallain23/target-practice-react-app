import React from 'react'

import CompanyOverview from '../CompanyProfile/CompanyOverview';
import FinancialPage from '../FinancialPage/FinancialPage';
import IntellectualPropertyPage from '../BenefitsPage/IntellectualPropertyPage';
import TechnologyPage from '../BenefitsPage/TechnologyPage';
import OtherBenefitsPage from '../BenefitsPage/OtherBenefitsPage';
import LegalPage from '../Legal/LegalPage';
import CompanyDirectory from '../CompanyProfile/CompanyDirectory';
import FinalAssessmentPage from '../CompanyProfile/FinalAssessmentPage';

export const getRelevantPage = (selectedPage, propObj) => {

    if (selectedPage === 'Target Profile') {
        return <CompanyOverview {...propObj} />
    }

    else if (selectedPage === 'Target Directory') {
        return <CompanyDirectory {...propObj} />
    }

    else if (selectedPage === 'Final Assessment') {
        return <FinalAssessmentPage {...propObj}/>
    }

    else if (selectedPage === 'Financial Page' ||
            selectedPage === 'Assets and Liabilities' ||
            selectedPage === 'Financial Statements') {

        return <FinancialPage {...propObj} />
    }

    else if (selectedPage === 'Intellectual Property') {
        return <IntellectualPropertyPage {...propObj} />
    }

    else if (selectedPage === 'Technology') {
        return <TechnologyPage {...propObj} />
    }

    else if (selectedPage === 'Other Benefits') {
        return <OtherBenefitsPage {...propObj} />
    }

    return <LegalPage {...propObj} />
};
