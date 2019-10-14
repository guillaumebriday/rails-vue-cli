# frozen_string_literal: true

class Api::V1::PostsController < Api::V1::BaseController
  before_action :set_post, only: %i[show update destroy]

  def index
    posts = Post.all

    render json: PostSerializer.new(posts)
  end

  def show
    render json: PostSerializer.new(@post)
  end

  def create
    post = Post.new(post_params)

    if post.save
      render json: PostSerializer.new(post), status: :created, location: [:api, :v1, post]
    else
      render json: ErrorSerializer.new(post), status: :unprocessable_entity
    end
  end

  def update
    @post.attributes = post_params

    if @post.save
      render json: PostSerializer.new(@post)
    else
      render json: ErrorSerializer.new(@post), status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy

    head :no_content
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params
      .fetch(:post, {})
      .permit(
        :title,
        :content
      )
  end
end
