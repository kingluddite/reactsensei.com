# GIT

## Useful GIT commands

## How to start using git
* aka How to initialize a git repo (aka repository) locally
* How to you get get to start "watching" your folder? 
* When you start a project you create a folder and if you want to starting using `git` for **version control** of your project (aka "watching your folder for all changes", just use `init`

```
$ git init
```

### Undo last commit
```
$ git reset HEAD~
```

### How do I push all branches to remote?
```
$ git push --all origin
```

### How do I remove a remote origin

```
$ git remote rm origin
```

### How do I add a remote origin?

```
$ git remote add origin https://github.com/USERNAME/REPONAME
```

### How to I grab remote branches?
* Let's have a chat about this because it's kind of strange
* So you have remote branches on your origin repo
* If you use 'git pull' it will pull down that branch but if you type `git branch` you will not see it

#### How to see all remote branches?
`$ git branch -a`

* You can use `git fetch` to grab the remote branches and then you can check into that branch with `git checkout [branch name]`

### How to delete a branch?

```
$ git branch -d {the_local_branch}
```

* Use `-D` instead to force deletion without checking merged status

### How to stash files?
* Note: you will use `$ git stash` and `$ git stash` pop together

`$ git stash`

* Sometimes you'll need to "stash" files with git, think of this as temporarily putting them in your "pocket", then you can pull new files down and later "pop" the files out of your "pocket"
* When you want to pull down the latest changes but you are in the middle of working on something, you can temporarily `stash` them with:

### How to "unstash" (pop) files?
* And then when you have pull down changes you can get your stashed data back with:

```
$ git stash pop
```

## Remove a git repo
* You would think this would be simple - just type `rm` and remove it
* For files, it is that simple but for folders you run into problems and that is why the `-rf` flag is important. If you want to delete a folder and everything inside it recursively, use the `-rf` flag like in the example below were you are removing the entire .git folder and all of its version control knowlege of your project. 

```
$ rm -rf .git
```

## Forking vs Cloning a repo
You see a repo you like. Just grab its repo url and clone it to a spot on your computer and you are off and running. But what if you like the project so much you want to work on it and make it better. This is the whole impetus behind the open source movement. That is where forking comes into play. Instead of just cloning it, you fork it and that fork takes a copy of that open source community repo and puts that exact copy (github shows an animation of a photocopy machine making a copy of a book) to your repo. If you look at the Github UI you will see they are telling you this information.

![Github UI shows forked repo](https://i.imgur.com/fsSP24C.png)

When you set up your own Github repo you traditionally refer to that as your remote `origin master`. So when you are working on your own project you will add and commit locally and then push to your remote repo (origin master). But when you fork you also have access to `upstream` repo you forked from.

A good tip is to check your remote connections information and this will show you where your remote origin master is and where your `upstream` is. If you don't see it, you may need to add it depending on what you are doing for your project.

## Grab changes instructors make from forked repo

```
$ git pull remote upstream
```

## What are my push and fetch remote connections?

```
$ git remote -v
```

## Add stuff to local repo

```
$ git add -A
```

## Commit stuff to local repo

```
$ git commit -m 'your commit message'
```

## Using origin master and production master
* This is how you can have a staging and production repos on same project folder

```
$ git push -u production master
$ git push -u origin master
```

## Push local changes to remote

```
$ git push
```

## Remove file from staging

```
$ git reset HEAD config.codekit
```

## Check current status

```
$ git status
```

## Create a branch

```
$ git branch (name of branch) 
```

You then need to checkout of current branch
  and move to new created branch with:

```
  $ git checkout (name of branch)
```

Add + commit changes in that branch
Move back to master ($ git checkout master) 
And merge changes into master

```
$ git merge
```

## How do I remove `.next` from a git repo?
* I accidentally added `.next` folder to git and since these are generated files, I want to remove them

### Remove `.next`
* Inside the React folder (`client` or whatever you called it) add a `.gitignore` file
* Type `.next` as a line inside the file (**note**: it should also have `node_modules`)

### Remove the tracking of `.next`
* Then you need to remove the tracking of `.next` and you do that with this nifty command

`$ git rm -r --cached .next`

## Git automation
### Bulk delete github repos
* Have a ton of github repos and you want to batch delete them? Here's how to do that
* [link to repo](https://github.com/kingluddite/bulk-clean-repos)

## How do I get rid of all changes in branch?
* You create a branch and realize you need to get rid of all the changes in that branch and start again
* Here's how to to do that (careful here, if you delete the changes they are gone forever:
  - `$ git checkout -f` 
  - `$ git reset --hard HEAD^`

### Check before you delete the changes
* This will let you see what you are deleting before you delete them (unstaged)
  - `$ git clean -n`

* And this will make the branch like brand new
  - `$ git clean -f` Makes the branch like brand new

## How do I add `upstream` to git?
* Specify a new remote `upstream` repository that will be synced with the fork

`$ git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git`

## How do I pull down a remote branch from Github?
* When you clone a repo with multiple branches you will not see all those branches, only the master
* But if you use this command will show you all the remote branches:

`$ git branch -a`

* Let's say one remote branch looks like this:

`remotes/origin/pages`

* [this link discusses this at length](https://stackoverflow.com/questions/67699/how-to-clone-all-remote-branches-in-git/72156#72156)
  - Basically you don't get all your branches pulled down as you would expect
  - Instead you can view them all after using `$ git branch -a`
  - Then just type `$ git checkout some_other_branch` and that remote branch will now exist in a local branch named `someotherbranch` (_assuming when you typed `$ git branch -a` the branch name was listed as `remotes/origin/someotherbranch`_)
* Then type this:

`$ git checkout -b pages origin/pages`

* Then if you look inside using the terminal with `$ ls`, you should see all the files that were inside that branch

## How to clone a repo while inside the folder itself
`$ git clone git@github:me/name.git .`

## How to cloen the folder if the folder is not empty

```
git init
git remote add origin git@github.com:me/name.git
git pull origin master
```

* Remove `.git` after you're done and any files you don't want like the `README`

* [source for cloning without folder](http://stackoverflow.com/questions/6224626/github-clone-contents-of-a-repo-without-folder-itself)

## How to quickly generate a `.gitignore`
* [gitignore.io](https://www.gitignore.io/)

#### Git config
[link](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

##### Useful git config settings
`/etc/gitconfig`

```
alias.add-commit=!git add -A && git commit
alias.s=status -s
alias.lg=log --oneline --decorate --all --graph
user.name=pip_lineupbuilder
user.email=howley.phil@gmail.com
core.autocrlf=input
color.ui=true
push.default=simple
pull.rebase=true
rerere.enabled=true
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true
core.ignorecase=true
core.precomposeunicode=true
```

## Deploy a site using Git

[video tutorial](https://www.youtube.com/watch?v=9qIK8ZC9BnU)

## Forks
When you want to jump in to the world of open source development you are going to fork someone else's repo. This is in contrast to just simply cloning the repo.

When you fork someone else's repo, you get and exact copy of the repo (think xerox copy machine) but it is added inside your repo. You can take this code and totally do whatever you want with it but if you want to contribute to the open source project you can make pull requests to the other person's repo that you forked. They can accept and add your changes or deny or deny and ask for improvements before adding.

When changes happen to this forked repo by the creators of it, you can pull down the new modifications only if you add `upstream` capability to your report. This is the direct connection to communicate from them to you and you to them.

[Here is the link to add that capability](https://help.github.com/articles/syncing-a-fork/)

# Git

## Global config

```
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

## Problems

### Can't Push

If you get this error

![ssh permissions error](https://i.imgur.com/TBXPtvt.png)

I get this every now and then. I usually occurs when I for some reason or another delete or change my SSH keys. The solution is just to make sure github has your SSH key in the settings. If not, login and go to your profile on Github. Go to settings and then click the SSH and GPG button. Go the the terminal and quickly copy your SSH key using this command:

```bash
$ pbcopy < ~/.ssh/id_rsa.pub
# Copies the contents of the id_rsa.pub file to your clipboard
```

[link to article](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)

Add a new SSH key. Give it a name.
Paste your copied key into the textarea.
Save.

Try to push again and it should work now.


## Git Aliases
These aliases should be in your `.zshrc`

`.zshrc`

```
# ====================
# Git Aliases
# ====================
alias gs='git status'
alias gap='git add -p'
alias ga='git add '
alias gb='git branch '
alias gc='git commit'
alias gd='git diff'
alias go='git checkout '
alias gob='git checkout -b '
alias gk='gitk --all&'
alias gx='gitx --all'
alias glog='git log --pretty=oneline --abbrev-commit'
alias gitl='git log --pretty=oneline'
alias lgl='git log --oneline --decorate'
# when I mispell git commands the following 2 commands help
alias got='git '
alias get='git '
alias glog='git log --pretty=oneline --abbrev-commit'
alias up='git pull upstream master'
```
## Starting a fresh project

If you plan on starting a new project with an existing repo, be sure and clear out that repos git data at the start to create a fresh history:

```
$ rm -rf .git && git init
$ git commit -m "Initialize Repo"
```

## Errors

I get this error a lot. If you see something like this and are wondering what is wrong? It means you forgot to add and commit your first repo commit

Usually get it when I first run `git init` and then try to `hub create` and when I `git push origin master` I get the following error.

![common git repo create error](https://i.imgur.com/8dU3F81.png)

Just add and commit and you should be good to go.

## Rebasing with Git issues
I ran into this issue when I tried to run `$ git rebase --continue` and git was telling me `did I forget to use git add???`

[This article explains why](http://wholemeal.co.nz/blog/2010/06/11/no-changes-did-you-forget-to-use-git-add/) and offers a solution:
`$ git rebase --skip`


remove everything from staging
`$ git reset HEAD -- .`

## List remote branches
[source](http://gitready.com/intermediate/2009/02/13/list-remote-branches.html)
Sometimes you may need to figure out what branches exist on a remote repository so you can pull them down and check them out, merge them into your local branches, etc. If you’re using GitHub or gitweb to host your repository it’s usually easy to determine the branch names, but if you need to get them in general or for scripts it’s not exactly clear.

The easiest way is just to use the git branch commands’ various options. -a shows all local and remote branches, while -r shows only remote branches.
`$ git branch`

* master

`$ git branch -a`

* master
  origin/1-2-stable
  origin/3-0-unstable
  origin/HEAD
  origin/master

`$ git branch -r`

  origin/1-2-stable
  origin/2-0-stable
  origin/2-1-stable
  origin/HEAD
  origin/master

So, once you know the name of the branch it’s quite simple to check them out. If you have color options on it’s also quite easy to tell which branches aren’t pulled down since they’re listed in red.

`$ git remote show origin`

The `ls-remote` command returns the SHA1 hash of the latest commit for that reference, so it is quite easy to parse out and get to the exact commit you need if you’re doing some scripting. The --heads option lists only branch names since the command can list tags too.
If you have any other uses for these commands or an easier way to figure out branches that live on a remote, comment away!

`$ git ls-remote --heads origin`

# How to fetch all remote branches
`$ git fetch --all`


## Push all branches to remote

`$ git push REMOTE --all`

example: if your remote is `origin` than `$ git push origin --all`

## What if a student, and I won't mention any names, wanted to delete all the images in a folder and typed `$ rm -rf * .png`. This would delete all the files in that directory and all directories inside that directory.

How would that student get the files back?
Hopefully, the student is using git because this command (as long as they have not added to staging yet) will bring all the deleted files back.

`$ git checkout .`

## Commit only part of a file in Git

You can do `git add --patch filename.x` (**or -p for short**), and git will begin breaking down your file in what it thinks are sensible "hunks" (portions of the file). You will then be prompted with this question:

Stage this hunk [y,n,q,a,d,/,j,J,g,s,e,?]?

And here the meaning of each option:

* `y` stage this hunk for the next commit
* `n` do not stage this hunk for the next commit
* `q` quit; do not stage this hunk or any of the remaining hunks
* `a` stage this hunk and all later hunks in the file
* `d` do not stage this hunk or any of the later hunks in the file
* `g` select a hunk to go to
* `/` search for a hunk matching the given regex
* `j` leave this hunk undecided, see next undecided hunk
* `J` leave this hunk undecided, see next hunk
* `k` leave this hunk undecided, see previous undecided hunk
* `K` leave this hunk undecided, see previous hunk
* `s` split the current hunk into smaller hunks
* `e` manually edit the current hunk
* `?` print hunk help

If the file is not in the repository yet, do first git add `-N filename.x`. Afterwards you can go on with git add `-p filename.x`.

You can use than: `git diff --staged` afterwards to check that you staged the correct ones `git reset -p` to unstage incorrect hunks `git commit -v` to view your commit while you edit the commit message.

Note this is a far different than the `git format-patch` command, which is entirely different.

## How can you keep an empty folder in git?
Use `.gitkeep`

Add a comment just so people know

`// this is just an empty file so the empty folder will stay in git`

### How do I push all branches?
`$ git push --all`

### How do I push all tags?
`$ git push --tags`

### How do I rename the current branch?
`$ git branch -m <newname>`

## Git
| Command | Description |
| ------- | -------- |
| `git commit -am` | Adds modified files and commits in one step | 

## Git Resources
* [Hot tips for Git](http://wesbos.com/git-hot-tips/)
