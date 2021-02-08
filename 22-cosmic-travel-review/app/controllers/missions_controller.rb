class MissionsController < ApplicationController

    before_action :set_scientists_planets

    def new
        @mission = Mission.new
    end
    
    def create
        @mission = Mission.new(mission_params)
        if @mission.valid?
            @mission.save
            redirect_to scientist_path(@mission.scientist)
        else
            render :new
        end
    end
    
    private
    
    def mission_params
        params.require(:mission).permit(:name, :scientist_id, :planet_id)
    end
    
    def set_scientists_planets
        @scientists = Scientist.all
        @planets = Planet.all
    end

    
end
