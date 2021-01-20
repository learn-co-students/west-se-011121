require 'pry'

class Startup

  attr_accessor :name
  attr_reader :founder, :domain

  @@all = []

  def initialize(name, founder, domain)
    @name = name
    @founder = founder
    @domain = domain

    @@all << self
  end

  def pivot(domain, name) 
    @domain = domain
    @name = name
  end

  def sign_contract(venture_capitalist, type, investment)
    FundingRound.new(self, venture_capitalist, type, investment)
  end

  def funding_rounds
    FundingRound.all.filter {|rounds| rounds.startup === self}
  end

  def num_funding_rounds
   funding_rounds.length
  end

  def total_funds
    funding_rounds.sum { |round| round.investment }
  end

  def investors
    funding_rounds.map { |round| round.venture_capitalist }.uniq
  end

  def big_investors
    investors.filter { |round| round.total_worth > 1000000000}
  end

  def self.all
    @@all
  end

  def self.find_by_founder(founder_name)
    self.all.find {|startup| startup.founder === founder_name}
  end

  def self.domains
    self.all.map { |startup| startup.domain }.uniq
  end


end
