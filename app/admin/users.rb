ActiveAdmin.register User do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :email,  :encrypted_password, :reset_password_token, :reset_password_sent_at, :remember_created_at, :name, :last_name, :identification_type, :identification_number
  #
  # or
  #
  # permit_params do
  #   permitted = [:email, :encrypted_password, :reset_password_token, :reset_password_sent_at, :remember_created_at, :name, :last_name, :identification_type, :identification_number]
  #   # permitted << :other if params[:action] == 'create' && current_user.admin?
  #   # permitted
  # end

  controller do
    def update
      if (params[:user][:password].blank? && params[:user][:password_confirmation].blank?)
        params[:user].delete("password")
        params[:user].delete("password_confirmation")
      end
      super
    end
  end

  filter :identification_number
  filter :email
  filter :current_sign_in_at
  filter :sign_in_count
  filter :created_at



  index do
    column :id
    column :name
    column :last_name
    column :identification_type
    column :identification_number
    column :email
    column :created_at
    column :last_sign_in_at
    column :marca
    actions
  end

  
end
