# Don't Leaf Me 🍃

## 💡Inspiration
In a world of fast media, many youth struggle with short attention spans and find it difficult to stay focused. We want to help overcome this phenomena with the help of a baby leaf sprout and automated browser proctoring! We hope this tool will help users ace their tests and achieve their dreams!

## 🔍 What it does
Don't Leaf Me! utilizes a camera and monitors the user throughout the study session. If the user leaves their computer (leaves the camera) we know the user is not studying, and the browser opens a page to let the user know to come back and study! The tool also allows users to add urls that they wish to avoid during their study session and monitors which pages the user goes to. If the user travels to one of those pages, the tool alerts them to go back to study. The user can also use the built-in study session timer which lets them keep track of their progress.

## ⚙️ How we built it
We constructed the front end with React, TypeScript, Chakra UI, styled-components, and webpack. We built the backend with Node, Express, and the Cloud Vision API from the Google Cloud Platform to detect whether or not a user was in front of the camera. 

## 🚧 Challenges we ran into
It was quite tricky to get the camera working to detect a person's face. There aren't many examples of what we were going for online, and much of our progress was made through trial and error. There were even less resources on how to connect the camera to the chrome extension. It was also difficult to extract the url of a browser from the chrome extension page since they are two separate pages.

## ✔️ Accomplishments that we're proud of
<ul>
<li>Creating a beautiful UI that creates a comfortable and motivating environment for users to be productive in</li>
<li>Successfully grappling with Google's Cloud Vision API</li>
<li>We managed to program the vision we had and also implemented most of the features we had planned to.</li>
</ul>

## 📚 What we learned
<ul>
<li>Through creating this project we gained a deeper understanding of the browser and DOM.</li>
<li>This was also the first time using our camera and chrome extension for many of our team members</li>
</ul>

## 🔭 What's next for Don't Leaf Me!
<ul>
<li>Don't Leaf Me! would like to add the ability for users to input the amount of time they wish to stay focused for on the timer. </li>
<li>Explore options of publishing our extension to the chrome web store.</li>
</ul>

