class PetsController < ApplicationController
  
  # GET /pets
  def index
    @pets = Pet.all
    # render 'index' => where render is a method call and 'index' is an argument
  end

  # GET /pets/:id
  def show
    find_pet
    # @pet = Pet.find(params[:id]) => abstracted into the find_pet helper method
  end

  # def about
  #   render 'about' => if the only logic in an action can be done implicitly, the whole action can be implied
  # end

  # GET /pets/new
  def new
    # render(:new) => this whole action could also be implicit
  end

  # POST /pets
  def create
    puts "post request to /pets has been made and arrive in create" # => judicious puts can help with debugging
    # code to create a new Pet from params
    pet = Pet.create(name: params[:name], # naming attributes individually bypasses Rails' restrictions on AR mass assignment
      species: params[:species],
      year_of_birth: params[:year_of_birth],
      good_with_kids: params[:good_with_kids])
    redirect_to pet_path(pet) # using the URL helper method for the show route
  end

  # GET /pets/:id/edit
  def edit
    find_pet
  end

  # PATCH /pets/:id
  def update
    find_pet
    # raise params.inspect => deliberately raising an error that will also show the content of params
    pet.update(pet_params)
    redirect_to pet_path(@pet)
  end

  private

  # strong params that take advantage of Rails security features to prevent e.g. SQL injection attacks
  def pet_params
    params.require(:pet).permit(:name, :species, :year_of_birth, :good_with_kids)
  end

  def find_pet
    @pet = Pet.find(params[:id])
  end

end
