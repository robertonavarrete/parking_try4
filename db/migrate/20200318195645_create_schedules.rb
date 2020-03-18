class CreateSchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :schedules do |t|
      t.references :lot, foreign_key: true
      t.date :date_parking_start
      t.date :date_parking_end

      t.timestamps
    end
  end
end
