class CohortsController < ApplicationController
  before_action :find_cohort, only: [:show]

  def index
    @cohorts = Cohort.all
  end

  def show

  end

  def new
    @cohort = Cohort.new
  end

  def create
    @cohort = Cohort.create(cohort_params)
    if @cohort.valid?
      redirect_to @cohort
    else
      redirect_to new_cohort_path
    end
  end

  private
  
  def cohort_params
    params.require(:cohort).permit(:name)
  end

  def find_cohort
    @cohort = Cohort.find_by(id: params[:id])
  end
end
