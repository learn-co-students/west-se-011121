class MissionsController < ApplicationController

    def new
        @mission = Mission.new
        @scientists = Scientist.all
        @planets = Planet.all
    end

    
end
