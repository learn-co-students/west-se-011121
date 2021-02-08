Rails.application.routes.draw do
  resources :missions, only: [:new, :create]
  resources :scientists
  resources :planets
  get '/about', to: 'application#about'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
