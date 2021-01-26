p1 = Patient.create(name:"Erik", condition: "sleep deprived")
p2 = Patient.create(name:"Syd", condition: "obesity")

d1 = Doctor.create(name:"Megan")
d2 = Doctor.create(name:"Johndhee")

a1 = Appointment.create(time: DateTime.now, patient: p2, doctor: d2)