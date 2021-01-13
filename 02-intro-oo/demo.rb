# class Car
# Properties:
#   - model
#   - make
#   - year
#   - wheels: 4
#   - doors
# Methods:
#   - window function
#   - accelerate
#   - decelerate

# Instance => individual car object
# audi 2 door, green
# audi 3 door, pearl

# x = 3
# puts x.class
# puts x

# y = "Hello world!"
# puts y.methods
# arr = y.split.inspect
# puts arr.methods

# message_name = :+
# puts x.send(message_name, 1) === x + 1

# names = [
#     "Pan",
#     "Harrf",
#     "Megan", 
#     "Carrie"
# ]
# puts names[0]
# puts names.[](3)
# # puts names.methods
# puts names.send(:[], 2)

# # names.respond_to_an_undefined_method
# puts names.respond_to? :split

o = Object.new
puts o
puts o.object_id
puts (o.object_id * 2).to_s(16)
z = Object.new
puts z.object_id == o.object_id