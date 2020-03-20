class Ticket < ApplicationRecord
  belongs_to :car
  belongs_to :billing, optional: true
  has_many :events
  accepts_nested_attributes_for :events, allow_destroy: true
 
  scope :cart, (-> {where(payed: false)})


  def self.to_paypal_items
    where(nil).map do |ticket|
      item = {}
      item[:name] = ticket.date_parking_start
      item[:sku] = ticket.id.to_s
      item[:price] = ticket.total
      item[:currency] = 'USD'
      item[:quantity] = 1
      item
    end
  end

  def price
    5900
  end
end
