class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

<<<<<<< HEAD

  has_many  :articles
  has_many  :comments    

=======
  has_many :articles
  has_many :comments
>>>>>>> c3678b8c91e2be711c8fad4e05ab7f39be643107
end
