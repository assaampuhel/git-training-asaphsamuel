# exercise_1
---
## commit-one-file

### Commands
```bash
git start commit-one-file

git add A.txt
git commit -m "Committed A.txt"
```

## commit-one-file-staged

### Commands
```bash
git commit-one-file-staged

git commit A.txt -m "Committed A.txt"
```

## ignore-them

### Commands
```bash
git start ignore-them

touch .gitignore
# Added extensions in .gitignore

git add .gitignore
git commit -m "Added .gitignore"
```

### .gitignore
```bash
*.o
*.exe
*.jar
libraries/
```

## save-your-work

### commands
```bash
git start save-your-work

git stash
# Clear the bug in bug.txt

git add bug.txt
git commit -m "Fix bug"

git stash pop

# Finally, finished it! --> Add it in the bug.txt file
git add .
git commit -m "Finish work after bugfix"
```

## fix-typo

### Commands
```bash
git start fix-typo

# wordl --> world in in file.txt

git add file.txt
git commit --amend
# Fix commit msg
```

## chase-branch

### Commands
```bash
git start chase-branch

git checkout chase-branch
git merge escaped
```

## merge-conflict

## Commands
```bash
git start merge-conflict

git checkout merge-conflict
git merge another-piece-of-work

nano file.txt
# ? + 3 = 5 ---> 2 + 3 = 5

git add file.txt
git commit
```


## change-branch-history

### Commands
```bash
git start change-branch-history

git rebase hot-bugfix
```

## fix-old-typo

### Commands
```bash
git start fix-old-typo

git rebase -i HEAD~2
nano file.txt
# wordl --> world

git add file.txt
git commit --amend
# change the commit: wordl --> world

git rebase --continue

nano file.txt
# Solve merge conflict

git add file.txt
git rebase --continue
```