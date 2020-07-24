## MERN-Project

Dating app based on the current global epidemic titled: Covid-18+

## Project Link

LIVE LINKS:

font-end link: https://covating-app.netlify.app/
back-end link: https://mern-covating-application.herokuapp.com/api/users

GITHUB LINKS:
front-end link: https://github.com/hannahbannan/FrontEnd_Project3
back-end link: https://github.com/JordanLarson/BackEnd_Project3

## Project Description

A dating application where the user can create a profile, and view other user profiles to find a match. The user can then chat with the users in their favorites. Provides a platform for the user to connect with people who
may or may not have antibodies.

## WireFrames

mobile-design:
https://www.figma.com/file/bCfIhoNl6QbITubYPlMMmz/Dating-App?node-id=0%3A1

desktop-design:
https://www.figma.com/file/79i6b3P296mLVXuDHc2XW7/Desktop-Wireframes?node-id=0%3A1

component-architecture:
https://www.figma.com/file/U4I2AedsJZAn7wJtmUsohL/react-architecture-%3F?node-id=0%3A1

# USER STORIES

User can see users from our dating database
User can filter their preferences by age, gender, antibodies
User can "like" another profile and it will save that profile to favorites
Once added to favorites, user can chat with another user and see chat history
User can sign up for a profile, login in to their account & edit their own profile

# MVP Matrices

| BackEnd                            | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------- | :------: | :------------: | :-----------: | :---------: |
| User Schema                        |    H     |       1        |       2       |      2      |
| Create dummy accounts              |    H     |       4        |      12       |     12      |
| Dummy account Seed Data            |    H     |       2        |       1       |      1      |
| Dummy account Routes/Controllers   |    H     |       5        |       8       |      8      |
| User/Dummy Server set up           |    H     |       1        |       4       |      4      |
| Deploy user/dummy account database |    H     |       3        |       5       |      5      |
| Message Schema                     |    H     |       1        |       1       |      1      |
| Backend Research                   |    H     |                |      16       |     16      |
| Message Routes/Controllers         |    H     |       4        |       5       |      5      |
| Message Server set up              |    H     |       1        |       1       |      1      |
| Deploy Message Server              |    H     |       2        |       0       |      0      |
| Total                              |    H     |      23.5      |      55       |     55      |

| React/Front End                               | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Frontend Research                             |    H     |                |      15       |     15      |
| Navbar & Footer                               |    H     |       2        |       6       |      6      |
| React Router                                  |    H     |       4        |       4       |      4      |
| Home Page                                     |    H     |       1        |       4       |      4      |
| Registration Page                             |    H     |       4        |       6       |      6      |
| Favorites/Liked Page with list of users liked |    H     |       5        |       8       |      8      |
| Preferences Page                              |    H     |       5        |       6       |      6      |
| About Page                                    |    H     |                |       8       |      8      |
| Covid-tips page                               |    H     |                |       2       |      2      |
| Dashboard with like/dislike buttons           |    H     |       5        |      12       |     12      |
| Favorited User Info Page                      |    M     |       4        |       5       |      5      |
| Your Profile Page -Edit info form             |    H     |       2        |       6       |      6      |
| Messages                                      |    M     |                |      10       |     10      |
| Login                                         |    M     |                |       6       |      6      |
| Responsive Design                             |    H     |       6        |      12       |     12      |
| CSS/ Styling                                  |    H     |       8        |      24       |     24      |
| Graphics & animation                          |    H     |                |       8       |      8      |
| Total                                         |    H     |       54       |      142      |     142     |

TOTAL HOURS: 197 Hours

# Components

| Component              |                               Description                                |
| ---------------------- | :----------------------------------------------------------------------: |
| App                    |                      Sets up app with React Router                       |
| Nav                    | Nav guides to about, home, favorites, register, dashboard, current chats |
| Router                 |                    Contains Switch/Routes for content                    |
| Footer                 |                           Footer for the page                            |
| Form Component-editing |             A form which allows users to edit their account              |
| Form Component-create  |             A form that allows users to create their account             |
| Chatroom form          |             A form that allows users to type/ send messages              |
| Dashboard              |                   Component to like, dislike accounts                    |
| Favorites Page         |                 Page that displays your likes/ favorites                 |
| Team/website Page      |      Page displays the creators of the App, and their contributions      |
| Covid-19 Tips Page     |                       Gives general COVID-19 tips                        |
| Messages Page          |                   Direct message with a favorited user                   |
| Login Page             |                          User is able to login                           |
| Registration Page      |          Lets the user create a profile and adds it to database          |
| Preferences Page       |          Page that lets a user choose their search preferences           |
| User Details           |          Shared/Reusable component that renders one users data           |

# PostMVP

COMPLETED POST MVP:

1. Login
2. Within favorites list, have user info pop up when you select them
3. Covid-19 Tips

TO BE COMPLETED POST MVP:

1. Timestamps for messages
2. Chatbot for dummy users
3. Swipe functionality
4. Message image upload
5. Save user for later feature
6. Feedback form on About page

# Additional Libraries

Front End:

- React Bootstrap
- Axios
- React-Media
- Material-UI

Back End:

- Cors
- Morgan

# Code Snippet

Login feature:
```
const makeAPICall = async () => {
      console.log(username, password);

      const response = await axios(
        `${apiUrl}/users/login?username=${username}&password=${password}`
      );
      console.log("login response");
      console.log(response);
      document.cookie = "username=" + response.data.username;
    };
    makeAPICall();
    history.push("/favorites");
```



# Bugs & Fixes:

- Github merging - required lots of teamwork and communication!
- Socket.io - after hours of research and implmentation, didn't provide enough functionality for what we needed to do. So we ended up creating our own private messaging with Javascript.
- Connecting preference filters with the Dashboard component - moved API call to preferences and passed down user data as props to the dashboard
- Refreshing page upon button click - utilized state change and history
