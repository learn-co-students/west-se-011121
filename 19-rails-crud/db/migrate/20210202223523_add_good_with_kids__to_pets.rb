class AddGoodWithKidsToPets < ActiveRecord::Migration[6.0]
  def change
    add_column :pets, :good_with_kids, :boolean
  end
end
