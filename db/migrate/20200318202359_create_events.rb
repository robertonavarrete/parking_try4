class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.references :lot, foreign_key: true
      t.date :date_parking_start
      t.date :date_parking_end
      t.references :car, foreign_key: true

      t.timestamps
    end
  end
end
