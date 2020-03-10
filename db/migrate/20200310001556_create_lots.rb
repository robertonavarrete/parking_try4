class CreateLots < ActiveRecord::Migration[5.2]
  def change
    create_table :lots do |t|
      t.string :lot_column
      t.integer :lot_row

      t.timestamps
    end
  end
end
