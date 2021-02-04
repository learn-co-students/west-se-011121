Rails.application.routes.draw do
  get '/pets/about', to: 'pets#about'
  # get '/pets', to: 'pets#index'
  # get '/pets/new', to: 'pets#new'
  # get '/pets/:id', to: 'pets#show', as: "pet"
  # post '/pets', to: 'pets#create'

  resources :pets, only: [:index, :show, :create, :new, :update, :edit]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
