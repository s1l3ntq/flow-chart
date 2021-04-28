require "test_helper"

class FavoriteTracksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @favorite_track = favorite_tracks(:one)
  end

  test "should get index" do
    get favorite_tracks_url, as: :json
    assert_response :success
  end

  test "should create favorite_track" do
    assert_difference('FavoriteTrack.count') do
      post favorite_tracks_url, params: { favorite_track: { image: @favorite_track.image, name: @favorite_track.name } }, as: :json
    end

    assert_response 201
  end

  test "should show favorite_track" do
    get favorite_track_url(@favorite_track), as: :json
    assert_response :success
  end

  test "should update favorite_track" do
    patch favorite_track_url(@favorite_track), params: { favorite_track: { image: @favorite_track.image, name: @favorite_track.name } }, as: :json
    assert_response 200
  end

  test "should destroy favorite_track" do
    assert_difference('FavoriteTrack.count', -1) do
      delete favorite_track_url(@favorite_track), as: :json
    end

    assert_response 204
  end
end
