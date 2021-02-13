class User < ApplicationRecord
    has_many :responses
    has_secure_password

    # def password=(value)
    #  self.password_digest == BCrypt::Password.create(value)
    # end

    # def authenticate(password)
    # BCrypt::Password.new(self.password_digest) == password
    # end 


end
