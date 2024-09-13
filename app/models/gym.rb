class Gym < ApplicationRecord
  has_many :reviews

  validates :name, presence: true
  validates :address, presence: true
  # validates :name, uniqueness: { case_sensitive: false }

  scope :search_by_name, ->(query) { where("name ILIKE ?", "#{query}%") }
end
