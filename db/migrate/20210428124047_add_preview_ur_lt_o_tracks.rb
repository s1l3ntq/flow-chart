class AddPreviewUrLtOTracks < ActiveRecord::Migration[6.1]
  def change
    add_column :tracks, :preview_url, :string
  end
end
