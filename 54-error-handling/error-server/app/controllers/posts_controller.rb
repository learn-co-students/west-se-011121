class PostsController < ApplicationController
  before_action :set_post, only: [:update]

  # POST /posts
  def create
    @post = Post.create(post_params)
    if @post.valid?
      render json: @post, status: :created
    else
      render json: {errors: @post.errors.full_messages}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:content, :title)
    end
end
