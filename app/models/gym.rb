class Gym < ApplicationRecord
  validates :name, presence: true, uniqueness: {case_sensitive: false}
  validates :address, presence: true

  scope :search_by_name, ->(query) { where("name ILIKE ?", "#{query}%") }
end
