import React from 'react'
import {Field, reduxForm, focus} from 'redux-form';
import {Link} from 'react-router-dom';

export class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleCancel = this.handleCancel.bind(this)
    };

    componentDidMount() {
        if (this.props.isEditing) {
              let postId = this.props.match.params.postId

              this.props.dispatch(fetchSelectedPost(postId))
              .then(({ post }) => this.handleInitialize(post))
          }
      };

    handleInitialize(postObj) {
        this.props.initialize(postObj)
    };

    onSubmit(values) {



        this.props.dispatch(editPost(values))
        .then(({ post }) => this.props.history.push(`/post/${post.postId}`));
    };

    handleCancel() {
        this.props.dispatch(setEditPostTrue())
        this.props.history.push(`/`);
    };

    render() {
        return (
            <form
                className="edit-company-overview-form"
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                >
                <label htmlFor="companyName">Company Name</label>
                <Field component={Input} placeholder='Enter Company Name' type="text" name="companyName" validate={[required, nonEmpty]} />
                <label htmlFor="costOfAcquisition">Cost of Acquiring Target</label>
                <Field component={Input} placeholder='Enter all costs of acquiring target' type="text" name="costOfAcquisition" validate={[required, nonEmpty]} />
                <label htmlFor="yearFounded">Year Founded</label>
                <Field
                    component={Input}
                    type="text"
                    name="yearFounded"
                    placeholder='Enter year compnay was founded'
                    validate={[required, nonEmpty]} />
                <label htmlFor="dining">Where did you eat?</label>
                <Field
                    component={TextArea}
                    className='textarea'
                    type="textbox"
                    name="dining"
                    placeholder='Tell us about the place(s) you ate! Be as detailed and descriptive as possible!'
                />
                <label htmlFor="sites">What sites did you see?</label>
                <Field
                    component={TextArea}
                    type="textbox"
                    name="sites"
                    placeholder='Tell us about the sites you saw! (e.g. Statue of Liberty, Empire State Building, Museums) Be as detailed and descriptive as possible!'
                />
                <label htmlFor="activities">What activities did you do?</label>
                <Field
                    component={TextArea}
                    type="textbox"
                    name="activities"
                    placeholder='Tell us about the activities that you did! (e.g. Guided Tours, Hiking, Safaris, Zip-Lining ) Be as detailed and descriptive as possible!'
                />
                <label htmlFor="advice">Advice for other travelerss</label>
                <Field
                    component={TextArea}
                    type="textbox"
                    name="advice"
                    placeholder='Use this section to give other travels advice and tips about traveling to this destination. (e.g. favorite or least favorite things, things to avoid, things you would have done differently or the same )'
                />
                <label htmlFor="rating">Rate your trip!</label>
                <Field
                    component={Input}
                    type="number"
                    name="rating"
                    placeholder='Rate your trip on a scale of 1 to 10!'
                    validate={[required, isNumber, validValue]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    {this.renderButtonText()}
                </button>
                <button
                    disabled={this.props.submitting}
                    onClick={this.handleCancel}>
                    Cancel
                </button>
                </form>
        )
    }
};

export default PostForm = reduxForm({
    form: 'manage-post',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('manage-post', Object.keys(errors)[0]))
})(PostForm);
