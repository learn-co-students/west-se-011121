
original_string = "wuefghklsvj745-678-4346bdfhgiujkbserigjsknf&df232.392.1424"

# new_string = original_string.match(/[78]+/)
# new_string = original_string.scan(/[78]/)
new_string = original_string =~ /[78]/

# If a match is found, the index of first match in string is returned.


# puts new_string.inspect
# puts original_string


# iterators???? gsub!

lotr = "the lord of the rings"

surprise = lotr.gsub(/[tlr]/, "")
# surprise = lotr.gsub(/[a-z]/, "surprise")
# g => global, sub => substitution

capitalized = lotr.gsub(/\w+/) { |w| w.capitalize }
# + => repeated

# puts surprise

puts capitalized
