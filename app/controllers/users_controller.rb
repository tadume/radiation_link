class UsersController < ApplicationController
  def index
    @users = User.order(updated_at: :desc).page(params[:page]).per(1)
  end
end
