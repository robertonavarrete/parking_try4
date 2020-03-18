Rails.application.routes.draw do
  resources :schedules
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  
  resources :tickets
  resources :lots
  get 'schedules/index'
  resources :cars

  get 'billings/pre_pay', to:'billings#pre_pay', as: 'pre_pay_billings'
  get 'billings/execute', to:'billings#execute', as:'execute_billings'

  root 'schedules#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
