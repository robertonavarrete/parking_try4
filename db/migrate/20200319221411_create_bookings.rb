class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.date :date_parking_start
      t.date :date_parking_end

      t.timestamps
    end
  end
end
