# frozen_string_literal: true

class PostSerializer
  include FastJsonapi::ObjectSerializer

  attributes :title, :content
end
