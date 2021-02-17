class ResponsesController < ApplicationController

    before_action :define_question, :define_response, :define_number_correct, :define_message

    def new

    end

    def create
        # session[:number_correct] = session[:number_correct] || 0
        session[:number_correct] ||=  0
        response = Response.create(response_params)
        if response.question.correct_answer == response.answer
            session[:number_correct] = session[:number_correct] + 1
            puts "Correct"
            flash[:message] = "Correct"
        else
            puts "Incorrect"
            flash[:message] = "Incorrect"
        end
        puts "Total Correct: #{session[:number_correct]}"
        redirect_to '/random-question'
    end
    
    private
    
    def define_question
        @question = Question.order("RANDOM()").limit(1)[0]
    end

    def define_response
        @questionResponse = Response.new({ question: @question })
    end

    def define_number_correct
        @number_correct = session[:number_correct]
    end

    def define_message
        @message = flash[:message]
    end

    def response_params
        params.require(:response).permit(:answer_id, :question_id)
    end

end
