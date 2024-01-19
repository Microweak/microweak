eval $(ssh-agent -s)
ssh-add ~/.ssh/termux_github
ssh -T git@github.com
git remote set-url origin git@github.com:Microweak/microweak.git
git add -A
git commit -am "Update"
git push
