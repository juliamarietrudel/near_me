class Gym < ApplicationRecord
  validates :name, presence: true
  validates :address, presence: true

  def self.search(query)
    where("name LIKE ?", "%#{query}%")
  end
end
