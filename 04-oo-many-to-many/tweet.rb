class Tweet

    attr_reader :message, :user

    @@all = []

    def self.all # the context of self is the class
        @@all
    end
    
    def initialize(message, user)
        @message = message
        @user = user
        @@all << self
    end

    def username
        self.user.username
    end

    # `#likers` that returns a collection of all the Users who have liked this tweet

    def likes
        Like.all.select do |like|
            # like.tweet.message == self.message # this works, but its extra
            like.tweet == self # self in an instance method refers to that instance
        end
    end

    def likers
        likes.map do |like|
            like.user
        end
    end


end