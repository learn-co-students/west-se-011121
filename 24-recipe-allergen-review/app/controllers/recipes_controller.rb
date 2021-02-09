class RecipesController < ApplicationController

    before_action :set_recipe, only: [:show, :edit, :update, :destroy]

    before_action :set_users, only: [:new, :create, :edit]

    def index
        @recipes = Recipe.all
    end

    def show
    end
    
    def new
        @recipe = Recipe.new
    end
    
    def create
        @recipe = Recipe.new(recipe_params)
        if @recipe.save
            redirect_to @recipe
        else
            render :new
        end
    end
    
    def edit
        
    end
    
    def update
        
    end
    
    def destroy
        
    end
    
    private

    def recipe_params
        params.require(:recipe).permit(:name, :meal_type, :user_id)
    end
    
    def set_recipe
        @recipe = Recipe.find(params[:id])
    end

    def set_users
        @users = User.all
    end

end
