class CreateTracks < ActiveRecord::Migration[6.1]
  def change
    create_table :tracks do |t|
      t.string :name
      t.string :artists
      t.string :image
      t.string :album
      t.string :spotify_id

      t.timestamps
    end
  end
end
