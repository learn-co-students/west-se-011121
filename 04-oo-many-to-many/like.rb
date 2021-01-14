class Like
    
    # Class var and methods

    @@all = []
    
    def self.all
        @@all
    end

    # macro

    attr_reader :user, :tweet

    # instance vars and methods

    def initialize(user, tweet)
        @user = user
        @tweet = tweet
        self.save # you can call save and Ruby supplies implicit self
    end
    
    def save
        @@all << self
    end

end
