Rails.application.routes.draw do
  resources :users, only: [:new, :create]
  resources :responses

  resources :log_in, only: [:new, :create]
  # get "log_in", to: "log_in#new", as: "log_in"

  get :'random-question', to: 'responses#new'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
