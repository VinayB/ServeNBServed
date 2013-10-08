ServeNBServed
=============
Refer to [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to learn how to edit the **README.md** file

Git operations
==============
1. To clone this repository `git clone https://github.com/VinayB/ServeNBServed.git`
2. Once the repo is cloned, you can initialize the git with below commands to push changes back to git.
... `git config --global user.name "John Smith"` -- This is the user name you have used for GitHub
... `git config --global user.email "example@emailprovider.com"`  -- This is the email id you have used for signing up with GitHub
... `git init`
3. To add a new file OR the modified file back to GitHub, so that others can see the changes and pull them, please use the below commands
... `git add filename.ext`
... `git commit -m 'Here is my commit comment'`
     The above two commands only add the files to git. The changes can not be seen by others, until the file is pushed to git with below command
... `git push -u origin master`  -- master is the name of the branch



Dev Setup
=========

Linux instructions
------------------
1. Install Git

...`sudo apt-get install -y git-core` 

2. Install node, npm and basic software, which are part of an install script (thanks to Coursera).

...Get the setup script by executing below command (*Assumption*: You have already setup a github account)
...`git clone https://github.com/startup-class/setup.git`

3. Execute `setup.sh` to build the dev environment on the Ubuntu server as below

...`./setup/setup.sh`

4. Type "exit" at the prompt, after the above installation and again log back on to Ubuntu.  You can use Cygwin. Use `ifconfig` on Ubuntu to find out the ip address assigned by VirtualBox and use below command
.... `ssh <userid>@<ipaddress of Ubuntu on virtualbox`


Your command prompt should have a *different color* now 

Contributing
============
Clone the repository. Update the files and commit 


Folder Structure - Will keep changing
=====================================
Initial Folder structure for the app:

https://github.com/VinayB/ServeNBServed/blob/master/myapp/public/dist/image/FolderStruct.PNG

References
===========
Intro to architecture - http://blog.zenika.com/index.php?post/2011/04/10/NodeJS

Nice post - https://medium.com/p/edf6a254d930

May be a nice feature to add - http://stackoverflow.com/questions/15692405/architecture-recommendations-guidelines-for-a-node-js-web-application

Seems to be a nice blog. Still to read - http://ericleads.com

Sample scaling and deployment arch - http://www.slideshare.net/BenLin2/webconf-nodejsproductionarchitecture

Need to view - http://www.youtube.com/watch?v=PPWoGs5Xhfs






