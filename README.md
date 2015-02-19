project
=======

A very basic project template. Requirements: node, npm, php 5.4+

* Clone into whatever you want to call your new project, e.g. "banana-bot"  
    ```
    $ git clone git@github.com:johnshopkins/project.git banana-bot
    ```  

* cd into your new project directory  
    ```
    $ cd banana-bot
    ```  

* Install gulp globally, if you don't already have it  
    ```
    $ which gulp || npm install -g gulp
    ```  

* Install node packages  
    ```
    $ npm install
    ```  

* Start web server on your favorite port, e.g. 4000
    ```
    $ php -S localhost:4000 -t public/
    ```  

* In a new terminal tab, run the gulp watch command  
    ```
    $ gulp watch
    ```  
    
* Open to http://localhost:4000 in your favorite browser

* Scoop up the mountains of money and awards and medals bestowed upon your head on account of your new and great success.


## Some Rules

1. Only edit files in the `src` directory.
1. *ONLY EDIT* files in the `src` directory!
1. Any files you put in `src/pages` should be in "pagemaki style", with some YAML front matter a la Jekyll. They'll be built and dropped into whatever layout you define at the top of the file, and the system will look for that layout at `src/layouts/{name}.html`
    - The files you put here in `src/pages` will be built into `public` directly, so `src/pages/index.html` will end up in `public/index.html`
1. Any files you put in `src/static` will be built into the `public` root also. Don't have files here that match the relative path of a file in `src/pages` or you will have pain
1. _Only edit files in the `src` directory_