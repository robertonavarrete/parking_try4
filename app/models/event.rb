class Event < ApplicationRecord
  belongs_to :lot
  belongs_to :car
end
