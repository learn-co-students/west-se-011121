class Pet < ApplicationRecord

    validates :name, presence: true

    def age
        Date.current.year - self.year_of_birth
    end

    def to_s
        "#{self.name} #{self.age}"
    end

end
