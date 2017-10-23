class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order('appt_time')
  end

  def create
    @appointment = Appointment.new(appointment_params)

    respond_to do |format|
      if @appointment.save
        format.json { render json: @appointment, status: :created, location: @appointment }
      else
        format.json { render json: @appointment.errors, status: :unprocessable_entity }
      end
    end
  end

private

  def appointment_params
    params.require(:appointment).permit(:title, :appt_time)
  end
end
