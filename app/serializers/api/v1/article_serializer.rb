class Api::V1::ArticleSerializer < ActiveModel::Serializer
  belongs_to :user, serializer: Api::V1::UserSerializer

  attributes :id, :title, :body, :updated_at
end
