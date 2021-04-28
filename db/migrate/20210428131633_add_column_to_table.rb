class AddColumnToTable < ActiveRecord::Migration[6.1]
  def change
    add_column :favorite_tracks, :artists, :string
    add_column :favorite_tracks, :preview_url, :string
  end
end
