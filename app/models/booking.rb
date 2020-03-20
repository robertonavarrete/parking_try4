class Booking < ApplicationRecord
    validates :date_parking_start, :presence => true
    validates :date_parking_end, :presence => true
end
