class PetsController < ApplicationController
  def index
    @pets = Pet.all
    # render 'index'
  end

  def show
    # byebug
    @pet = Pet.find(params[:id])
  end

  # def about
  #   render 'about'
  # end

end
