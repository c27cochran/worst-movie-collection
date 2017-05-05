import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitForm } from '../actions/moviesActions';
import AddMovieForm from './AddMovieForm';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.submitForm(values);
  }

  render() {
    return (
      <div>
        <AddMovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

AddMovie.propTypes = {
  submitForm: React.PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  form: store.form,
});

const mapDispatchToProps = dispatch => ({
  submitForm(values) {
    dispatch(submitForm(values));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
