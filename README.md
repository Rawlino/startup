# AniGameReviews 

[My Notes](notes.md)

A brief description of the application here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

There are plenty of places for nerds to review their favorite games and anime, but there's not one site dedicated to letting them store their reviews of both. That's where AnigameForThePeople comes in. It will be a website that consolodates a place for nerds to come and review their favorite anime and games. It will give them the ability to keep track of what they have played, their future wish list, and what they're playing right now. And ducks. Ducks will be everywhere. Everytime you recommend a show--ducks. When you give a thumbs down to a show--evil ducks. They will be the wholesome mascot to encourage others to use the site.

### Design

![Design image](public/image_library/anigame_mockup.png)

### Key features

- Secure login over HTTPS
- Ability to select what to review
- Displays options of recent games and anime to review
- In realtime tracks the top reviewed anime and games
- Allows users to create a library of their reviews as well as wishlists

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Minimum 3 HTML pages. One for home, one for reviewing, and one for top charts. Hyperlinks and hamburger menu will lead you to pages.
- **CSS** - Uses correct styling that will adjust to any given screen size, fun and inviting colors, good spacing between items.
- **React** - Allows user to login and create account, allows user to create and store reviews, displays current rankings for user to explore, allows user to recommend or not recommend a show or game via thumbs up or thumbs down. 
- **Service** - Backend service for:
    - login
    - creating reviews
    - storing reviews
    - editing reviews
    - random duck pictures upon recommending or not recommending a show/game via the https://random-d.uk/api service
- **DB/Login** - Stores users who create a login. Tracks and keeps a library of their reviews, can't review without a login, but you can still see others reviews. 
- **WebSocket** - As each user reviews, their reviews are added to the Top Charts to keep track of the highest reviewed anime and games.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://anigamereviews.com).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I created 3 HTML pages for the website.
- [x] **Proper HTML element usage** - I strived to use correct HTML elements.
- [x] **Links** - I have links connecting all of the pages together.
- [x] **Text** - I placed necessary text to understand what each page was accomplishing.
- [x] **3rd party API placeholder** - I added a button for the random ducks to be given. 
- [x] **Images** - I added image placeholders for a lot of my furutre deliverable technology.
- [x] **Login placeholder** - There is a login placeholder, as well as where the username will be displayed after login. 
- [x] **DB data placeholder** - A place to create reviews that will be saved was created.
- [x] **WebSocket placeholder** - An image for the top charts has been put down as a placeholder.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - I made the header, footer, and main elements uniform between pages.
- [x] **Navigation elements** - I made the navigation elements uniform across the pages.
- [x] **Responsive to window resizing** - I believe I did this part hahahaha. I'm not entirely sure if I checked every edge case to make sure that it was good.
- [x] **Application elements** - I edited most application elements. I struggled towards the end figuring out what I wanted to do with the 'Review' page.
- [x] **Application text content** - I edited some but not all the text of the application. Primarily text colors. Haven't decided if I want to change the 
- [x] **Application images** - I added an image in through parallax and removed images that were replaced with actual elements.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - I completed this part of the deliverable.
- [x] **Components** - I completed this part of the deliverable.
- [x] **Router** - Routing between login and voting components completed.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out** - I only did 2 of my 3 react components functionality (one of those 2 relies on the one that I didn't finish for displaying reviews).
- [x] **Hooks** - I used useState and useEffect.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
