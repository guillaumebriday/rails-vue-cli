# frozen_string_literal: true

class PostSerializer
  include FastJsonapi::ObjectSerializer

  attributes :title, :content, :created_at, :updated_at
end
