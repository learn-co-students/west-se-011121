class PokemonsController < ApplicationController
  def create
    pokemon = Pokemon.create(nickname: Faker::Name.name, species: Faker::Games::Pokemon.name, trainer_id: params[:trainer_id])
    render json: pokemon, include: [:trainer]
  end

  def destroy
    pokemon = Pokemon.find(params[:id])
    pokemon.delete
    render json: pokemon, include: [:trainer]
  end
end
