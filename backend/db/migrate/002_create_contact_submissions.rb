class CreateContactSubmissions < ActiveRecord::Migration[7.0]
  def change
    create_table :contact_submissions do |t|
      t.string :name, null: false, limit: 100
      t.string :email, null: false, limit: 255
      t.text :message, null: false, limit: 1000
      t.string :status, null: false, default: 'pending'
      t.timestamps null: false
    end

    add_index :contact_submissions, :status
    add_index :contact_submissions, :created_at
    add_index :contact_submissions, :email
  end
end
