class AddColumnsToLots < ActiveRecord::Migration[5.2]
  def change
    add_column :lots, :lot_column, :integer
    add_column :lots, :lot_row, :string
  end
end
