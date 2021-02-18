module ApplicationHelper

    def render_login
        if logged_in?
            link_to "Logout", logout_path
          else
            link_to "Login", new_log_in_path
      end 
    end

end
