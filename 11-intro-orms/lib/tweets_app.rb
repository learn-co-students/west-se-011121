class TweetsApp

  def call
    loop do
      menu
      choice = gets.chomp
  
      case choice
      when "n"
        puts "Enter a username:"
        username = gets.chomp
        puts 'Enter a message:'
        message = gets.chomp
        
        tweet = Tweet.new({"username" =>  username, "message" => message})
        tweet.save
        
        tweets = Tweet.all
        render(tweets)
      when "u"
        puts "Enter the id of the tweet you want to change"
        id = gets.chomp.to_i
        tweet = Tweet.find_by_id(id)
        puts "Enter your new message"
        message = gets.chomp
        tweet.message = message
        tweet.save
        render(Tweet.all)
      when "l"
        render(Tweet.all)
      when "d"
        puts "Enter the id of the tweet you want to delete"
        id = gets.chomp.to_i
        tweet = Tweet.find_by_id(id)
        tweet.delete
        render(Tweet.all)
      when "e"
        exit
      end

    end

  end
  
  def menu
    
    puts 'Welcome to Twitter'
  
    puts "What do you want to do?"
    puts ">>>>>>>>>>>>>>>>>>>>>>>>>>"
    puts "[n] Make new tweet"
    puts "[u] Change a tweet message"
    puts "[l] List all the tweets"
    puts "[d] Delete a tweet"
    puts "[e] To exit program"

  end

  private

  def render(tweets)
    tweets.each.with_index(1) do |tweet, i|
      puts "#{i}. #{tweet.username} says: #{tweet.message} (id: #{tweet.id})"
    end
  end
end
