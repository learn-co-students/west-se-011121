class User < ApplicationRecord
    has_many :recipes, dependent: :destroy
    has_many :allergies, dependent: :destroy
    has_many :ingredients, through: :allergies
end
