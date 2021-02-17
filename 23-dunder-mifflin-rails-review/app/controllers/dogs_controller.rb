class DogsController < ApplicationController

    def index
        @dogs = Dog.all
    end

    def sorted
        @dogs = Dog.all.sort_by {|d| d.employees.count}.reverse
        render :index
    end

    def show
        @dog = Dog.find(params[:id])
    end


end
