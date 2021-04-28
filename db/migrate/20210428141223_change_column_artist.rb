class ChangeColumnArtist < ActiveRecord::Migration[6.1]
  def change
    rename_column :favorite_tracks, :artists, :artist
  end
end
