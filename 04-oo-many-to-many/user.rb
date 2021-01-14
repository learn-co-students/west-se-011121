class User

    attr_reader :username

    def initialize(username)
        @username = username
        # @tweets = [] NOT a single source of truth
    end

    # def username
    #     @username
    # end

    def tweets
        Tweet.all.select do |tweet|
            tweet.user == self
        end
        # Tweet.all.map do |tweet|
        #     if tweet.user == self
        #         return tweet
        #     end
        #     return nil
        # end.compact
    end

    def post_tweet(message)
        #create a new tweet
        Tweet.new(message, self)
        #add that tweet instance to this user's collection of tweets
    end

    def like_tweet(tweet)
        Like.new(self, tweet)
    end

    def likes
        # returns array of likes belonging to this user instance
        Like.all.select do |like|
            like.user == self
        end
    end

    def liked_tweets
        # return array of all the tweet obj a user has liked
        likes.map do |like|
            return like.tweet
        end
    end

end