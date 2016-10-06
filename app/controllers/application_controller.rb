class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
<<<<<<< HEAD
 
=======

>>>>>>> c3678b8c91e2be711c8fad4e05ab7f39be643107
  before_filter :authenticate_user!

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
<<<<<<< HEAD
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])

   devise_parameter_sanitizer.permit(:account_update, keys: [:username])
  end

=======
  	devise_parameter_sanitizer.permit(:sign_up, keys: [:username])

  	devise_parameter_sanitizer.permit(:account_update, keys: [:username])
  end
>>>>>>> c3678b8c91e2be711c8fad4e05ab7f39be643107
end
