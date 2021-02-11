# frozen_string_literal: true

class Dog < ApplicationRecord
  belongs_to :owner, optional: true
  belongs_to :shelter, optional: true
  accepts_nested_attributes_for :owner, reject_if: :all_blank
  validates :name, presence: true
  validates :age, presence: true
  validates :breed, presence: true

  def self.owned
    where(shelter_id: nil)
  end

  def self.adoptable
    where(owner_id: nil)
  end
end
