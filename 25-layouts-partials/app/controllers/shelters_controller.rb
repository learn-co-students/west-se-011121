# frozen_string_literal: true

class SheltersController < ApplicationController
  layout 'sadboy'
  def index
    @shelters = Shelter.all
  end

  def show
    @shelter = Shelter.find(params[:id])
    # render layout:false
  end

end
