# Clear existing data
UserPreference.destroy_all
ContactSubmission.destroy_all

# Create sample user preferences
preferences = [
  {
    personality_score: 25.5,
    theme: 'corporate',
    user_agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
    ip_address: '192.168.1.100'
  },
  {
    personality_score: 75.8,
    theme: 'creative',
    user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    ip_address: '192.168.1.101'
  },
  {
    personality_score: 45.2,
    theme: 'professional',
    user_agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15',
    ip_address: '192.168.1.102'
  },
  {
    personality_score: 88.9,
    theme: 'playful',
    user_agent: 'Mozilla/5.0 (Android 11; Mobile; rv:68.0) Gecko/68.0 Firefox/88.0',
    ip_address: '192.168.1.103'
  },
  {
    personality_score: 12.3,
    theme: 'minimalist',
    user_agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15',
    ip_address: '192.168.1.104'
  }
]

preferences.each do |pref_data|
  UserPreference.create!(pref_data)
end

# Create sample contact submissions
contacts = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    message: 'Hi Lekopien! I saw your portfolio and I\'m really impressed with your work. I\'d love to discuss a potential project collaboration.',
    status: 'pending'
  },
  {
    name: 'Sarah Wilson',
    email: 'sarah.wilson@company.com',
    message: 'We\'re looking for a talented developer for our startup. Your personality-driven approach to portfolios caught our attention. Would you be interested in a full-time position?',
    status: 'read'
  },
  {
    name: 'Mike Johnson',
    email: 'mike@techcorp.com',
    message: 'Great portfolio! We have a client project that would be perfect for your skills. Can we schedule a call to discuss the details?',
    status: 'replied'
  },
  {
    name: 'Emma Brown',
    email: 'emma.brown@design.co',
    message: 'I love the adaptive theme concept in your portfolio. As a UX designer, I appreciate the thoughtful approach to user experience. Let\'s connect!',
    status: 'pending'
  }
]

contacts.each do |contact_data|
  ContactSubmission.create!(contact_data)
end

puts "Created #{UserPreference.count} user preferences"
puts "Created #{ContactSubmission.count} contact submissions"
puts "Seed data created successfully!"
