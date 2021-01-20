class Driver

    @@all = []

    #   - Returns an array of all Drivera
    def self.all
        @@all
    end
    
    #   - Takes an argument of a distance (float) and returns an array of all Drivers who have driven over the mileage
    def self.mileage_cap(distance)
        rides = Ride.all.select {|r| r.distance > distance}
        rides.map{|r| r.driver}
    end
    
    #   - Returns the name of the driver
    attr_reader :name # => Encapsulation

    # A Driver should be initialized with a name as a string. 
    def initialize(name)
        @name = name
        @@all << self
    end

    #   - Returns an array of all Passengers' names a driver has driven. The names should be **unique** (no repeats).
    def passenger_names
        rides.map {|r| r.passenger.name}.uniq
    end

    #   - Returns an array of all Rides a driver has made
    def rides
        Ride.all.filter {|r| r.driver == self }
    end

end

