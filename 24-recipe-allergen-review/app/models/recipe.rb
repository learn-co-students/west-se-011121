class Recipe < ApplicationRecord
  belongs_to :user
  has_many :recipe_ingredients, dependent: :destroy
  has_many :ingredients, through: :recipe_ingredients

  MEAL_TYPES = ["Breakfast", "Lunch", "Dinner", "Appetizers", "Sweets"]

  validates :name, presence: true
  validates :meal_type, inclusion: {in: MEAL_TYPES}
end
