# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2) do
  create_table "contact_submissions", force: :cascade do |t|
    t.string "name", limit: 100, null: false
    t.string "email", limit: 255, null: false
    t.text "message", limit: 1000, null: false
    t.string "status", default: "pending", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_contact_submissions_on_created_at"
    t.index ["email"], name: "index_contact_submissions_on_email"
    t.index ["status"], name: "index_contact_submissions_on_status"
  end

  create_table "user_preferences", force: :cascade do |t|
    t.decimal "personality_score", precision: 5, scale: 2, null: false
    t.string "theme", null: false
    t.string "user_agent"
    t.string "ip_address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_user_preferences_on_created_at"
    t.index ["personality_score"], name: "index_user_preferences_on_personality_score"
    t.index ["theme"], name: "index_user_preferences_on_theme"
  end
end
