class MypageController < ApplicationController

  def show
    @articles = current_user.articles.order(updated_at: :desc)
  end

end
