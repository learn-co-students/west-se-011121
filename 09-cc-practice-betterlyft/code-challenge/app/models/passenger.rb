class Passenger

    @@all = []

    #   - Returns an array of all Passengers
    def self.all
        @@all
    end
    
    #   - Returns an array of all Passengers who have travelled over 100 miles in total with the service
    def self.premium_members
        self.all.select {|passenger| passenger.total_distance > 100.0 }
    end
    
    #   - Returns the name of the passenger
    attr_reader :name

    # A Passenger should be initialized with a name as a string. After the Passenger has been initialized, it shouldn't be changed.
    def initialize(name)
        @name = name
        @@all << self
    end

    #   - Returns an array of Ride instances that this person has been on
    def rides
        Ride.all.select {|ride| ride.passenger == self}
    end

    #   - Returns an array of Driver instances that this person has rode with
    def drivers
        rides.map {|ride| ride.driver}
    end

    #   - Returns the floating number that represents the total distance the passenger has travelled using the service
    def total_distance
       distances = rides.map {|ride| ride.distance}
    #    binding.pry
        distances.sum
    end

    
end


# - `Passenger.premium_members`
