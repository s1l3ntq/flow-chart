class TrackSerializer < ActiveModel::Serializer
  attributes :id, :name, :artists, :image, :spotify_id
end
