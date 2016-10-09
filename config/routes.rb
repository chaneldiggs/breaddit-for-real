Rails.application.routes.draw do
  devise_for :users
  resources :comments
  resources :articles
  root 'welcome#index'

  get 'about' => 'welcome#about'

  get 'like_article' => 'articles#like_article'

  get 'dislike_article' => 'articles#dislike_article'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
