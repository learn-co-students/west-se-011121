class Ride

    @@all = []

    def self.all
        @@all
    end

    #   - Returns the average distance across ALL rides
    def self.average_distance
        @@all.sum {|r| r.distance} / @@all.length
    end

    # - `Ride#passenger`
    #   - Returns the Passenger object for that ride
    # - `Ride#driver`
    #   - Returns the Driver object for that ride
    # - `Ride#distance`
    #   - Returns the distance of the ride
    attr_reader :driver, :passenger, :distance
    
    # A Ride should be initialized with a driver (as a Driver object), a passenger (as a Passenger object), and a distance (as a float i.e. `3.2`). The distance refers to miles.
    def initialize(driver, passenger, distance)
        @driver, @passenger, @distance = driver, passenger, distance.to_f
        @@all << self
    end

end

