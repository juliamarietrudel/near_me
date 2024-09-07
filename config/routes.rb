Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :gyms, only: [:index, :show]
    end
  end

  root "homepage#index"
  get "*path", to: "homepage#index", constraints: ->(request) { !request.xhr? && request.format.html? }
end
