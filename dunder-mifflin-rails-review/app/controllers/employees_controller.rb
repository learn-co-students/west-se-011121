class EmployeesController < ApplicationController

    before_action :set_employee, only: [:show]

    def index
        @employees = Employee.all
    end

    def show

    end

    def new

    end
    
    def create

    end

    def edit

    end

    def update

    end

    private

    def employee_params

    end

    def set_employee
        @employee = Employee.find(params[:id])
    end


end
