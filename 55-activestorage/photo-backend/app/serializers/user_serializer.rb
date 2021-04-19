class UserSerializer < ActiveModel::Serializer 
    include Rails.application.routes.url_helpers
    attributes :id, :name, :photo
    
    def photo
        object.photo.map do |p|
            rails_blob_path(p, only_path: true)
        end
    end
end