module Persistable

    module ClassMethods

        # class methods being imported from a module with `extend` don't need the self.prefix on the method signature

        def all
          self::ALL
        end
      
        def reset_all
          all.clear
        end
      
        def count
          all.length
        end

    end

    module InstanceMethods
        def initialize(*args)
          self.class.all << self
        end

    end

end