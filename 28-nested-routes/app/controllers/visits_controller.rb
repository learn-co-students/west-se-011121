class VisitsController < ApplicationController
  before_action :if_not_logged_in, only: [:create, :new, :edit, :update]
  before_action :set_state_if_nested, only: [:new, :index]
  def new
    if @state
      @visit = @state.visits.build
    else
      @visit = current_user.visits.build
    end
  end

  def create
    @visit = current_user.visits.build(visit_params)
    if @visit.save
      redirect_to visits_path
    else
      render 'visits/new'
    end
  end

  def index
    # if params[:state_id]
    #   @visits = Visit.where(state_id: params[:state_id])
    # else
    #   @visits = Visit.all
    # end
    
    if @state
      @visits = @state.visits
    else
      @visits = Visit.all
    end
  end


  def show
    @visit = Visit.find_by_id(params[:id])
  end

  def edit
    @visit = Visit.find_by_id(params[:id])
    redirect_to visits_path if @visit.user != current_user
  end

  def update
    @visit = Visit.find_by_id(params[:id])
    redirect_to visits_path if @visit.user != current_user
    if @visit.update(visit_params)
      redirect_to visit_path(@visit)
    else
      render 'visits/edit'
    end
  end

  private
  def visit_params
    params.require(:visit).permit(:state_id, :rating)
  end

  def set_state_if_nested
    @state = State.find_by_id(params[:state_id]) if params[:state_id]
  end


end