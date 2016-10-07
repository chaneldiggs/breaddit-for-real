class AddScoreToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :score, :integer
  end
end
