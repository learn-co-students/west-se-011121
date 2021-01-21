class Tweet
  attr_accessor :message, :username, :id
  # @@all = []  # replaced by db

  def self.all
    # @@all
    sql = <<-SQL
      SELECT * FROM tweets;
    SQL
    results = DB[:conn].execute(sql)
    results.map do |t_hash|
      self.new(t_hash)
    end
  end

  def self.find_by_id(id)
    sql = <<-SQL
      SELECT * FROM tweets
      WHERE id = ?
    SQL
    self.new(DB[:conn].execute(sql, id).first) # the db still returns the found hash in an array as [{...}], so calling .first returns the first element of the array as a bare hash
  end

  def initialize(attrs={})
    @message = attrs["message"]
    @username = attrs["username"]
    @id = attrs["id"]
    # @@all << self # replaced by db
  end

  def save
    # if the instance already exists in db, update it
    # a tweet instance will only have an id if it has previously been saved to the db
    if self.id # nil values here will evaluate as falsy, anything else as truthy
      sql = <<-SQL
          UPDATE tweets
           SET message = ?
           WHERE id = ?;
      SQL
      DB[:conn].execute(sql, self.message, self.id)
      # updated
    else
      # create a new one, if the tweet did NOT have an id
      sql = <<-SQL
          INSERT INTO tweets (username, message)
          VALUES (?, ?);
      SQL
      # using ?, ? to sanitize the user data which we're sending to the db
      # prevents SQL injection attacks
      # the actual values are submitted as arguments to .execute below
      DB[:conn].execute(sql, self.username, self.message)
    end
  end

  def delete
    sql = <<-SQL
      DELETE FROM tweets
      WHERE id = ?;
    SQL
    DB[:conn].execute(sql, self.id)
  end
  
end
