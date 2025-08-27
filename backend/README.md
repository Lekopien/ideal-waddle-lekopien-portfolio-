# Lekopien Portfolio - Ruby Backend API

A Ruby/Sinatra-based API backend for the Lekopien portfolio application, providing data persistence and analytics for user preferences and contact form submissions.

## 🚀 Features

- **User Preferences API**: Store and retrieve personality assessment results and theme preferences
- **Contact Form API**: Handle contact form submissions with status tracking
- **Analytics API**: Provide insights on personality distribution, theme popularity, and user engagement
- **CORS Support**: Configured for seamless frontend integration
- **SQLite Database**: Lightweight, serverless database for easy deployment

## 🛠 Tech Stack

- **Framework**: Sinatra 4.x (Ruby web framework)
- **Database**: SQLite3 with ActiveRecord ORM
- **Ruby Version**: 3.1.4
- **Server**: WEBrick (development) / Can be configured for Puma (production)

## 📋 Prerequisites

- Ruby 3.1.4+ (managed with rbenv)
- Bundler gem
- SQLite3

## 🏗 Installation

1. **Install dependencies:**
   ```bash
   cd backend
   bundle install
   ```

2. **Set up database:**
   ```bash
   bundle exec rake db:migrate
   bundle exec rake db:seed
   ```

3. **Start the server:**
   ```bash
   bundle exec ruby app.rb -p 4567
   ```

The API will be available at `http://localhost:4567`

## 📡 API Endpoints

### Health Check
- `GET /api/health` - Server health status

### User Preferences
- `GET /api/v1/preferences` - List all user preferences
- `POST /api/v1/preferences` - Create new user preference
- `GET /api/v1/preferences/:id` - Get specific preference
- `PUT /api/v1/preferences/:id` - Update preference theme

### Contact Form
- `GET /api/v1/contacts` - List all contact submissions (admin)
- `POST /api/v1/contacts` - Submit new contact form
- `PUT /api/v1/contacts/:id` - Update contact status (admin)

### Analytics
- `GET /api/v1/analytics/personality-distribution` - Personality score distribution
- `GET /api/v1/analytics/theme-popularity` - Theme usage statistics  
- `GET /api/v1/analytics/user-engagement` - User engagement metrics

## 📊 Data Models

### UserPreference
```ruby
{
  id: Integer,
  personality_score: Decimal (0-100),
  theme: String ('corporate', 'creative', 'playful', 'professional', 'minimalist'),
  user_agent: String,
  ip_address: String,
  created_at: DateTime,
  updated_at: DateTime,
  personality_category: String (calculated)
}
```

### ContactSubmission
```ruby
{
  id: Integer,
  name: String (2-100 chars),
  email: String (valid email),
  message: Text (10-1000 chars),
  status: String ('pending', 'read', 'replied'),
  created_at: DateTime,
  updated_at: DateTime,
  short_message: String (calculated)
}
```

## 🧪 API Testing Examples

### Create User Preference
```bash
curl -X POST http://localhost:4567/api/v1/preferences \
  -H "Content-Type: application/json" \
  -d '{"personality_score": 75.5, "theme": "creative"}'
```

### Submit Contact Form
```bash
curl -X POST http://localhost:4567/api/v1/contacts \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "message": "Hello from the API!"}'
```

### Get Analytics
```bash
curl http://localhost:4567/api/v1/analytics/user-engagement
```

## 🔒 Security Features

- Input validation on all models
- Email format validation
- Content sanitization
- IP address anonymization for privacy
- CORS configuration for allowed origins

## 🌍 CORS Configuration

The API is configured to accept requests from:
- `http://localhost:3000` (React development server)
- `https://lekopien-portfolio-4ggrtx92p-lekopiens-projects.vercel.app` (Production frontend)

## 📁 Project Structure

```
backend/
├── app.rb                 # Main Sinatra application
├── Gemfile               # Ruby dependencies
├── Rakefile              # Database tasks
├── config.ru             # Rack configuration
├── config/
│   └── database.yml      # Database configuration
├── db/
│   ├── migrate/          # Database migrations
│   ├── seeds.rb          # Sample data
│   └── development.sqlite3
└── models/
    ├── user_preference.rb
    └── contact_submission.rb
```

## 🚀 Deployment

This API is designed to be easily deployed to platforms like:
- Heroku
- Railway
- Render
- Fly.io

The SQLite database makes it particularly suitable for serverless deployments.

## 🧪 Testing Status

✅ All endpoints tested and working:
- Health check endpoint
- User preferences CRUD operations  
- Contact form submissions
- Analytics data retrieval
- Error handling and validation

## 📈 Sample Data

The database includes sample data for testing:
- 5 user preferences with various personality scores and themes
- 4 contact submissions with different statuses
- Ready-to-use analytics data

## 🔄 Integration with Frontend

The React frontend can integrate with this API by:
1. Storing personality assessment results via `/api/v1/preferences`
2. Submitting contact forms via `/api/v1/contacts`  
3. Retrieving analytics data for dashboard features
4. Tracking user interactions and theme preferences

## 📞 Support

For questions or issues with the backend API, please check the server logs or contact the development team(+254716873099 or Lekopien@codeyetu.org)
