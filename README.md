ServeNBServed
=============

Linux instructions

Install Git
sudo apt-get install -y git-core 

Install basic required software, which are part of a install script (thanks to Coursera).
Get the setup script by executing below command (Assumption: You have already setup a github account)
git clone https://github.com/startup-class/setup.git

Execute setup.sh to build the dev environment on the Ubuntu server as below
./setup/setup.sh

type "exit" at the prompt, after all the installation and again log back on to Ubuntu, through Cygwin using the below command
ssh <userid>@<ipaddress of Ubuntu on virtualbox>

Your command prompt should have a different color now 

Contributing
============
git clone https://github.com/ServeNBServed/DevSetup/setup.git

Folder Structure - Will keep changing
=====================================
Folder Structure on Linux
$ - Root
  
 <Myapp> app.js		