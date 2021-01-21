# Intro to ORMs (Object Relational Mappers)

# CRUD REVIEW

## Create
* be able to create new tweet objects with a username and message
* be able to persist those objects in the database

## Read
* be able to retrieve all of the tweets from the database and return an array of tweet objects
* be able to iterate over the returned array and display the tweet objects

## Update
* be able to find a tweet in the db by id and change its message
* extend functionality of #save method to do this

## Delete
* be able to find a tweet by id and delete if

### What's the mapping?
Ruby         |  SQL
-----------  |  ----------
Model class  |  
Instance     |
Attribute    | 

## Stretch goals: expand on app by adding related models as outlined below

A tweet belongs to a user and has some message content - must have user_id

The belongs_to must have a user_id on it

A user has a username, and has many tweets

A tweet can have many tags and a tag can have many tweets
