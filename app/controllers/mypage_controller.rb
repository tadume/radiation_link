class MypageController < ApplicationController

  def show
    articles = current_user.articles.where("title LIKE ?", "%#{params[:title]}%")
    @articles = articles.order(updated_at: :desc).page(params[:page]).per(1)
  end

end
