class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender
  has_many :species
end
