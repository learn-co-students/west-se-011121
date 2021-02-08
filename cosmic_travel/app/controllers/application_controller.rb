class ApplicationController < ActionController::Base

    def about
        @pcount = Planet.all.count
        @scount = Scientist.all.count
    end
    
end
