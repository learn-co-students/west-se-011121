class AppointmentsController < ApplicationController

    before_action :set_appointment, only: [:edit, :update]

    def new
        @appointment = Appointment.new
        @patients = Patient.all
        @doctors = Doctor.all
    end
    
    def create
        # raise params.inspect
        @appointment = Appointment.new(appointment_params)
        if @appointment.save
            redirect_to patient_path(@appointment.patient)
        else
            @patients = Patient.all
            @doctors = Doctor.all
            render :new
        end
    end
    
    def edit
        @patients = Patient.all
        @doctors = Doctor.all
        # render :edit
    end
    
    def update
        @appointment.update(appointment_params)
        redirect_to patient_path(@appointment.patient)
    end

    private

    def appointment_params
        params.require(:appointment).permit(:time, :patient_id, :doctor_id)
    end

    def set_appointment
        @appointment = Appointment.find(params[:id])
    end


end
