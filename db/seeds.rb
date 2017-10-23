3.times do |num|
  time = Time.new(2017,8,num + 1,15,25,0, "+09:00")
  Appointment.create!(title: "Appointment #{num}", appt_time: time)
end