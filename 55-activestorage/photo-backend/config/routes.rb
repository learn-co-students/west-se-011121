Rails.application.routes.draw do
  # resources :users
  get 'users', to: 'users#index'
  post 'users', to: 'users#create'
  patch 'users', to: 'users#update'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
