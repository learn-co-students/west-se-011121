# Dir[File.join(File.dirname(__FILE__), '../lib', '*.rb')].sort.each { |f| require f }
require 'pry'
require 'require_all'

require_relative '../lib/pet' # since this is a parent class, we need to force load pet before the classes in /lib are loaded (alphabetically) by require_all
require_all 'lib'