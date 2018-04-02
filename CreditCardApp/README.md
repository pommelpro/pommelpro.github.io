# pommelpro.github.io

This is a fake credit card application website. Your information is stored on https://parse.com/ so do not submit any information you do not wish to be seen by other people.

To see this application running go and test it out at http://pommelpro.github.io/

I used the framework Bootstrap from http://getbootstrap.com/ 

There are 3 pages in this application. The main one is the "Credit card application form". This form has the user fill out 3 sections of information. If the user fills out the sections correctly the information will be sent to Parse.com and be stored as a JSON object and the user will be navigated to the "See application status" page. If they made any mistakes, those mistakes will turn red and the user must fix them and submit the information again.

The second page is the "See application status" page. This page allows the user to look up if they are in the system. They enter their first and last name and click the submit button. If the user's name can be found at Parse.com there will be a success message. If there is an issue in finding the user's name there will be an error message.

The final page is the "You are now logged out" page. This page lets the user know they are logged out of the sytem. From here they can navigate to the check application status page or the apply for a credit card page.
