class PetsController < ApplicationController

  before_action :find_pet, only: [:show, :edit, :update, :destroy]
  
  # GET /pets
  def index
    @pets = Pet.all
  end

  # GET /pets/:id
  # def show
    # find_pet
  # end

  # GET /pets/new
  def new
    @pet = Pet.new
  end

  # POST /pets
  def create
    if params[:pet][:name] != "" # => won't allow creation of a Pet without a name attr
      @pet = Pet.create(pet_params)
      redirect_to pet_path(@pet) # using the URL helper method for the show route
    else
      redirect_to new_pet_path
    end
  end

  # GET /pets/:id/edit
  # def edit
  #   # find_pet
  # end

  # PATCH /pets/:id
  def update
    # find_pet
    @pet.update(pet_params)
    redirect_to pet_path(@pet)
  end

  def destroy
    @pet.destroy
    redirect_to pets_path
  end

  private

  # strong params
  def pet_params
    params.require(:pet).permit(:name, :species, :year_of_birth, :good_with_kids)
  end

  def find_pet
    @pet = Pet.find(params[:id])
  end

end
