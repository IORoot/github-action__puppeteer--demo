
<div id="top"></div>

<div align="center">


<img src="https://svg-rewriter.sachinraja.workers.dev/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40mdi%2Fsvg%406.7.96%2Fsvg%2Fgoogle-chrome.svg&fill=%23115E59&width=200px&height=200px" style="width:200px;"/>

<h3 align="center">Demo Puppeteer Github Action Script</h3>

<p align="center">
This is a working example of using a github action workflow to instigate puppeteer.
</p>    
</div>

##  1. <a name='TableofContents'></a>Table of Contents


* 1. [Table of Contents](#TableofContents)
* 2. [About The Project](#AboutTheProject)
	* 2.1. [Files](#Files)
	* 2.2. [package.json](#package.json)
	* 2.3. [puppeteer.js](#puppeteer.js)
	* 2.4. [.github/workflows/puppeteer.yml](#githubworkflowspuppeteer.yml)
	* 2.5. [Built With](#BuiltWith)
* 3. [Usage](#Usage)
* 4. [ Customising](#Customising)
* 5. [Troubleshooting](#Troubleshooting)
* 6. [Contributing](#Contributing)
* 7. [License](#License)
* 8. [Contact](#Contact)
* 9. [Changelog](#Changelog)


##  2. <a name='AboutTheProject'></a>About The Project


###  2.1. <a name='Files'></a>Files

1. package.json
2. puppeteer.js
3. .github/workflows/puppeteer.yml

###  2.2. <a name='package.json'></a>package.json

The key component of the package.json is that you include the `puppeteer-core` dependency.

```
    "dependencies": {
        "puppeteer-core": "^5.4.1"
    }
```


###  2.3. <a name='puppeteer.js'></a>puppeteer.js

This is the script that will execute and run puppeteer. I've made this a little more verbose and included some
try/catch blocks to demo better javascript structure.

There is one "class", called `runner`, that has one publid method called: `run`.

You can see at the bottom we execute the class with:
```javascript
runner.run();
```

This in-turn, will call the `publicRun` method in the class - which will step through the try/catch blocks.


###  2.4. <a name='githubworkflowspuppeteer.yml'></a>.github/workflows/puppeteer.yml

The workflow action only has a manual `workflow_dispatch`, so you'll have to go into the 'actions' tab on github and
manually run the action.

This repo demonstrates the usage of the github action "IORoot/action__puppeteer--media@master" which will run a 
docker container with an instance of puppeteer in it. 

To use the action, it's a matter of running youre commands like so:

```yaml
    - name: Test Code
      uses: IORoot/action__puppeteer--media@master
      with:
        args: npm install
```


<p align="right">(<a href="#top">back to top</a>)</p>


###  2.5. <a name='BuiltWith'></a>Built With

This project was built with the following frameworks, technologies and software.

* [Github](https://github.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



##  3. <a name='Usage'></a>Usage

Github Actions.

##  4. <a name='Customising'></a> Customising

None.

##  5. <a name='Troubleshooting'></a>Troubleshooting

None.

<p align="right">(<a href="#top">back to top</a>)</p>


##  6. <a name='Contributing'></a>Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue.
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



##  7. <a name='License'></a>License

Distributed under the MIT License.

MIT License

Copyright (c) 2022 Andy Pearson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<p align="right">(<a href="#top">back to top</a>)</p>



##  8. <a name='Contact'></a>Contact

Author Link: [https://github.com/IORoot](https://github.com/IORoot)

<p align="right">(<a href="#top">back to top</a>)</p>

##  9. <a name='Changelog'></a>Changelog

- v1.0.0 - Initial Commit
