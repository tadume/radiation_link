Rails.application.routes.draw do
  get 'users/index'
  devise_for :users
  resources :articles do
    resources :favorites, only: [:create, :destroy]
  end
  root to: "articles#index"
  get "/mypage", to: "mypage#show"
  resources :comments, only: [:create, :destroy]
  resources :users, only: [:index, :show]
  post "follow/:id" => "relationships#follow", as: "follow"
  post "unfollow/:id" => "relationships#unfollow", as: "unfollow"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
