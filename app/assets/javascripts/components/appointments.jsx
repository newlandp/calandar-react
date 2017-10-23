class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: '',
      appt_time: ''
    };

    this.updateAppointments = this.updateAppointments.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(values) {
    const appointment = { title: values.title, appt_time: values.appt_time };
    $.post('/appointments',
      {appointment: appointment})
      .done(data => {
        this.updateAppointments(data);
      });
  }

  updateAppointments(data) {
    let appointments = [ ...this.state.appointments, data ];
    appointments.sort((a, b) => {
      return new Date(a.appt_time) - new Date(b.appt_time);
    });
    this.setState({
      appointments: appointments
    });
  }

  render() {
    return (
      <div>
        <AppointmentForm
          handleFormSubmit={this.handleFormSubmit} />
        <AppointmentsList
          appointments={this.state.appointments} />
      </div>
    );
  }
}