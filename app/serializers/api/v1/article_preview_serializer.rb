class Api::V1::ArticlePreviewSerializer < ActiveModel::Serializer
  belongs_to :user, serializer: Api::V1::UserSerializer

  attributes :id, :title, :updated_at
end
