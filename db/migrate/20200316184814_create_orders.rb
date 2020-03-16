class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.boolean :payed, default: false
      t.integer :price
      t.integer :quantity
      t.references :billing, foreign_key: true

      t.timestamps
    end
  end
end
