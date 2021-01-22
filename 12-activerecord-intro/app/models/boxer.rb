class Boxer < ActiveRecord::Base

    belongs_to :trainer

    # def trainer
    #     Trainer.find(self.trainer_id)
    # end

end