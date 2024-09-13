class CreateGyms < ActiveRecord::Migration[7.2]
  def change
    create_table :gyms do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.text :description
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
