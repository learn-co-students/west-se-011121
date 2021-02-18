class PostsController < ApplicationController
    before_action :get_post, only: [:edit, :update, :destroy]

    def index
        @posts = Post.all
    end

    def new
        @post = Post.new
    end

    def create
        @post = current_user.posts.build(post_params)
        if @post.save
            redirect_to posts_path
        else
            render :new
        end
    end

    def edit
        
    end

    def update
       
        if @post.update(post_params)
            redirect_to posts_path
        else
            render :edit
        end
       
    end
    

    def destroy
        
        @post.destroy
       
        redirect_to posts_path
    end

    private

    def get_post
        @post = Post.find(params[:id])
    end

    def post_params
        params.require(:post).permit(:title, :content, :user_id)
    end

end
