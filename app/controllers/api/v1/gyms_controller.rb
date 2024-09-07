class Api::V1::GymsController < ApplicationController
  def index
    gyms = Gym.all
    render json: gyms
  end

  def show
  end
end
