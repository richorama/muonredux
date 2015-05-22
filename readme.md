# Muon Redux

The markdown wiki built on [Dropbox](http://db.tt/osZLMW0)

### Installation

Download the files in this repository and place them on a web server.

Alternatively you can use gihub pages: [https://richorama.github.io/muonredux/](https://richorama.github.io/muonredux/).


### Using the Wiki

Muon will automatically attempt to log you in using Dropbox.

Muon will save wiki files as markdown in the `App/Muon Redux/` folder. 

Anything you add or update in this folder will automatically be synced up to Muon when you are online.

JavaScript placed in code blocks will be executed by the browser, and the results written on the rendered page:

    ```js
    print("hello world");
    2 + 3
    ```

### Development

To update the dependencies, modify the `Gruntfile.js` and run these commands:

```
npm install
grunt
```

### Acknowledgements

* [Dropbox-js](https://github.com/dropbox/dropbox-js)
* [Ace](http://ace.ajax.org/)
* [Showdown](https://github.com/coreyti/showdown)
* [Twitter Bootstrap](http://getbootstrap.com/)

### License 

[MIT](https://raw.github.com/richorama/muonredux/master/license.txt)
