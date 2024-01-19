eval $(ssh-agent -s)
ssh-add ~/.ssh/termux_github
ssh -T git@github.com
git remote set-url origin git@github.com:Microweak/microweak.git
git reset --mixed origin/main
git add .
git commit -am "Update"
git pull --rebase origin main
git rebase --continue
git push -u origin main