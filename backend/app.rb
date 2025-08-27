require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/json'
require 'sinatra/reloader' if development?
require 'rack/cors'
require_relative 'models/user_preference'
require_relative 'models/contact_submission'

# CORS Configuration
use Rack::Cors do
  allow do
    origins 'http://localhost:3000', 'https://lekopien-portfolio-4ggrtx92p-lekopiens-projects.vercel.app'
    resource '*', 
      headers: :any, 
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
end

# Set content type for all responses
before do
  content_type :json
end

# Health check endpoint
get '/api/health' do
  json status: 'ok', timestamp: Time.now
end

# User Preferences API
get '/api/v1/preferences' do
  preferences = UserPreference.all.order(:created_at)
  json preferences.as_json
end

post '/api/v1/preferences' do
  data = JSON.parse(request.body.read)
  
  preference = UserPreference.new(
    personality_score: data['personality_score'],
    theme: data['theme'],
    user_agent: request.env['HTTP_USER_AGENT'],
    ip_address: request.ip
  )
  
  if preference.save
    status 201
    json preference.as_json
  else
    status 400
    json error: preference.errors.full_messages
  end
end

get '/api/v1/preferences/:id' do
  preference = UserPreference.find_by(id: params[:id])
  
  if preference
    json preference.as_json
  else
    status 404
    json error: 'Preference not found'
  end
end

put '/api/v1/preferences/:id' do
  preference = UserPreference.find_by(id: params[:id])
  
  if preference
    data = JSON.parse(request.body.read)
    if preference.update(theme: data['theme'])
      json preference.as_json
    else
      status 400
      json error: preference.errors.full_messages
    end
  else
    status 404
    json error: 'Preference not found'
  end
end

# Contact Form API
get '/api/v1/contacts' do
  contacts = ContactSubmission.all.order(created_at: :desc)
  json contacts.as_json
end

post '/api/v1/contacts' do
  data = JSON.parse(request.body.read)
  
  contact = ContactSubmission.new(
    name: data['name'],
    email: data['email'],
    message: data['message'],
    status: 'pending'
  )
  
  if contact.save
    status 201
    json contact.as_json
  else
    status 400
    json error: contact.errors.full_messages
  end
end

put '/api/v1/contacts/:id' do
  contact = ContactSubmission.find_by(id: params[:id])
  
  if contact
    data = JSON.parse(request.body.read)
    if contact.update(status: data['status'])
      json contact.as_json
    else
      status 400
      json error: contact.errors.full_messages
    end
  else
    status 404
    json error: 'Contact not found'
  end
end

# Analytics API
get '/api/v1/analytics/personality-distribution' do
  scores = UserPreference.group(:personality_score).count
  json personality_distribution: scores
end

get '/api/v1/analytics/theme-popularity' do
  themes = UserPreference.group(:theme).count
  json theme_popularity: themes
end

get '/api/v1/analytics/user-engagement' do
  total_users = UserPreference.count
  total_contacts = ContactSubmission.count
  recent_users = UserPreference.where('created_at > ?', 7.days.ago).count
  
  json({
    total_users: total_users,
    total_contacts: total_contacts,
    recent_users: recent_users,
    engagement_rate: total_contacts.to_f / [total_users, 1].max
  })
end

# Error handlers
error 404 do
  json error: 'Endpoint not found'
end

error 500 do
  json error: 'Internal server error'
end
