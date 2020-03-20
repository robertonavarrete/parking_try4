class Event < ApplicationRecord
  belongs_to :lot
  belongs_to :ticket
end
