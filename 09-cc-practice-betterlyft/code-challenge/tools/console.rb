require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end


# Put your variables here~!
p1 = Passenger.new("Peyton")
p2 = Passenger.new("Harrf")

d1 = Driver.new("Johndhee")
d2 = Driver.new("Syd")

r1 = Ride.new(d1, p1, 75)
r2 = Ride.new(d2, p1, 35.4)
r3 = Ride.new(d2, p1, 15.2)


binding.pry
