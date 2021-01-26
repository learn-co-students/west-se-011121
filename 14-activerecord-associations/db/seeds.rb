# p1 = Patient.create(name:"Erik", condition: "sleep deprived")
# p2 = Patient.create(name:"Syd", condition: "obesity")

# d1 = Doctor.create(name:"Megan")
# d2 = Doctor.create(name:"Johndhee")

# a1 = Appointment.create(time: DateTime.now, patient: p2, doctor: d2)

conditions = ["backache", "headache", "heartache", "sore foot", "nausea"]
5.times do
    Patient.create(name: Faker::FunnyName.name, condition: conditions.sample)
end

departments = ["Oncology", "Cardiology", "Pediatrics", "Radiology"]
departments.each do |d|
    Department.create(name: d)
end


5.times do
    Doctor.create(name: Faker::Name.name, department: Department.all.sample)
end

5.times do
    Appointment.create(time: Faker::Date.between(from: Date.tomorrow, to: 1.year.from_now), patient: Patient.all.sample, doctor: Doctor.all.sample)
end