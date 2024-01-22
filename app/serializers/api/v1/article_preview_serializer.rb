class Api::V1::ArticlePreviewSerializer < ActiveModel::Serializer
  belongs_to :user

  attributes :id, :title, :updated_at
end
