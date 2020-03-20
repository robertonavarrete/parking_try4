json.extract! booking, :id, :date_parking_start, :date_parking_end, :created_at, :updated_at
json.url booking_url(booking, format: :json)
