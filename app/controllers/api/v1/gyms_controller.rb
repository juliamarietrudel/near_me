class Api::V1::GymsController < ApplicationController
  def index
    gyms = Gym.all
    render json: gyms
  end

  def show
    gym = Gym.includes(:reviews).find(params[:id])
    render json: gym.as_json(include: :reviews)

  end

  def search
    query = params[:query]
    gyms = Gym.search_by_name(query)
    render json: gyms
  end
end
