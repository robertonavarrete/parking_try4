class Lot < ApplicationRecord
    has_many :schedules
    has_many :events
end
