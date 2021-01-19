class Cat < Pet

  attr_reader :num_lives

  def initialize(name)
    @num_lives = 9
    super # calls Pet#initialize and passes it the name parameter
  end

  # code abstracted to Pet class
  # attr_reader :name
  # attr_accessor :mood
  
  # def initialize(name)
  #   @name = name
  #   @mood = 'nervous'
  # end
end
