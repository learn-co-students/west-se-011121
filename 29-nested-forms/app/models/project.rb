class Project < ApplicationRecord

    validates :name, :due_date, presence: true
    has_many :tasks, dependent: :destroy
    validates_associated :tasks

    accepts_nested_attributes_for :tasks, reject_if: lambda{|attrs| attrs['name'].blank?}# tasks_attribute=(attributes)

    # def tasks_attributes=(task_attr) # custom writer which overrides accepts_nested_attributes_for
    #     byebug
    #     task_attr.values.each do |attr|
    #         attr[:name] = attr[:name].upcase
    #         self.tasks.build(attr)
    #     end
    # end

    def complete
        self.tasks.where(complete: true)
    end

    def incomplete
        self.tasks.where(complete: false)
    end

end
