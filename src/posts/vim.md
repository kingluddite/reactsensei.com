---
slug: "/vim"
date: "2018-12-25"
title: "Vim"
---

## Vim

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

## Keyboard Shortcuts
### Closing tabs and windows
| Keyboard Shortcut      |    Action |
| :-------- | --------:|
| `:qa`  | Closes all tabs and vim |
| `:wqa`  | Closes all tabs and saves and vim |
| `:tabo` | Closes all tabs but current tab |
| `:on` | Closes all windows except current |

