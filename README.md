# Budget-Tracker

A simple app for logging your expenses and monitoring your budget. 

## Inspiration

Because we are all very ~~boring~~ busy people we determined that an app with a practical use in the real world would be a good project to add to our portfolio. When you're busy and operating under an inflexible income having ways of tracking your spending is crucial.

## How to Use

Sign up by using the sign up form that pops up upon launching the app. After correctly entering your credentials you should immediately be greeted by the following page:

<img src="ReadmeImages\Screenshot (577).png" alt="signup" title="signup">

### This is how your screen should look now:

<img src="ReadmeImages\Screenshot (578).png" alt="signup" title="signup">

From here, your options are: 

* Inputing a new budget by typing it into the "Input New Budget Here" field and clicking "Submit".

* Adding an expense to the "Your Expenses" list by inputting a name for the expense as well as a cost under "Input Expenses Here".

* Deleting any expenses you've added by clicking the "Delete" button.

* You can then sign out by clicking the "SIGN OUT" button in the header.

* To sign back in simply use the log in form and enter your credentials again.


## Technologies

This app was created with React and is written mostly in Javascript and jsx as a result. nodeJS and Express were used for the backend and the packages bycrpt and jwt were used for the authentication and encryption. The user information, expense data, and, budget info are stored in postgres tables. Some bootstrap was used but the majority of the styling was done with traditional CSS.

## Bugs and Unfinished Functionality
Due to time constraints and technical difficulties certain features needed to be dummied out or scaled back. 

* Initially the plan was to allow users to automatically add up their expenses and compare the sum to their budget. The app would then alert the user if they went over budget but implementing that became too complex. 

* Users also would have been able to edit the name and cost of an expense after listing it but this was deemed too niche a feature to bother with in the alloted time since we figured any time an expense needed to be updated the cost naturally would as well so it might be better to just replace it entirely with the Delete function instead.

* The biggest issue however is that the expense and budget data is not tied to a particular user and can be viewed by anyone logged into the app. This makes listing sensitive info very dangerous and logging in, though secure, basically pointless unless you're a very lonely person willing to give their personal info to a soulless app just so it can say "Hi" to you.

## Changelog
-post presentation
-readme
-For safety
-Initial  Register and Login tests successful!
-We have a login page!
-Tables updated to include email columns. Expenses will only display on page if they have an email associated with them.
-Fixed decimal values in expenses table
-Just testing things out
-Backend authentication
-First commit
-Budget can now be updated. Expense update functionality dropped.
-Expense Update component wip
-Budget show
-Can now upload expense to database from client side
-Test Routes done
-Started routes
-first commit
-Initial commit
