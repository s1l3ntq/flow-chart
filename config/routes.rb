Rails.application.routes.draw do
  resources :favorite_tracks
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/auth/spotify/callback', to: 'users#spotify'


  namespace :api do
    namespace :v1 do
      resources :tracks do
        collection do 
          get :show
          get :playlist
        end
      end
    end
  end
end
