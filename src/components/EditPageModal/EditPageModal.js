import React  from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux'

import { closeModal } from '../actions'

import EditCompanyOverviewForm from '../CompanyProfile/EditCompanyOverview'
import ManagementDirectoryForm from '../CompanyProfile/ManagementDirectoryForm'
import FinalAssessmentForm from '../CompanyProfile/FinalAssessmentForm'
import EditLegalForm from '../Legal/EditLegalForm'
import EditFinancialForm from '../FinancialPage/EditFinancialForm'
import FinancialReportForm from '../FinancialPage/FinancialReportForm'
import EditBenefitsForm from '../BenefitsPage/EditBenefits'
import AssetLiabilityForm from '../AssetsLiabilities/AssetLiabilityForm'
// import './Modal.css'

export class EditPageModal extends React.Component {

    constructor(props) {
        super(props)

        this.handleClose = this.handleClose.bind(this)
    };

    handleClose() {
          this.props.dispatch(closeModal())
    };

    renderForm() {
          const { selectedPage, editReport, showALModal } = this.props

          if (editReport) {
              return <FinancialReportForm  />
          }

          else if (showALModal) {
              return <AssetLiabilityForm  />
          }

          else if (selectedPage === 'Company Overview') {
              return <EditCompanyOverviewForm  />
          }

          else if (selectedPage === 'Company Directory') {
              return <ManagementDirectoryForm />
          }

          else if (selectedPage === 'Final Assessment') {
              return <FinalAssessmentForm  />
          }

          else if (selectedPage === 'Legal Page' ||
                   selectedPage === 'Legal Assessment') {

              return <EditLegalForm  />
          }

          else if (selectedPage === 'Financial Page') {
            return <EditFinancialForm  />
          }

          else if (selectedPage ===  'Intellectual Property' ||
                   selectedPage === 'Technology' ||
                   selectedPage === 'Other Benefits') {

              return <EditBenefitsForm />
          }

          return ''
    }

    render() {
        const { showEditModal,
                selectedPage,
                companyName } = this.props


        return (
            <div className="Add-Company-Modal">
                <Modal show={showEditModal}
                       onHide={this.handleClose}
                       container={this}
                       aria-labelledby="edit-page-modal">

                    <Modal.Header closeButton>
                        <Modal.Title id="edit-page-modal">{companyName} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.renderForm()}
                    </Modal.Body>
                    <Modal.Footer>
                  </Modal.Footer>
              </Modal>
            </div>
        );
    };
};

const mapStateToProps = state => {
    const { showEditModal, selectedPage, showALModal,  } = state.app
    const { companyName } = state.app.selectedCompany
    return {
        showEditModal,
        showALModal,
        selectedPage,
        companyName
    };
};

export default connect(mapStateToProps)(EditPageModal)
