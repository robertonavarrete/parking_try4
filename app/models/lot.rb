class Lot < ApplicationRecord
    has_many :events

    def parking_lot
        "#{lot_row} #{lot_column}"
    end

    def val_lot
        "#{id}"
    end
end
