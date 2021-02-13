class LogInController < ApplicationController
    skip_before_action :require_login, :only => [:create, :new]
    def new
    end 

    def create
        
        @user = User.find_by(username:params[:log_in][:username])
        if @user && @user.authenticate(params[:log_in][:password])
            log_in_user(@user.id)
            redirect_to new_response_path
        else
        
            redirect_to new_log_in_path
        end 
    end 

end
