# frozen_string_literal: true

module ErrorSerializer
  def self.new(object)
    errors = {}

    object.errors.messages.each do |attribute, _errors|
      errors[attribute] = object.errors.full_messages_for(attribute)
    end

    { errors: errors }
  end
end
