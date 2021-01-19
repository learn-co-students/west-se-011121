class Pet
    attr_reader :name
    attr_accessor :mood
  
    def initialize(name)
        @name = name
        @mood = 'nervous'
    end

    # attr_accessor is providing the following getter and setter methods
    
    # getter method
    # def mood
    #     @mood
    # end

    # setter method
    # def mood=(new_mood)
    #     @mood = new_mood
    # end
    
end