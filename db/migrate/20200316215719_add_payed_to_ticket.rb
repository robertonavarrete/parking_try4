class AddPayedToTicket < ActiveRecord::Migration[5.2]
  def change
    add_column :tickets, :payed, :boolean, default: false
  end
end
