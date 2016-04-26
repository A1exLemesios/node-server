![][1]
## Node Server

> Simple & basic Node/Express Server in < 20 lines of code (comments included)

====

### Overview

A very simple Node.js server that uses the Express framework.
It includes 3 pages (Homepage, About Us, Contact Us) to get you accustomed on how routing works in Node/Express.

### Install & Run

These are 5 simple steps that even a monkey can follow.

**1) Install the required programs to work with this project**:

 - Install [Node.js][2]

 - Windows users need to install [Git for Windows][3].


**2) Open up a Terminal/Shell on your computer:**

 Both Mac & Windows have some kind of a terminal already installed:

 - **Mac OSX**: Launch *Terminal* from your *Applications*.

 - **Windows**: Launch *Command Line(cmd)* - It's somewhere on your computer.


**3) Clone the project and get into the cloned project's folder:**

*Note: Skip the '$' character when copy-pasting or typing the commands in your terminal*

```bash
$ git clone https://github.com/nicholaswmin/node-server.git
$ cd node-server
```

**4) Install project dependencies:**

```bash
$ npm install

```

**5) Run the app:**

```bash
$ node app.js

```

**Nice stuff!** You're running a local server on port `8081`.

- Visit http://localhost:8081 on your favorite browser to check it out.

- There are 2 more pages for you to check out:

 - The *About Us* page at http://localhost:8081/about

 - The *Contact Us* page at http://localhost:8081/contact

====

### Wanna play with the code?

Simply open `app.js` in the project's folder, make your changes and restart the server.

**1) Open `app.js` in a code editor:**

- Check out [Atom][5] or [Sublime Text][4] if you don't have one.

**2) Make your changes:**

- E.g You can add another page/route, perhaps an 'Our Team' page.

**3) Restart the server:**

 - Press `CTRL + C` in your terminal to stop the server and then run it again:

 - Check out [nodemon][10] if you don't want to restart the server each time you make changes


```bash
$ node app.js

```

====

### Something not working?

Open up an Issue by clicking [here][9].

Make sure you describe:

- The steps you followed.
- The step you got stuck.
- The error you are seeing (terminal errors).
- The platform you are on (Operating System & Browser brand and version)

### Want more?

There are myriads of Node Tutorials floating around on the web.
Feel free to snoop around.

Some things you can Google:

- [What's package.json file in the project?][6]
- [Node.js & Express framework tutorial for beginners][7]

====

### Disclaimer:

This repo is [MIT][8] licensed, meaning you can do whatever you want with it.

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
