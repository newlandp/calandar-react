class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      appt_time: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formValues = this.state;
    this.props.handleFormSubmit(formValues);
    this.setState({
      title: '',
      appt_time: ''
    });
  }

  render() {
    const inputProps = {
      name: 'appt_time',
      placeholder: 'Click to select a date'
    };

    return (
      <div>
        <h2>Make a New Appointment</h2>
        <form onSubmit={this.handleSubmit}>
          <input name="title" type="text" placeholder="Appointment Title"
            value={this.state.title} onChange={ e => this.setState({ title: e.target.value }) } />
          <Datetime
            value={this.state.appt_time}
            inputProps={inputProps}
            onChange={ moment => this.setState({ appt_time: moment._d }) }
            input={false}
            open={true}
            />
          <input type="submit" value="Make Appointment" className="submit-button" />
        </form>
      </div>
    );
  }
}