# frozen_string_literal: true

module ApplicationHelper
  def display_gender(dog)
    if dog.sex == 'M'
      'male'
    else
      'female'
    end
  end

  def display_login_link
    if logged_in?
      link_to('Logout', '/logout')
    else
      link_to('Log in', '/login')

    end
  end
end
