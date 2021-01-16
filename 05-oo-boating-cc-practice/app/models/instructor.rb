class Instructor

    @@all = []

    def self.all
        @@all
    end
    
    # STATUSES = ['passed', 'failed', 'pending'] => could be used to validate the right status with .include?

    attr_reader :name

    def initialize(name)
        @name = name
        @@all << self
    end

    def tests
        # BoatingTest.all.select {|bt| bt.instructor == self }
        results = []
        BoatingTest.all.each do |test|
            if test.instructor == self
                results << test
            end
        end
        results
    end

    def all_students
        tests.map {|test| test.student}
    end

    def passed_students
        passed = tests.select {|test| test.status == "passed"}
        passed.map {|test| test.student}
    end

    def pass_student(student, test_name)
        selected_test = tests.find {|test| test.student == student && test.test_name == test_name}
        if selected_test # selected_test != nil
            selected_test.status = 'passed'
        else
            selected_test = BoatingTest.new(test_name, 'passed', student, self)
        end
        selected_test
    end

    def fail_student(student, test_name)
        selected_test = tests.find {|test| test.student == student && test.test_name == test_name}
        if selected_test # selected_test != nil
            selected_test.status = 'failed'
        else
            selected_test = BoatingTest.new(test_name, 'failed', student, self)
        end
        selected_test
    end

    binding.pry
    binding.pry
    



end
