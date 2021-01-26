class AddDepartmentIdToDoctors < ActiveRecord::Migration[5.2]
  def change
    add_column :doctors, :department_id, :integer
  end
end
