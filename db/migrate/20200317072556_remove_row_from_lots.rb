class RemoveRowFromLots < ActiveRecord::Migration[5.2]
  def change
    remove_column :lots, :lot_column, :string
    remove_column :lots, :lot_row, :integer
  end
end
