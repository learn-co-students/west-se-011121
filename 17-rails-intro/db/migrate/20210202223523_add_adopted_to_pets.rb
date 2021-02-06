class AddAdoptedToPets < ActiveRecord::Migration[6.0]
  def change
    add_column :pets, :adopted, :boolean
  end
end
