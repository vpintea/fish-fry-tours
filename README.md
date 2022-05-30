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
cd ~/fish-fry-tours/fishfrytours
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
