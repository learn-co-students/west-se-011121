class StudentsController < ApplicationController
  before_action :find_student, only: [:show]

  def index
    @students = Student.all
  end

  def show

  end

  def new
    @student = Student.new
    @cohorts = Cohort.all
  end

  def create
    @student = Student.new(student_params)
    if @student.save
      redirect_to student_path(@student.id)
    else
      redirect_to new_student_path
    end
  end

  private
  
  def student_params
    params.require(:student).permit(:name, :cohort_id)
  end

  def find_student
    @student = Student.find_by(id: params[:id])
  end
end
