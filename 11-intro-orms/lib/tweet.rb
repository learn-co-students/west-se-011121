class Tweet
  attr_accessor :message, :username, :id
  # @@all = []

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
    self.new(DB[:conn].execute(sql, id).first)
  end

  def initialize(attrs={})
    @message = attrs["message"]
    @username = attrs["username"]
    @id = attrs["id"]
    # @@all << self
  end

  def save
    # if the instance already exists in db
    if self.id
      sql = <<-SQL
          UPDATE tweets
           SET message = ?
           WHERE id = ?;
      SQL
      DB[:conn].execute(sql, self.message, self.id)
      # updated
    else
      # create a new one
      sql = <<-SQL
          INSERT INTO tweets (username, message)
          VALUES (?, ?);
      SQL
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
