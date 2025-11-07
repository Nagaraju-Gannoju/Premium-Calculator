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

# Occupation ratings 

**Occupation  -  Rating**

Cleaner  -  Light Manual

Doctor   -  Professional

Author   -  White Collar

Farmer   -  Heavy Manual

Mechanic -  Heavy Manual

Florist  -  Light Manual

Other   -  Heavy Manual

# Ratings and Factors

**Rating - Factor**

Professional - 1.5

White Collar - 2.25

Light Manual - 11.50

Heavy Manual - 31.75

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
List any required software, such as Node.js, npm, or specific versions of a framework. 

# Installation 
git clone <repository_url>

# Install dependencies
npm install

# Navigate to the project directory
cd <project_directory>

# To build the project
ng build

# To start a local development server, 
ng serve

# Technologies used
Angular
