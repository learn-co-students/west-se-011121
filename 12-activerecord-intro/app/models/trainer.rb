class Trainer < ActiveRecord::Base

    has_many :boxers

    # def boxers
    #     # Boxer.all.select{|boxer| boxer.trainer_id == self.id}
    #    Boxer.where(trainer_id: self.id)
    # end

end