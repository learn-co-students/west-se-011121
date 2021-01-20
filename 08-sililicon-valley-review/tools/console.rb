require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end
# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

s1 = Startup.new("CatsRUs", "Jasper", "finance")
s2 = Startup.new("Hydro W", "Dave", "tech")
s3 = Startup.new("MicRUs", "Dave", "tech")
# s3 = Startup.new()
# s4 = Startup.new()
v1 = VentureCapitalist.new('Jake', 10000000000000000)
v2 = VentureCapitalist.new('Dan', 5000)
v3 = VentureCapitalist.new('Fin', 10000000000000000)

f1 = FundingRound.new(s1, v1, 'Seed', 500000)
f2 = FundingRound.new(s1, v1, 'Seed', 500000)
f3 = FundingRound.new(s1, v1, 'Seed', 500000)
f4 = FundingRound.new(s1, v2, 'Seed', 50)
f5 = FundingRound.new(s2, v1, 'Seed', 5)



binding.pry
0 #leave this here to ensure binding.pry isn't the last line