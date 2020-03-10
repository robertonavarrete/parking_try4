Rails.application.routes.draw do
  resources :tickets
  resources :lots
  resources :lots
  get 'schedules/index'
  resources :cars
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
  root 'schedules#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
