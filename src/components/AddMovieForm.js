import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddMovieForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Movie Title</label>
          </div>
          <div>
            <Field type="text" name="title" component="input" />
          </div>
          <div>
            <label htmlFor="genre">Movie Genre</label>
          </div>
          <div>
            <Field type="text" name="genre" component="input" />
          </div>
          <div>
            <label htmlFor="actors">Actors</label>
          </div>
          <div>
            <Field type="text" name="actors" component="input" />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
          </div>
          <div>
            <Field type="text" name="rating" component="input" />
          </div>
          <div>
            <label htmlFor="year">Year</label>
          </div>
          <div>
            <Field type="text" name="year" component="input" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

AddMovieForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

AddMovieForm = reduxForm({
  form: 'createMovie',
})(AddMovieForm);

export default AddMovieForm;
