class Scientist < ApplicationRecord
    has_many :missions
    has_many :planets, through: :missions
end
