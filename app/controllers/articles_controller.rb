class ArticlesController < ApplicationController
  def index
    @articles = Article.order(updated_at: :desc)
  end
end
