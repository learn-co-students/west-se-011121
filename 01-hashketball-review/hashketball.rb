require 'pry'

# def game_hash
#   {
#     home: {
#       team_name: "Brooklyn Nets",
#       colors: ["Black", "White"],
#       players: {
#         "Alan Anderson" => {
#           number: 0,
#           shoe: 16,
#           points: 22,
#           rebounds: 12,
#           assists: 12,
#           steals: 3,
#           blocks: 1,
#           slam_dunks: 1
#         },
#         "Reggie Evans" => {
#           number: 30,
#           shoe: 14,
#           points: 12,
#           rebounds: 12,
#           assists: 12,
#           steals: 12,
#           blocks: 12,
#           slam_dunks: 7
#         },
#         "Brook Lopez" => {
#           number: 11,
#           shoe: 17,
#           points: 17,
#           rebounds: 19,
#           assists: 10,
#           steals: 3,
#           blocks: 1,
#           slam_dunks: 15
#         },
#         "Mason Plumlee" => {
#           number: 1,
#           shoe: 19,
#           points: 26,
#           rebounds: 12,
#           assists: 6,
#           steals: 3,
#           blocks: 8,
#           slam_dunks: 5
#         },
#         "Jason Terry" => {
#           number: 31,
#           shoe: 15,
#           points: 19,
#           rebounds: 2,
#           assists: 2,
#           steals: 4,
#           blocks: 11,
#           slam_dunks: 1
#         }
#       }
#     },
#     away: {
#       team_name: "Charlotte Hornets",
#       colors: ["Turquoise", "Purple"],
#       players: {
#         "Jeff Adrien" => {
#           number: 4,
#           shoe: 18,
#           points: 10,
#           rebounds: 1,
#           assists: 1,
#           steals: 2,
#           blocks: 7,
#           slam_dunks: 2
#         },
#         "Bismak Biyombo" => {
#           number: 0,
#           shoe: 16,
#           points: 12,
#           rebounds: 4,
#           assists: 7,
#           steals: 7,
#           blocks: 15,
#           slam_dunks: 10
#         },
#         "DeSagna Diop" => {
#           number: 2,
#           shoe: 14,
#           points: 24,
#           rebounds: 12,
#           assists: 12,
#           steals: 4,
#           blocks: 5,
#           slam_dunks: 5
#         },
#         "Ben Gordon" => {
#           number: 8,
#           shoe: 15,
#           points: 33,
#           rebounds: 3,
#           assists: 2,
#           steals: 1,
#           blocks: 1,
#           slam_dunks: 0
#         },
#         "Brendan Haywood" => {
#           number: 33,
#           shoe: 15,
#           points: 6,
#           rebounds: 12,
#           assists: 12,
#           steals: 22,
#           blocks: 5,
#           slam_dunks: 12
#         }
#       }
#     }
#   }
# end

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        }, {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        }, {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        }, {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        }, {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        }, {
          player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        }, {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        }, {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        }, {
          player_name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end

def num_points_scored(player_name)
  # get a list of all the players
  players = get_players
  # find the player whose name matches the argument 'player_name'
  # binding.pry
  
  # players.each do |player|
  #   if player[:player_name] == player_name
  #     return player[:points]
  #   end
  # end

  # we can refactor the #each block above to use #find instead
  # found = players.find do |player|
  #   player[:player_name] == player_name
  # end

  # return that player's points
  # we can abstract the players.find logic into the helper method #find_player
  find_player(players, player_name)[:points]
end

def shoe_size(player_name)
  players = get_players
  # found = players.find do |player|
  #   player[:player_name] == player_name
  # end
  find_player(players, player_name)[:shoe]
end

def team_colors(team_name)
  game_hash.each do |team_loc, team_info|
    if team_info[:team_name] == team_name
      return team_info[:colors]
    end
  end
end

def team_names
  game_hash.values.map {|team_info| team_info[:team_name]}
end

def player_numbers(team)
  teams = get_teams
  my_team = find_team(teams, team)
  # binding.pry
  my_team[:players].map {|player| player[:number]}
end

def player_stats(player_name)
  # this method works much better with the older version of the game hash
  players = get_players
  player = find_player(players, player_name)
  player.delete(:player_name)
  player
end

# **********************
# HELPERS
# *********************

# DRY: DO NOT REPEAT YOURSELF; WET == 'WE ENJOY TYPING'
# adhere to Single Responsibility Principle

def get_players
  # game_hash.values.map {|team_info| team_info[:players]}.flatten  ## alt syntax for block using {}
  game_hash.values.map do |team_info|
    team_info[:players]
  end.flatten
end

def find_player(players, player_name)
  players.find do |player|
    player[:player_name] == player_name
  end
  # binding.pry
end

def get_teams
  game_hash.values
end

def find_team(teams, team)
  teams.find {|my_team| my_team[:team_name] == team}
end


# def get_team_players(team)
#   # game_hash['home'] + game_hash['away']
#   players = game_hash.values.select do |team_info|
#     team_info[:team_name] == team
#   end
#   # binding.pry
#   players[0][:players]
# end





# EXERCISE:
# Define a method called get_names that takes an array of instructors
# and returns just their names.
# instructors = [
#   {name: 'Alex', hometown: 'upstate ny', mood: 'excited'},
#   {name: 'rachel', hometown: 'maine'},
#   {name: 'maxwell', hometwon: 'brookyln'}
# ]

# def get_names(instructors)
#   names = []
#  instructors.each do |hash|
#     names << hash[:name]
#   end
#   names
# end

# puts get_names(instructors)






# EXERCISE
# What do the following return?

# arr = (1..100).to_a # => [1, 2, 3, ... 100]


# arr.map do |num|
#   num.even?
# end
# # => [false, true, false, true....]
# arr.select do |num|
#   num.even?
# end
# # => [2, 4, 6, ...]

# arr.select do |num|
#   num == 7
# end
# # => [7]
