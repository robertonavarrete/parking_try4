Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
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
