class UsersController < ApplicationController
  def index
    # @users = User.order(updated_at: :desc).page(params[:page]).per(1)
    users = User.where("name LIKE ?", "%#{ params[:name] }%")
    @users = users.order(updated_at: :desc).page(params[:page]).per(1)
  end
end
