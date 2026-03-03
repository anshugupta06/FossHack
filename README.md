StayMatch -  An Open-Source Lifestyle Compatibility Engine for Shared Living

✨ Problem Statement

Students and working professionals moving to new cities struggle to find not just accommodation, but compatible roommates. Current methods like brokers, social media groups, or random allocation focus only on room availability and ignore lifestyle compatibility. This often leads to conflicts due to differences in habits, schedules, cleanliness, food preferences, and budget expectations.
There is a need for a structured, database-driven platform that integrates accommodation listing with roommate compatibility matching to ensure a smoother and more harmonious shared living experience.

✨ Motivation 

Nowadays, many students and working professionals move to new cities for studies or jobs. One of the 
biggest challenges they face is finding a suitable hostel or PG and a roommate who matches their 
lifestyle. Most people depend on brokers, social media groups, or random roommate allocation. Because 
of this, they often end up facing problems like lifestyle clashes, cleanliness issues, financial 
misunderstandings, or differences in daily habits.
Right now, there is no proper system that checks whether two people are actually compatible before they 
share a room. Differences in sleep schedules, smoking or drinking habits, food preferences, and budget 
expectations can easily lead to conflicts.
This project aims to make this process more organized and reliable by creating a web-based platform 
that stores user preferences and calculates compatibility between roommates. By using a structured 
database system, the platform can manage data properly and suggest better matches, helping users avoid 
unnecessary conflicts and have a smoother accommodation experience.

✨ Current Solution

At present, most people find hostels or PG accommodations through local brokers, WhatsApp or 
Telegram groups, Facebook Marketplace, personal contacts, or sometimes through random allocation by 
hostel management. While these methods may help in finding a room, they do not consider whether the 
roommates are actually compatible with each other.
In most cases, roommate selection happens randomly or simply based on room availability. There is no 
proper system that checks lifestyle habits, personal preferences, or daily routines before assigning 
roommates. Because of this, many people face issues after moving in.
Although some international platforms provide online housing listings, they mainly focus on renting 
properties and not on structured roommate compatibility analysis. This creates a gap where 
accommodation and roommate matching are not properly integrated. Therefore, there is a need for a 
system that not only lists hostels and PGs but also uses a database-driven approach to match roommates 
based on compatibility

✨ Project Goals and Milestones

General Goals:

• To design and implement a structured relational database for managing users, hostels, rooms, and 
preferences.

• To develop a compatibility scoring algorithm for effective roommate matching.

• To create a user-friendly interface for registration, login, and preference input.

• To ensure proper data normalization and maintain data integrity within the database.

• To provide conflict risk alerts based on calculated compatibility scores.

  Milestones:
  
•Requirement analysis and ER diagram design.

•Database schema design and normalization.

•Backend development and API integration.

• Implementation of the compatibility matching algorithm.

•Frontend development and integration with backend.

•Testing, debugging, and performance validation.

•Documentation preparation and final system demonstration

✨ Project Approach

The project will follow a structured DBMS-based development approach:

1. Requirement Analysis
   
Identify user attributes, hostel details, and preference parameters.
Database Design
◦ ER Diagram creation
◦ Relational schema design
◦ Primary and foreign key definition
◦ Normalization up to 3NF

2. Backend Implementation
◦ Use Node.js and Express for server logic
◦ Implement CRUD operations
◦ Store data in MongoDB

3. Matching Algorithm
◦ Compare user preferences
◦ Assign weighted scores to each parameter
◦ Calculate compatibility percentage

4. Frontend Development
◦ React / HTML + CSS
◦ Forms for user input
◦ Display match results
The solution will be modular and scalable.

✨ Project Outcomes

•A fully working and responsive Smart Hostel & Roommate Matching web 
application that users can actually interact with.
•Users will be able to create accounts, log in securely, and manage their personal profiles 
easily.

•The platform will allow users to enter their lifestyle preferences like budget, habits, and 
daily routine to find suitable matches.

•Students can browse available hostels or PG listings in an organized way instead of 
searching randomly.

•The system will suggest roommates based on a calculated compatibility percentage.

• It will clearly show whether a match is highly compatible or may lead to possible 
conflicts.

•The application will have a clean and simple interface so that anyone can use it without 
confusion.

•Frontend and backend will be properly connected to provide smooth and real-time 
interaction.

•A structured database will securely store user details, hostel information, and match 
records.

•The project will also include ER diagrams, database schema, and a system architecture 
diagram to explain the technical design.

•Finally, a complete project report and a live demo of the working platform will be 
presented.


✨ Assumptions

• Users provide accurate and honest preference information.

• Internet connectivity is available.

• The system is initially deployed for a limited number of users.

• Budget and lifestyle factors are measurable and comparable.

• Admin verification is optional in the initial version

✨ References

•Elmasri, R. & Navathe, S. Fundamentals of Database Systems, Pearson.

•Korth, H., & Silberschatz, A. Database System Concepts, McGraw-Hill.

•MongoDB Official Documentation, https://www.mongodb.com/docs/

•Node.js Documentation, https://nodejs.org/en/docs/

•Express.js Guide, https://expressjs.com/en/guide/ 

•React Official Documentation, https://reactjs.org/docs/getting-started.html

•Gao, J., Cai, X., et al., A Recommendation System for Roommate Matching Using Collaborative 
Filtering, IEEE.

•Zhang, Y., Zhang, Q., & Wu, L., Hybrid Algorithm for Social Compatibility Prediction, Springer.

•Li, H., et al., Student Housing & Roommate Matching Using Machine Learning, Journal Name.
