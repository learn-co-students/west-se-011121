class Student

    @@all = []

    def self.all
        @@all
    end

    def self.find_student(first_name)
        @@all.find {|student| student.first_name == first_name}
    end

    attr_reader :first_name

    def initialize(first_name)
        @first_name = first_name
        @@all << self
    end

    def add_boating_test(test_name, status, instructor)
        BoatingTest.new(test_name, status, self, instructor)
    end

    def tests
        BoatingTest.all.select {|bt| bt.student == self }
    end

    def all_instructors
        tests.map {|test| test.instructor}
    end

    def grade_percentage
        total = tests.count
        passed = tests.select {|test| test.status == 'passed'}.count
        (passed.to_f / total.to_f) * 100
    end



end
