class LogInController < ApplicationController
    skip_before_action :require_login, :only => [:create, :new]
    def new
    end 

    def create
        
        @user = User.find_by(username:params[:log_in][:username])
        if @user && @user.authenticate(params[:log_in][:password])
            log_in_user(@user.id)
            flash[:success] = "#{@user.username} is logged in!"
            redirect_to new_response_path
        else
            flash[:error] = "Credentials are incorrect, try again!"
            redirect_to new_log_in_path
        end 
    end 
    
    def logout
        # logout_user
        session.clear
        flash[:success] = "User was logged out!"
        redirect_to new_log_in_path
    end

end
