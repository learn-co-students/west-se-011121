class UsersController < ApplicationController

    def index
        users = User.all 
        render json: users
    end

    def create
        user = User.create(user_params)
     
        render json: user
    end

    def update
        user = User.find_by(name: params[:name])
        user.update(user_params)
    end


    private

    def user_params
        params.permit(:name, :photo)
    end
end
