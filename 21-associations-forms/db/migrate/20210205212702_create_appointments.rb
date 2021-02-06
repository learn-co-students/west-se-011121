class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.datetime :time
      t.integer :patient_id
      t.references :doctor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
