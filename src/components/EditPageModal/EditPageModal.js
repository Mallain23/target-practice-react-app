import React  from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux'

import { closeModal } from '../actions'

import EditCompanyOverviewForm from './EditCompanyOverview'
import ManagementDirectoryForm from './ManagementDirectoryForm'
import FinalAssessmentForm from './FinalAssessmentForm'
import EditLegalForm from './EditLegalForm'
import EditFinancialForm from './EditFinancialForm'
import FinancialReportForm from './FinancialReportForm'
import EditBenefitsForm from './EditBenefits'
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
          const { selectedPage, editReport } = this.props

          if (editReport) {
              return <FinancialReportForm {...this.props} />
          }

          else if (selectedPage === 'Company Overview') {
              return <EditCompanyOverviewForm {...this.props} />
          }

          else if (selectedPage === 'Company Directory') {
              return <ManagementDirectoryForm {...this.props} />
          }

          else if (selectedPage === 'Final Assessment') {
              return <FinalAssessmentForm {...this.props} />
          }
          else if (selectedPage === 'Legal Page') {
              return <EditLegalForm {...this.props} />
          }

          else if (selectedPage === 'Financial Page') {
            return <EditFinancialForm {...this.props} />
          }

          else if (selectedPage ===  'Benefits Page') {
              return <EditBenefitsForm {...this.props} />
          }

          return ''
    }

    render() {
        const { showEditModal, selectedCompany } = this.props

        return (
            <div className="Add-Company-Modal">
                <Modal show={showEditModal}
                       onHide={this.handleClose}
                       container={this}
                       aria-labelledby="edit-page-modal">

                    <Modal.Header closeButton>
                        <Modal.Title id="edit-page-modal">Edit Company Information</Modal.Title>
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
    const { showEditModal,
            selectedFinancialReport,
            companies,
            selectedCompany,
            selectedPage,
            editContact,
            editReport,
            contactToEdit } = state.app

    return {
        showEditModal,
        companies,
        selectedFinancialReport,
        selectedCompany,
        selectedPage,
        editContact,
        editReport,
        contactToEdit
    };
};

export default connect(mapStateToProps)(EditPageModal)
