![][1]
# Node Server

> Simple & basic Node/Express Server in < 20 lines of code (comments included) bundled with honest instructions.


## Overview

This is a very simple [Node.js][13] server that uses the [Express][12] framework.

It includes 3 pages (Homepage, About Us, Contact Us) to get you accustomed on how routing works in Node/Express.

These following instructions assume very little prior coding experience however you are expected to google stuff a bit if you get stuck.


## Install & Run

These are 5 simple steps that even a monkey can follow. After going through them you should have a server running. You can then visit the pages declared on the server using your browser.

### 1. Install the required applications to work with this project:

- Install [Node.js][2]

- Windows users need to install [Git for Windows][3].

Node.js is the runtime environment for server-side Javascript. If you don't have this, your computer won't be able to understand (interpret) the code in this project. Long story short it won't be able to run the code.

[Git][14] is the Version Control System (VCS) for this project. Something like Dropbox but for code. You don't actually need it since you can just [Download the project as ZIP](https://github.com/nicholaswmin/node-server/archive/master.zip) and run it. However the instructions below assume that you're using Git to fetch the project files on your computer.

Using some type of VCS is the first step to get you hanging out with the cool kids, not using it makes you a dolt in the long-term and rightfully so.


### 2. Open up a Terminal/Shell on your computer:

 Both Mac & Windows have some kind of a terminal already installed:

- **Mac OSX**: Launch *Terminal* from your *Applications*.

- **Windows**: Launch *Command Line(cmd)* - It's somewhere on your computer.

A terminal is basically a window that allows you to instruct your computer to do something using text commands, instead of point-and-click with the mouse. There is virtually no way you can do any serious development without using a terminal since most of the commands to setup/initialize a project can only be run through a terminal. There's no need to be afraid of the terminal. It doesn't bite and it doesn't expect you to know all the commands from the get-go. To go through this project just 5-6 commands are needed which you can simply copy & paste into it.

### 3. Clone the project and get into the cloned project's folder:

**Note**: The `$` character in the commands below just indicates that it's a terminal command. Don't include it in the actual command within your Terminal.

```bash
$ git clone https://github.com/nicholaswmin/node-server.git
$ cd node-server
```

The first command `$ git clone` basically tells your computer to kind of download the project files from Github on your computer. When you run that command a new folder called `node-server` is created in the directory where your terminal is currently pointed at which contains the project files.

The second command `$ cd node-server` just instructs your terminal to go into the newly created folder. It's equivalent to double-clicking a folder on your desktop to go into it and view it's contents.

What it means is: `c`hange `d`irectory to `node-server`

The rest of the commands assume you are in the project directory.

### 4. Install project dependencies:

```bash
$ npm install

```

The project relies on some Node Modules to make things tick. These are code files that someone else usually wrote that I'm just including in the project so I can use them. The project depends on them and you can't run it properly without them. The most critical dependency here is Express which is boilerplate code that allows us to create proper servers using very few lines of code.

This command tells your computer to look somewhere on the Internet (the [npm][11] registry to be exact) for these modules, download them and install them for us. Hassle free.

### 5. Run the app:


```bash
$ node app.js

```

The file that contains the actual server code that I wrote is contained in a file called `app.js`. It sits there like a duck waiting for us to run it.

What this command does is it tells the computer to *run* `app.js` using Node.js. Node takes the file, interprets the contents (code) and then outputs something in your terminal to tell you if everything is allright. Most of the time we get errors when doing so because development ain't a walk in the park. But we work through them.

**Nice stuff!**

If everything went OK you should be running a local server on port `8081`.

- Your terminal should display this: *Running! Visit http://localhost:8081 in your browser.*

- To test it visit <http://localhost:8081> on your favorite browser to check it out.

- You should see a plain and ugly *"Welcome to the Homepage!"* being displayed.

- There are 2 more pages for you to check out:

 - The *About Us* page at <http://localhost:8081/about>

 - The *Contact Us* page at <http://localhost:8081/contact>



## Playing with the code

Time to make some changes to the code and add something useful to it. It only has 3 shitty pages at the moment which contain 3 words each. Simply open `app.js` in the project's folder, make your changes and restart the server.

### 1. Open `app.js` in a code editor:

- Check out [Atom][5] or [Sublime Text][4] if you don't have one.

### 2. Make your changes:

- E.g You can add another page/route, perhaps an 'Our Team' page.

### 3. Restart the server:

- Press `CTRL + C` in your terminal to stop the server and then run it again:

```bash
$ node app.js

```


## Something not working?

- Try some Googling first.

- If that doesn't work open up an Issue by clicking [here][9].

  Make sure you describe:

  - The steps you followed.
  - The step you got stuck.
  - The error you are seeing (terminal errors).
  - The platform you are on (Operating System & Browser brand and version).


## Want more?

There are myriads of Node Tutorials floating around on the web.
Feel free to snoop around.

Some things you can Google:

- [What's package.json file in the project?][6]
- [Node.js & Express framework tutorial for beginners][7]

====

### Disclaimer:

There's a ton of similar projects online. I know that. I had wisdom-tooth surgery, was almost high on codeine when I wrote this and I was feeling generous. It was also a good chance to help out a colleague understand what's going on when I hand him Node.js servers to deploy.

This repo is [MIT][8] licensed, meaning you can do whatever you want with it, even sell this code as your own.

The project logo (that cloud icon) is from [icons8.com][8]


[1]:https://maxcdn.icons8.com/Color/PNG/96/Weather/cloud_lighting-96.png
[2]:https://nodejs.org/en/download/
[3]:https://git-scm.com/download/win
[4]:https://www.sublimetext.com/
[5]:https://atom.io/
[6]:https://github.com/vigetlabs/gulp-starter/wiki/What-is-package.json%3F
[7]:https://codeforgeek.com/2014/06/express-nodejs-tutorial/
[8]:https://icons8.com/
[9]:https://github.com/nicholaswmin/node-server/issues/new
[10]:https://github.com/remy/nodemon
[11]:https://www.npmjs.com/
[12]:http://expressjs.com/
[13]:https://nodejs.org/
[14]:https://git-scm.com/
