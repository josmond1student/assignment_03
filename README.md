# Assignement 3 - CEN 2361
I am a student as State College of Florida (SCF). This semester I'm taking the class CEN 2361 - Mobile Web Apps.

This is my project for our assignment in Chapter 3. This is a mobile web app that uses JSON to find rhyming words for a word entered into the app.

Please visit https://josmond1student.github.io/assignment_03/ to run and intstall the app.

## Approach taken
In the video for this chapter the narrator gave an example of how to cache a list of assets versus the entire site. The drawback to the latter is that the user must navigate to each page and "fetch" it in order to cache it. That runs the risk of having uncached pages.

Even though it requires some work on larger apps to enumerate all the assets, I still prefer this approach because all assets get cached as soon as the app loads.

## Challenges faced
The biggest challenge I faced was working with GitHub Pages. The narrator showed us how to setup GitHub Pages for our username, but that only gives us one location. If we are going to create new apps with each chapter we would have to wipe out that repository and start over each time.

Upon further investigation, I learned how to create "Project" sites. So each chapter can become a project site. This creates a new challenge, however, because the path statement within the app must be relative, not absolute. So, I went through the app and inserted dots in front of all the slashes at the beginning of each path statement. (Ex: "./app.js" instead of "/app.js"). That caused issues of it's own. Namely, that the app did not install properly. After some debugging, I realized that no dot or slash is the appropriate way to go, with one exception - in the cachedAssets array, the first entry is just "./" nothing else.

I got the app working in its own project site and I'm very happy with it.