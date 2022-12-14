class ArticlesController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[ index show ]
  before_action :set_article, only: %i[ edit update destroy ]
  def index
    articles = Article.where("title LIKE ?", "%#{params[:title]}%")
    @articles = articles.order(updated_at: :desc).page(params[:page]).per(1)
  end

  def show
    @article = Article.find(params[:id])
    @comments = @article.comments.order(updated_at: :desc)
    @comment = Comment.new
  end

  def new
    @article = current_user.articles.new
  end

  def create
    @article = current_user.articles.new(article_params)
    if @article.save
     redirect_to mypage_path, notice: "記事が作成されました"
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @article.update(article_params)
      redirect_to mypage_path, notice: "記事が更新されました"
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    if @article.destroy
      redirect_to mypage_path, notice: "記事が削除されました"
    end
  end



  private
    def set_article
      @article = current_user.articles.find(params[:id])
    end

    def article_params
      params.require(:article).permit(:title, :content, tag_ids: [])
    end
end
