class ScientistsController < ApplicationController

    def index
        @scientists = Scientist.all
    end

    def show
        @scientist = Scientist.find(params[:id])
    end

end
