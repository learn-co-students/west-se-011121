class BoatingTest

    @@all = []

    def self.all
        @@all
    end

    attr_accessor :status
    attr_reader :test_name, :student, :instructor

    def initialize(test_name, status, student, instructor)
        @test_name, @status, @student, @instructor = test_name, status, student, instructor
        @@all << self
    end


end
