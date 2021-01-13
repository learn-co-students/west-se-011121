require 'pry'
# ===============
# Procedural Ruby
# ================
# ba1 = {user_id: 1, balance: 100, type: "checking"}
# ba2 = {user_id: 2, balance: 200, type: "savings"}

# def deposit(account, amount)
#     account[:balance] += amount
# end

# deposit(ba1, 50)
# puts ba1[:balance]


# ===============
# Object-Oriented Ruby
# ===============

class BankAccount

    #------------------------
    # class variables and methods
    #------------------------

    @@count = 0
    @@all = []

    def self.count
        @@count
    end

    def self.all
        @@all
    end

    attr_accessor :balance, :type, :username
    attr_reader :user_id

    def initialize(user_id, balance, type, new_username)
        @user_id = user_id
        @balance = balance
        @type = type
        @username = new_username
        @@count += 1
        @@all << self
    end

    # ----------------
    # instance methods
    # ----------------

    def deposit(amount)
        @balance += amount
    end

    def withdraw(amount)
        @balance -= amount
    end

    def display_balance
        puts @balance
    end

    # the reader and writer methods below are now created by the attr_accessor and attr_reader macros above
    # def balance  # reader (getter) method
    #     @balance
    # end

    # def balance=(amount) # writer (setter) method
    #     @balance += amount
    # end

    # this is a custom method which overwrites the built-in Object.to_s method. (replacing a built-in method is called 'monkeywrenching'; use with CAUTION)
    def to_s
        puts "Username: #{@username}"
        puts "Balance: #{@balance}"
    end

end

# the code below implements our BankAccount class by creating new instances and calling methods on them
ba1 = BankAccount.new(1, 100, "checking", "Syd")
# ba1 = BankAccount.new
puts ba1
puts ba1.balance
puts ba1.type
ba1.type="savings"
puts ba1.type
# 
ba1.deposit(10000000000)
# puts ba1.balance
ba1.display_balance

puts ba1.user_id
# ba1.user_id=3

ba2 = BankAccount.new(2, 400, "savings", "Jasper")
puts ba2.type
ba2.deposit(300)
puts ba2.balance
ba2.withdraw(50.01)
num = ba2.balance
puts num.class
ba2.display_balance


puts BankAccount.count
accounts = BankAccount.all
names = accounts.map {|acct| acct.username}
puts names

# these methods should probably be incorporated as class methods in our BankAccount class. What changes would have to be made?
def find_account(user_id)
    return BankAccount.all.find {|acct| acct.user_id == user_id}
end

def low_balance
    BankAccount.all.select {|acct| acct.balance < 1000}
end

puts find_account(1)
puts low_balance.inspect

# we could run all of the above implentation code in Pry as well (to exit Pry, just type 'exit')
binding.pry

