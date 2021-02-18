class ApplicationController < ActionController::Base
    before_action :require_login
    #check current user 
    #logged?
    #require login

    helper_method :logged_in?

    def require_login
        
        unless logged_in?
            redirect_to new_log_in_path
        end 
    end 

    def current_user
        @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
    end

    def current_user_id
        session[:user_id]
    end 

    def logged_in?
        !!current_user_id
    end 
  
    def log_in_user(user_id)
        session[:user_id] = user_id
    end 

    def logout_user
        session.clear
    end
end