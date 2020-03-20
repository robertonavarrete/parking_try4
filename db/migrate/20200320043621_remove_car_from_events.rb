class RemoveCarFromEvents < ActiveRecord::Migration[5.2]
  def change
    remove_reference :events, :car, foreign_key: true
  end
end
