class Api::V1::TracksController < ApplicationController

    def index
        @tracks = Track.all
        render json: @tracks

    end

    def show
        s_tracks = RSpotify::Track.search(params[:q])
        @tracks = s_tracks.map do |s_track|
        Track.new_from_spotify_track(s_track)
          end
        render json: @tracks
    end

    def my_playlist
        s_tracks = RSpotify::Playlist.find("qimiller89","0dLJXnY1tOQJaFHot97mhD").tracks
        @tracks = s_tracks.map do |s_track|
          Track.new_from_spotify_track(s_track)
        end
    render json: @tracks
    end
    
end