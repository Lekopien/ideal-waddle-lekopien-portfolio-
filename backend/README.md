# Lekopien Portfolio - Rails Backend API

This directory will contain the Ruby on Rails API backend for the portfolio application.

## Planned Features

- User preference storage and analytics
- Contact form handling
- Admin dashboard for portfolio management
- API endpoints for dynamic content
- User interaction tracking

## Setup (Future)

To set up the Rails API when ready:

```bash
cd backend
rails new . --api --database=postgresql
bundle install
rails generate model UserPreference personality_score:decimal theme:string timestamp:datetime
rails generate model ContactSubmission name:string email:string message:text status:string
rails generate controller api/v1/preferences
rails generate controller api/v1/contacts
rails db:migrate
```

## API Endpoints (Planned)

### User Preferences
- `POST /api/v1/preferences` - Store user personality assessment results
- `GET /api/v1/preferences/:id` - Retrieve user preferences
- `PUT /api/v1/preferences/:id` - Update user theme selection

### Contact Form
- `POST /api/v1/contacts` - Submit contact form
- `GET /api/v1/contacts` - Admin: List contact submissions
- `PUT /api/v1/contacts/:id` - Admin: Update contact status

### Analytics
- `GET /api/v1/analytics/personality-distribution` - Get personality score distribution
- `GET /api/v1/analytics/theme-popularity` - Get theme usage statistics
- `GET /api/v1/analytics/user-engagement` - Get user engagement metrics

## Database Schema (Planned)

### UserPreferences
- id (primary key)
- personality_score (decimal)
- theme (string)
- user_agent (string)
- ip_address (string, anonymized)
- created_at (datetime)
- updated_at (datetime)

### ContactSubmissions
- id (primary key)
- name (string)
- email (string)
- message (text)
- status (string: pending, read, replied)
- created_at (datetime)
- updated_at (datetime)

## Integration with React Frontend

The React frontend will call these API endpoints to:
1. Store personality assessment results
2. Track theme preferences
3. Submit contact forms
4. Gather analytics data

## Technology Stack

- Ruby on Rails 7 (API mode)
- PostgreSQL database
- JWT authentication (for admin features)
- CORS configuration for frontend integration
- Deployed on Heroku or Railway

## Development Status

🚧 **This backend is not yet implemented** 🚧

The current React application works fully in standalone mode using localStorage. The Rails backend will be added in a future iteration to provide data persistence and analytics.
