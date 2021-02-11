# frozen_string_literal: true

class SheltersController < ApplicationController
  def show
    @shelter = Shelter.find(params[:id])
  end
end
