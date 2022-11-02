class MypageController < ApplicationController
  before_action :authenticate_user!

  def index
    @mypages = current_user.articles.order(updated_at: :desc)
  end

  def show
    @mypage = current_user.articles.find(params[:id])
  end
end
