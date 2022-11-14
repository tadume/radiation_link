class CommentsController < ApplicationController
  def create
    @comment = current_user.comments.new(comment_params)
    if @comment.save
      redirect_back(fallback_location: root_path)
    else
      redirect_back(fallback_location: root_path)
    end
  end

  def destroy
    comment = current_user.comments.find(params[:id])
    @comment = comment.destroy
    flash[:danger] = "コメントを削除しました"
    redirect_back(fallback_location: root_path)
  end

  private
    def comment_params
      params.require(:comment).permit(:content, :article_id)
    end
end
