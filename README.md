# Premium-Calculator
Project title 
Premium Calculator UI 

# Description
This project implements a user interface that allows a member to calculate their monthly death insurance premium. The premium is calculated based on the member's personal information, chosen occupation, and the desired sum insured. 

# Features
Dynamic Premium Calculation: Automatically recalculates the monthly premium whenever the user changes their occupation, provided all other mandatory fields are completed.

Mandatory Field Validation: All input fields are required before a premium can be calculated.

Detailed Premium Breakdown: The calculation uses a rating factor that corresponds to the member's occupation. 

# Calculation logic
The monthly premium is determined by the following formula: 
DeathPremium=(\text{Death\ Cover\ amount}*\text{Occupation\ Rating\ Factor}*\text{Age})/1000*12

# Occupation ratings and factors
Occupation	Occupation Rating	Rating Factor
Cleaner	    Light Manual	    11.50
Doctor	    Professional	    1.5
Author	    White Collar	    2.25
Farmer	    Heavy Manual	    31.75
Mechanic	Heavy Manual	    31.75
Florist	    Light Manual	    11.50
Other	    Heavy Manual	    31.75

# How to use-
The user interface will require the following information to be entered: 

Name: The member's full name.
Age Next Birthday: The member's age at their next birthday.
Date of Birth (mm/YYYY): The member's month and year of birth.
Usual Occupation: Selected from a dropdown list of available occupations.
Death – Sum Insured: The desired death cover amount. 

# Getting started 

This section should contain technical details on how to set up and run the application. 

# Prerequisites- 
List any required software, such as Node.js, npm, or specific versions of a framework. Installation sh# Clone the repository
git clone <repository_url>

# Navigate to the project directory
cd <project_directory>

# Install dependencies
npm install
Use code with caution.Running the application sh# Start the development server
npm run dev

Running the application
sh
# Start the development server
npm run dev
Use code with caution.

# Technologies used
Angular