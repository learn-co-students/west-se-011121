require 'pry'

class VentureCapitalist

  attr_accessor :name, :total_worth

  @@all = []

  def initialize(name, total_worth)
    @name = name
    @total_worth = total_worth

    @@all << self
  end

  def offer_contract(startup, type, investment)
    FundingRound.new(startup, self, type, investment)
  end

  def funding_rounds
    FundingRound.all.filter {|rounds| rounds.venture_capitalist === self}
  end

  def portfolio
    funding_rounds.map {|round| round.startup }.uniq
  end

  def biggest_investment
    funding_rounds.max {|a, b| a.investment <=> b.investment}
  end

  def domain_rounds(domain)
    funding_rounds.filter {|round| round.startup.domain === domain}
  end

  def invested(domain)
    domain_rounds(domain).sum { |round| round.investment }
  end

  def self.all
    @@all
  end

  def self.tres_commas_club
    self.all.filter { |venture_capitalist| venture_capitalist.total_worth > 1000000000 }
  end
end
