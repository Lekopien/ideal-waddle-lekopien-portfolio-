class CreateUserPreferences < ActiveRecord::Migration[7.0]
  def change
    create_table :user_preferences do |t|
      t.decimal :personality_score, precision: 5, scale: 2, null: false
      t.string :theme, null: false
      t.string :user_agent
      t.string :ip_address
      t.timestamps null: false
    end

    add_index :user_preferences, :personality_score
    add_index :user_preferences, :theme
    add_index :user_preferences, :created_at
  end
end
