import React from 'react'

import EditCompanyOverviewForm from '../CompanyProfile/EditCompanyOverview';
import ManagementDirectoryForm from '../CompanyProfile/ManagementDirectoryForm';
import FinalAssessmentForm from '../CompanyProfile/FinalAssessmentForm';
import EditLegalForm from '../Legal/EditLegalForm';
import EditFinancialForm from '../FinancialPage/EditFinancialForm';
import FinancialReportForm from '../FinancialPage/FinancialReportForm';
import EditOtherBenefitsForm from '../BenefitsPage/EditOtherBenefitsForm';
import EditIPForm from '../BenefitsPage/EditIPForm';
import EditTechForm from '../BenefitsPage/EditTechForm';
import AssetLiabilityForm from '../AssetsLiabilities/AssetLiabilityForm';


export const getRelevantForm = (selectedPage, editReport, showALModal) => {

    if (editReport) {
        return <FinancialReportForm   />
    }

    else if (showALModal) {
        return <AssetLiabilityForm  />
    }

    else if (selectedPage === 'Target Profile') {
        return <EditCompanyOverviewForm  />
    }

    else if (selectedPage === 'Target Directory') {
        return <ManagementDirectoryForm />
    }

    else if (selectedPage === 'Final Assessment') {
        return <FinalAssessmentForm  />
    }

    else if (selectedPage === 'Legal Factors' ||
             selectedPage === 'Legal Assessment') {

        return <EditLegalForm  />
    }

    else if (selectedPage === 'Financial Page') {
      return <EditFinancialForm  />
    }

    else if (selectedPage ===  'Intellectual Property') {

        return <EditIPForm />
    }

    else if (selectedPage ===  'Technology') {

        return <EditTechForm />
    }

    else if (selectedPage ===  'Other Benefits') {

        return <EditOtherBenefitsForm />
    }

    return ''
};

export const statusObject = {
    Approved: 'Approved',
    Pending: 'Pending',
    Declined: 'Declined',
    Researching: 'Researching'
};
