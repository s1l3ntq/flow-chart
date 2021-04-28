class TrackSerializer < ActiveModel::Serializer
  attributes :id, :name, :artists, :image, :spotify_id, :preview_url
end
