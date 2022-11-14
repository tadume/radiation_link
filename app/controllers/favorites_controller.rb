class FavoritesController < ApplicationController
  def create
    @article_favorite = Favorite.new(user_id: current_user.id, article_id: params[:article_id])
    @article_favorite.save
    redirect_back(fallback_location: root_path)
  end

  def destroy
    @article_favorite = Favorite.find_by(user_id: current_user.id, article_id: params[:article_id])
    @article_favorite.destroy
    redirect_back(fallback_location: root_path)
  end
end
