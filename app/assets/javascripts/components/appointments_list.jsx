const AppointmentsList = props => {
  const appointmentsList = props.appointments.map(appointment => {
    return <Appointment appointment={appointment} key={appointment.id} />;
  });

  return (
    <div>
      {appointmentsList}
    </div>
  );
};