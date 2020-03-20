class RemoveEventsFromTickets < ActiveRecord::Migration[5.2]
  def change
    remove_reference :tickets, :event, foreign_key: true
  end
end
