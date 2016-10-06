class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :username
      t.text :breaddit_post
      t.integer :user_id

      t.timestamps
    end
  end
end
