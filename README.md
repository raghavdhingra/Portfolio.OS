# Portfolio-OS
It's my personal portfolio and Open-Sourced under MIT License. You can fork and use it as boiler plate for your portfolio.

### Initialising the revolutionary Operating System.
#### Stay Tuned.

https://raghavdhingra.me

https://raghavdhingra.com

https://raghavdhingra.social

https://raghavdhingra.engineer

https://raghavdhingra.co

If you want particular components or designs of this portfolio, go to https://github.com/raghavdhingra/Portfolio-OS-Prototype
It contains all the designs in simple html/css and js.

## Before starting to work on this repo
The Website is made with the help of Django Framework. So the contributor having knowledge of HTML, CSS, Javascript, Python can contribute to this repository.<br>
### Client side languages used:
HTML - (Hyper Text MarkUp Language) - It's not a language rather its just a markup which defines a webpage and tells the browser that how to display an element on it.
<br>
CSS - (Cascading Style Sheet) - It is used for the styling of the webpage. By using this we can define and apply different property to the HTML elements by the use of Classes and IDs.
<br>
JavaScript - It is a client sided scripting language. It means JavaScript scripts are read, interpreted and executed in the client, which is your Web browser. It is used to create responsive, interactive elements for web pages, enhancing the user experience.
<bR>
  
### Server sided language used:
Python - It is a general purpose scripting language. Nowadays, It is one of the most popular programming language. It is used to make WebApps, GUI, Mobile apps, etc. But here it is used to handle the server.
<br>

### Framework:
#### Django - 
This WebApp is made with the help of Django, which is a python Web Framework. Basically, A framework is a collection of programs that do something useful and which you can use to develop your own applications. It have some set of rules which one have to follow for making up the Application.
All the languages mentioned above are bind together and used inside this framework. And all these make up our WebApp.

  <br><Br>
  <h3>Setting up the WebApp</h3>
  1.) Clone the projectc onto your local machine.<Br>
  <Br>2.) Unzip the folder and open it in some IDE or some code-editor like - PyCharm, VS-Code, Atom, etc.<br>
    <br><span id="point3">3.)</span> Set up a virtual environment fot it.<Br>
  Open the terminal in the current folder and write the given command.

```
virtualenv <foldername> <path>
```

*For Example:*

```
virtualenv venv .
```

It will create a virtual environment with a folder name - *venv* in the current directory<br>
<br>4.) Now activate the virtual environment by writing the following command: <br>
*FOR WINDOWS*<Br>
```
cd venv/scripts
```
then 
```
activate .
```
<Br>
  
*FOR MACBOOK and LINUX*
<br>
```
source venv/scripts/activate
```
This will activate the virtual environment. You can assure it by seeing *(venv)* in front of the C:/path
<Br>5.) Change the path to the main folder (where the manage.py and requirements.txt files are present)<br>
  You can change it by - change directory (cd) command.
  
```
cd <path name>
```
<Br>
## For previous directory
  
```
cd ../
```  
## For current directory

```
cd ./
```
<br>
  <span id="point6">6.)</span> Install all the requirements in the requirements.txt file by using pip
  
```
pip install -r requirements.txt
```
<br>7.) After installing you can verify whether all the requirements have been installed or not by using:

```
pip freeze
```
<br>8.)After the installation process have been finished, you can run the development server by:<br>
*FOR WINDOWS*

```
python manage.py runserver <port>
```
For Example: 

```
python manage.py runserver 8000
```
It will start the development server on port 8000, that's -> 127.0.0.1:8000 or localhost:8000
<Br>
* SAME FOR MACBAOOK and LINUX *
  
```
python3 manage.py runserver <port>
```
<br>9.)Now you can go through the App and make changes and contribute to the Open Source

## Use of requirements.txt file
If You want to use any other library or function which need an import or needed to be downloaded there is a file <b>requirements.txt</b>
You can specify the library or function there also its version.<br>
For Example, if we have used any integration for payment like Razorpay having version 1.0.3, then:


```
razorpay==1.0.3

```
Please write the requirements.txt file in alphabetical orderwise.
<br><br>
Again, if you wants to see which are the requirements which are already installed in the virtual environment, then you can run the <b>pip freeze</b> command and it will show every requirement installed in your virtual environment (If You have not installed a virtual environment, <a href="#point3">please see point number 3 above</a>, or click on the link.)

```
pip freeze
```
This command will give all the requirements which is installed like if we have installed razorpay,
<br>
Then, it will give - 

```
razorpay==1.0.3
```
as a result.

## Fork this repo and make it all yours

# Happy Coding :)
