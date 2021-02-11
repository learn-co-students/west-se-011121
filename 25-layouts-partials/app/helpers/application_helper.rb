# frozen_string_literal: true

module ApplicationHelper
    def display_gender(dog)
        dog.sex == 'M' ? 'male' : 'female'
    end

    def logged_in_link
        if false
            link_to("Logout", '/logout')
        else
            link_to("Login", '/login')
        end

    end
  
end
