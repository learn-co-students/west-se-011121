# Review Git && Github

![git_is_not_github](https://1.bp.blogspot.com/-WY2YpNr3W6g/UY6tZAc-H3I/AAAAAAAABLY/xJ9x3wIY8V8/s440/Github2.png)
# SWBATs
* Create a git repository
* Feel comfortable with add/commit/revert changes to code
* Push changes to Github
* Share code with others via Github

# Git Comands Cheatsheet
- `git init` initializes a git repository
### _Saving Changes_
- `git add <filename>` stages a file with changes for the next commit
- `git add -A` adds all files with changes in the working directory to staging
- `git add .` adds all files in the current directory to the staging for the next commit
- `git commit -m <"message">` saves all staged changes since the last commit to the git log
### _Reverting Changes_
- `git reset <Log Number>` resets code in repo to a specific prior commit
- `git reset --hard <Log Number>` permanently resets code in repo to a prior commit
- `git commit --amend` adds files with changes to the previous commit
- `git commit --amend -m <"new message">` changes your previous commit message
### _Working with Remotes_
- `git remote add <remote_name> <url>` connects local repo to a remote repo (usually Github)
- `git remote rm <remote_name>` removes a previously added remote
- `git remote -v` lists all of the current repo's remotes
- `git push <remote_name> <branch>` pushes (uploads) changes to a remote git repo (usually Github)
- `git pull <remote_name> <branch>` pulls (downloads) and merges changes from a remote repo
- `git fetch <remote_name> <branch>` fetches (downloads) changes from remote repo, but does NOT merge them locally
- `git clone <url>` copies a repo from Github
### _Working with Branches_
- `git branch` lists all the branches in the current repo
- `git branch <new_branch_name>` creates a new branch
- `git checkout <branch_name>` moves you to the branch specified
- `git checkout -b <new_branch_name>` creates a new branch AND moves you to that branch
- `git merge <branch_name>` merges the specified branch into the current working branch
### _Helpful  Commands_
- `git help` lists possible git commands
- `git status` shows changes that have not been staged or committed
- `git log` shows the commit history
- `git diff` shows changes between commits, commit and working tree, etc.
- `git config --global user.name "John Doe"` sets a name that will be attached to commits
- `git config --global user.email janedoe@example.com` sets an email that will be attached to commits

# Basic Git Workflow

Step 1: Create a new directory `mkdir new_directory` Note: A directory is not the same as a repository

Step 2: Move into your new directory `cd git_practice`

Step 3: Initialize a new repository `git init`

Step 4: Write some code and Add changes to staging `git add .`

Step 5: Commit changes to repo `git commit -m "My changes"`

Step 6: Repeat steps 4 and 5

Step 7: Create a repo on Github

## Working with Github

### How to Create a Repo

1. Click "New Repo"

![new_repo_image](https://github-images.s3.amazonaws.com/help/bootcamp/bootcamp_2_newrepo.jpg)

2. Fill out the information on this page. When you’re done, click “Create Repository.”

![create_repo](https://github-images.s3.amazonaws.com/help/bootcamp/bootcamp_2_repoinfo.png)

Congratulations! You have successfully created a repository!

Step 8: Connect your Github Repo to your local repo `git remote add origin git@github.com:user_name/my_repo.git`

Step 9: Push your local repo to Github `git push origin master`

Step 10: Continue to add, commit, and push changes `git add .`, `git commit -m "new message"`, `git push origin master`

# Git Branching and Merge Conflicts

### Creating a Branch 
There are two ways to create a branch in git.

Option 1: `git branch <new_branch>` creates a new branch `git checkout <new_branch>` moves you to the new branch

Option 2: `git checkout -b <new_branch>` creates a new branch and moves you to it

### Moving Between Branches 
To move between branches: `git checkout <branch_I_want_to_go_to>` moves you to specified branch.

To list available branches: `git branch` will list all branches.

### Merging Branches 
We can combine two branches together by using `git merge`

Let’s say we have a branch `master` and a branch `feature`

In order to combine the two (from the master branch), we run…

`git merge feature`

## Merge Conflicts
Git is smart, but not that smart. Merge conflicts occur when the changes between 2 branches overlap, and git is not sure which version you want.

When you are trying to merge and a conflict arises, your terminal will tell you, and it will look something like this…
```shell
Auto-merging test.rb
CONFLICT (content): Merge conflict in test.rb
Automatic merge failed; fix conflicts and then commit the result.
```
The conflicts will also appear in your files with special tags.
```ruby
puts "Hi"
puts "More things"
```
The first section of the code is from our master branch and the second is the code we are trying to merge in.

Here you will have to manually select the code you want.
```ruby
puts "adkljfdklsajf"
puts "Hi"
puts "More things"
```
After you select the code you want to keep you will have to add and commit these changes.

```shell
git add .
git commit -m "Fixed conflict"
```
# How to Create a Pull Request on Github

_Before you can open a pull request, you must create a branch in your local repository, commit to it, and push the branch to a repository or fork on GitHub._

1. Visit the repository you pushed to
2. Click “Compare and Review” in the repository
3. You’ll land right onto the compare page. (You can click Edit at the top to pick a new branch to merge in, using the Head Branch dropdown)
4. Select the target branch your branch should be merged to, using the Base Branch dropdown
5. Review your proposed changes.
6. Click “Click to create a pull request” for this comparison
7. Enter a title and description for your pull request
8. Click Send pull request

![git_flow](https://1.bp.blogspot.com/-FmqYrygSQhI/U2PhVzVH_PI/AAAAAAAAAUA/umErszRBJYA/s1600/git_workflow_github_flow.jpg)

## Resources

- Official Documentation: http://git-scm.com/doc 
- Try Git Tutorial: http://try.github.io/levels/1/challenges/1 
- Git Hug game: https://github.com/Gazler/githug 
- Other Resources: http://training.github.com/resources
- Setting up SSH Keys: https://help.github.com/articles/generating-ssh-keys 
- General Github Help: https://help.github.com/

