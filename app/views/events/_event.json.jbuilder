json.extract! event, :id, :lot_id, :date_parking_start, :date_parking_end, :car_id, :created_at, :updated_at
json.url lot_url(event, format: :json)
