---
slug: "/vim"
date: "2018-12-25"
title: "Vim"
---

## Vim Specific
| Command | Description |
| ------- | -------- |
| `:version` | Gives you vimrc info |

## Keyboard Shortcuts
* First we'll list shortcuts of `:` and whenever you see this it means that
while in Vim type `:` followed by the keyboard shortcut and then the keyboard
  shortcut action will execute
* Here is an example of using them when closing tabs and windows

### Closing tabs and windows
| Keyboard Shortcut      |    Action |
| :-------- | --------:|
| `:qa`  | Closes all tabs and vim |
| `:wqa`  | Closes all tabs and saves and vim |
| `:tabo` | Closes all tabs but current tab |
| `:on` | Closes all windows except current |

### Editing
| Keyboard Shortcut      |    Action |
| :-------- | --------:|
| `U` | Makes Uppercase (visual mode) |
| `u` | Makes Lowercase (visual mode) |
| `h j k l` | Navigate left, down, up, right (normal mode)
| `w` | move to next word (normal)
| `b` | move back a word (normal)
| `e` | move to end of word (normal)
| `U` | Undo last edit (normal)
| `ctrl` + `r` | Redo last edit (normal)
| `gg` | Move to top of page (normal)
| `G` | Move to bottom of page (normal)
| `21G` | Move to line 21 (normal)

## Multi-change word
* I am used to Sublime Text's highlight all words and replace them with
something else but this technique is a bit different and it involves more
manual work
* You find a word and then you replace the word and then you navigate to the
next word found in the search typing `n` and then replacing with `.`
* It is not as fast as the sublime text way but it is a nice technique that
you will use everywhere in Vim (once you get comfortable with it)

### Let's Try it Out Now
1. Search for word using `/`
2. Press `return` (That will highlight all words that match search)
3. Type `cgn` and type new word (This will let you replace the word)
4. Enter into **Normal** mode (`jk` (I added this key combo to my binding in my
   vimrc file (see my dotfiles)))
5. Type `n` (To get to next word match)
6. Type `.` to repeat (Rinse and repeat to keep repeating changes)

### UI
* I use NerdTree as a Plugin and the following are keyboard shortcuts to make
navigating around the NerdTree UI enjoyable and efficent

#### Switching tabs
* If you have multiple tabs open this is how you quickly move between them

| Keyboard Shortcut  | Action |
| ------- | -------- |
| `gt` | Next tab |
| `gT` | Previous tab |

## Folding
| Command | Description |
| ------- | -------- |
| `zM` | close everthing | 
| `zR` | open everything | 
| `za` | toggle state of the current fold | 
| `zj` | jump down to next fold | 
| `zk` | jump up to previous fold | 
| `zk` | jump up to previous fold | 
| `zO` | Open all of the nested folds | 
| `zc` | Close all of the nested folds |

## Plugin Specific
| Command | Description |
| ------- | -------- |
| `:PluginInstall` | Install Vundle Plugins |
| `:UltiSnipsEdit` | Creates a Ultisnip Snippet |
| `:version` | Gives you vimrc info |

## NerdTree
* NerdTree will make you fall in love with Vim
* Never having to use the mouse to navigate files is a godsend

| Command | Description |
| ------- | -------- |
| `r` | Refresh current directory listing |
| `R` | Refresh root directory listing |
| `t` | Open the selected file in a new tab |
| `i` | Open the selected file in a horizontal split window |
| `s` | Open the selected file in a vertical split window |
| `I` | Toggle hidden files |
| `m` | Show the NerdTree menu |
| `r` | Refresh the current directory |
| `R` | Refresh the tree, useful if files changed out of Vim |
| `?` | Toggle NerdTree's quick help |
| `m` | Show the NerdTree menu |

### NerdTree Directory Navigation
| Command | Description |
| ------- | -------- |
| `o` | Open & close |
| `O` | Recursively open |
| `x` | Close parent |
| `X` | Close all children recursively |
| `e` | Explore selected directory |
| `p` | Go to parent |
| `P` | Go to root |
| `K` | Go to first child |
| `J` | Go to last child |

### NerdTree FAQs
#### Question:  I created a file or a folder and Nerdtree isn't showing it to me. Why?
* **Answer** You need to refresh Nerdtree with either:
  - `r` ---> Refresh current directory
  - `R` ---> Refresh root directory's listing

#### Question: How do I add files using NerdTree? 
* **Answer** First you need to open menu
  1. `m` ---> Toggle open menu
  2. `a` ---> This will create a new file
  3. Name the file
  4. Press `return`
  5. Press `r` to refresh NerdTree

#### Question: What's the difference between a file and folder?
* **Answer** If you have a `/` at the end it is a folder and if you don't it is
a file

#### Question: What is a leader key?
* **Answer** This is a key you use to trigger a keyboard shortcut
* Usually changed to `;`
* I changed it to `,`

`.vimrc`

```
" TODO: Pick a leader key
" let mapleader = ","
```

#### Question: How are Bookmarks used in Vim?
* **Answer** [improve this answer]
* normal mode `ma` (local)
  - `mA` (global)
      + Global you can jump to files inside a project
      + Local is per file
* `'a` jumps to line (apostrophe)
* "```a```" (backtic + `a`)
  - Jumps to exact cursor position
* `d'a` ---> delete the 'a' bookmark
    - You an then move and paste it elsewhere with `p`
    - Or "delete line til mark"
    - `d`a` ---> delete from cursor of mark
* `y'a` copy line til mark
* `y` + `backtic` ---> copy cursor until
* `:marks` ----> list all bookmarks

