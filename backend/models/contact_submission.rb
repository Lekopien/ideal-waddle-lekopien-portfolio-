class ContactSubmission < ActiveRecord::Base
  validates :name, presence: true, length: { minimum: 2, maximum: 100 }
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :message, presence: true, length: { minimum: 10, maximum: 1000 }
  validates :status, presence: true, inclusion: { in: %w[pending read replied] }

  scope :by_status, ->(status) { where(status: status) }
  scope :recent, -> { where('created_at > ?', 30.days.ago) }
  scope :pending, -> { where(status: 'pending') }

  before_save :sanitize_content

  def mark_as_read!
    update!(status: 'read')
  end

  def mark_as_replied!
    update!(status: 'replied')
  end

  def pending?
    status == 'pending'
  end

  def read?
    status == 'read'
  end

  def replied?
    status == 'replied'
  end

  def short_message
    message.length > 100 ? "#{message[0..97]}..." : message
  end

  def as_json(options = {})
    super(options.merge(
      only: [:id, :name, :email, :message, :status, :created_at, :updated_at],
      methods: [:short_message]
    ))
  end

  private

  def sanitize_content
    self.name = name.strip if name.present?
    self.email = email.strip.downcase if email.present?
    self.message = message.strip if message.present?
  end
end
