require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

student1 = Student.new("Simon")
student2 = Student.new("Miyuki")
instructor1 = Instructor.new("Morty")
instructor2 = Instructor.new("Rick")

bt1= student1.add_boating_test("Docking", "passed", instructor1)
bt2= student1.add_boating_test("Knots", "failed", instructor2)

spongebob = Student.new("Spongebob")
patrick= Student.new("Patrick")

puff= Instructor.new("Ms.Puff")
krabs= Instructor.new("Mr.Krabs")

no_crashing = spongebob.add_boating_test("Don't Crash 101", "pending", puff)
power_steering_failure = patrick.add_boating_test("Power Steering 202", "failed", puff)
power_steering_pass = patrick.add_boating_test("Power Steering 201", "passed", krabs)

binding.pry
0 #leave this here to ensure binding.pry isn't the last line