#### Question: How do I save in Vim?
* **Answer** Many people are used to using `cmd` + `s` but I recommend using
the key binding of `zz` instead
* The reason is that key combo is way easier to type and type fast
* You will find this in my `.vimrc` inside my dotfiles

`.vimrc`

```
" save with zz
nnoremap zz :update<cr>
```

#### Question: The `esc` key is really hard to type when I want to enter into
Vim's normal mode. Is there a better way?
* **Answer** I can't stand typing the `esc` key so I use a common convention of
binding to `jk` and I add this to my `.vimrc`

`.vimrc`

```
" map jk to esc key
:imap jk <Esc>
```
* I also recommend changing caps lock to your escape key
* [Read More on how to change caps to your esc key](https://stackoverflow.com/questions/127591/using-caps-lock-as-esc-in-mac-os-x) to show you how to do that

#### Question: How do I toggle NerdTree open and close?
* **Answer** `ctrl` + `b`

#### Question: How do I delete, rename and move files in NerdTree?
* **Answer**
  1. Toggle NerdTree menu open
  2. Type key (read the instructions and you will see how to easily delete,
     rename, move, open the file in the Finder)

#### Question: Sublime Text had a cool feature to highlight a word and change all words with that spelling. How can I do that in Vim?
* **Answer** There is a plugin in Vim to mimic this behavior but I have found it buggy so I just use the vim default functionality as I find it more reliable

#### Question: How do I bubble up and down like I can in Sublime Text?
* **Answer** You need to add the following to your `.vimrc`
* Just use `ctrl` + `cmd` key and **up/down** arrows will bubble your current line/lines up and down respectively
* I added this inside `.vimrc` and now when I type `ctrl` + `k` will bubble line up and `ctrl` + `j` will bubble line down

`~/.vimrc`

```
" Bubble single lines
nmap <c-k> ddkP
nmap <c-j> ddp

" Bubble multiple lines
vmap <c-k> xkP`[V`]
vmap <c-j> xp`[V`]
```

### Question: How can I fold my code? 
* **Answer** This has a ton of options and [here is a great reference to give
you lots of choices](http://vim.wikia.com/wiki/Folding)
* Many people add this to their `.vimrc`

`.vimrc`

```
" Code fold bliss
set foldmethod=indent

" Toggle fold at current position
nnoremap <s-tab> za
```

#### Question: Copy function
* **Answer:**
* `va{Vy`
  - Say you are inside a function and you want to quickly copy the function so you can paste it somewhere else
  - `v` Switches to visual mode
  - `a` means "around"
  - `{` we search for the surrounding curly braces `{}`
  - `V` Select all lines of function
  - `y` Yanks all lines and puts them into machine clipboard
* **note** If you are nested deep, just keep typing `a{` until you have entire function

#### Question: Jump to matching object
* **Answer:**
* You are on the opening tag and want to jump to the closing tag
* Just type `%` and presto! Your at the closing tag

#### Question: Replace all words in file
* **Answer:**

`%s/foo/bar/g`

* This will replace all `foo` words with `bar` globally

### Window Mgt
* `:vsp` ---> creates horizontal windows
* `:sp` ---> vertical windows
* Close window with `:q`
* And I added this to `.vimrc` to quickly switch to left and right windows
    - Unfortunately, the up and down down work because `ctrl` + `up` I use to switch to my Mac control panel (use to move apps to different desktops)

`.vimrc`

```
" easy navigation in split windows
nnoremap <C-L> <C-W><C-L> " focus on left
nnoremap <C-H> <C-W><C-H> " focus on right
```

## Plugins
* Great for JavaScript

`Plugin 'prettier/prettier'`

## Vim Comment
* `gc` ---> comment out (visual mode too)
* `gcgc` ---> uncomment
* `gcap` --- comment out program

## Easy Motion
* Quick way to navigate

`.vimrc`

`Plugin 'easymotion/vim-easymotion'`
## Swap Files
* `.swp` files are for backing up and you really shouldn't turn the backup system off

### A better solution is to add this in your `vimrc`
`.vimrc`

```
" create backups
set backup
" tell vim where to put its backup files
set backupdir=/tmp
```

* After adding that to your `vimrc` file, make sure to refresh your source 

`$ source ~/.zshrc`

### Delete all files that begin with `~`
* If you have a lot of files ending with `~` you can delete them with:

`$ find . -name '*~' -exec rm {} \;`

### Clean out all `swap` files in a directory
* If you are sure you don’t need any vim swap files in a directory tree and want to get rid of them, you can use the following command in the directory while vim is not running (not even in another window or even a different login session):
* This will delete all files whose names end with .swk, .swl, .swm, .swn, .swo, or .swp in the current directory tree

`$ find . -type f -name "*.sw[klmnop]" -delete`

## How do I open an HTML file in the Chrome browser?
* (file:///)

`:!open % -a Google\ Chrome`

## Find each occurrence of `foo` (in all lines aka "globally"), and replace it with `bar`

`:%s/foo/bar/g`

## Replace all spaces with underscore
`:%s/ /_/g`

* Example: `One Two Three` gets transformed into `One_Two_Three`
* **note**: You need to add a `\` in front of the period – 

`:%s/\./ /g`

* This is because **regular expressions** use `.` as an "any character" wildcard


## Resources
### Good Reading
* [Vim: revisited](https://mislav.net/2011/12/vim-revisited/)
