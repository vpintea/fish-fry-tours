# fish-fry-tours

# Back-end

Install the necessary libraries. Open a terminal and run as follows:
```
cd ~/fish-fry-tours/FishFryToursBackend
pip3 install -r requirements.txt
```

With the terminal open run the back-end as follows:
```
python3 manage.py runserver
```

To test that the back-end is running successfully you can click the line below in your terminal window.
Starting development server at http://127.0.0.1:8000/

# Front-end
Install the necessary libraries. Open another terminal and run as follows:
```
cd ~/fish-fry-tours/Frontend
npm install
```

With the terminal open run the front-end as follows:
```
npm start
```
This will load the front-end.

# Tools Chosen
The frontend is built with React with Fetch and tested with Cypress. Functional testing is essentially testing with Cypress.
The backend is built with Django, the Django Rest Framework, and tested with the built in Django testing infrastructure. 

# Cloud Hosting 
Cloud hosting of back-end + front-end was attempted on Heroku cloud service however for this assessment I decided to leave it to run locally as I encountered configuration issues.

# Testing
To run the unit tests for the back end you run the following from the terminal.
```
python3 ./manage.py test
```
If all goes well then you will see something similar to the below:
```
Found 3 test(s).
Creating test database for alias 'default'...
System check identified no issues (0 silenced).
...
----------------------------------------------------------------------
Ran 3 tests in 0.016s

OK
```
