class RelationshipsController < ApplicationController
  def follow
    binding.pry
    current_user.follow(params[:user_id])
    redirect_back(fallback_location: root_path)
  end

  def unfollow
    current_user.unfollow(params[:user_id])
    redirect_back(fallback_location: root_path)
  end
end
