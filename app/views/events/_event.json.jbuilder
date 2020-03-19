json.extract! event
# :id, :lot_id, :date_parking_start, :date_parking_end
json.url lot_url(event, format: :json)
json.set! :title, event.lot_id
json.set! :start, event.date_parking_start
json.set! :end, event.date_parking_end
