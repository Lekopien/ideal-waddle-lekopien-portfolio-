class UserPreference < ActiveRecord::Base
  validates :personality_score, presence: true, 
    numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }
  validates :theme, presence: true, inclusion: { 
    in: %w[corporate creative playful professional minimalist] 
  }
  validates :user_agent, presence: true
  validates :ip_address, presence: true

  scope :recent, -> { where('created_at > ?', 7.days.ago) }
  scope :by_theme, ->(theme) { where(theme: theme) }
  scope :by_score_range, ->(min, max) { where(personality_score: min..max) }

  def personality_category
    case personality_score
    when 0..20
      'analytical'
    when 21..40
      'practical'
    when 41..60
      'balanced'
    when 61..80
      'creative'
    when 81..100
      'visionary'
    else
      'unknown'
    end
  end

  def anonymized_ip
    # Return anonymized IP for privacy
    parts = ip_address.split('.')
    "#{parts[0]}.#{parts[1]}.xxx.xxx"
  end

  def as_json(options = {})
    super(options.merge(
      only: [:id, :personality_score, :theme, :created_at, :updated_at],
      methods: [:personality_category]
    ))
  end
end
