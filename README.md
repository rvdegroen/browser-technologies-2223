# Survey Minor Web Development ✔

The internet is a global resource that should be accessible to everyone, regardless of their device or abilities. Unfortunately not all websites are always accesible. This subject, Browser Technologies, is all about creating inclusive and robust websites that work for all users.

This project is a survey for students who participated in the Minor in Web Development and is focused on web accesibility. The goal of this survey is to provide teachers with insight into how students experienced the minor and its different subjects and to make the survey accesible for everyone.

It is important to note that this survey does not have a backend and is not fully functional. It is merely a concept and a project developed as part of the Browser Technologies subject in the Minor in Web Development.

# License ✔

This project is licensed under the MIT License. See the LICENSE file for more details.

# Table of Contents

# Concept

Link of my live demo: https://rvdegroen.github.io/browser-technologies-2223/

Before

[Concept image](./images/concept.png)

## Process

For this form, I had a whole process. First I started out with sketches in my notebook. I looked at the requirements of the form and made sure to implement these in my sketches

[Sketch1](./images/sketch1.png)

[Sketch2](./images/sketch2.png)

[Sketch3](./images/sketch3.png)

I also made different sketches on how to display the scale from 1 to 10.

[Sketch4](./images/sketch4.png)

I also made different designs, some of which the contrast wasn't acceptable or the buttons didn't always look like buttons if I'd as a different student for testing.

These are my designs:

Design 1:

[design1](./images/design1.png)

[design2](./images/design2.png)

Design 2:

[design3](./images/design3.png)

[design4](./images/design4.png)

My third and final design:

[design5](./images/design5.png)

[design6](./images/design6.png)

## Functionalities of the concept ✔

I have the following functionalities in my concept:

1. Light mode and dark mode

   - HTML: for only HTML, I'm using `<meta name="color-scheme" content="light dark" />`
   - CSS: for my CSS, I'm using the `:has` selector and a `checkbox` input to change the color variables in my body. I'm aware that this doesn't work on Firefox for example. My fallback for this would be by using the `<meta name="color-scheme" content="light dark" />`

2. Being able to increase the font-size

   - HTML: it is not possible to change this without using CSS, so I wrote some disclaimer that it doesn't work without enabling CSS
   - CSS: I created a `checkbox` input, so that when the user clicks on it, the font-size can be increased by 20% for those who find the text difficult to read. To decrease it, they can click on the button again (after they already clicked on it to increase it).

3. High enough contrast

   - I tested with the website of Lea Verou (https://contrast-ratio.com/) what my contrast ratio is and made sure that my darkmode has a higher color contrast for those who struggle to see in lower contrasts. This ratio is above 4.5, which most websites don't even achieve.

   - I also tested with the color filters on my windows computer, to see how it would look like with different types of color blindness. I can conclude that it's still possible to see the buttons, since they're big and have different contrast levels, even if the contrast ratio isn't very high, which isn't a big issue, because it's not thin text that would not be readible.

4. Custom font

   - I downloaded my google custom and I have put these in my `fonts` folder, so that the browser doesn't needs to make request to google. I made sure to import these fonts on top of my `style.css`, just to give it a higher priority.
   - I'm also a fall-back font, in case the font fails to load or takes too long to load (which, technically, shouldn't be an issue). My custom font is Lato and as fall-back font I'm using sans-serif, because it looks a lot like Lato (unless you look at some of the numbers).

5. Keyboard friendly

- I made sure that my form is keyboard friendly to use. I used different `:focus` states in my CSS.

6. Form validation

   - My form has form validation with just HTML. I did this by using the `required` attribute for the form. I also put a `*` for required input fields. I'm aware that there are users who don't know that an \* could mean required, but since it's design pattern used in many different forms, I'm also using it.

   - I also have form validation when CSS is turned on. When something is filled in correctly

   - I also have improved form validation with Javascript.

# Core functionalities of the survey ✔

Surveys are used to gain knowledge. I made a list of this survey's core functionalities to help me decide which features to add. The core functionalities of this survey are:

1. Being able to fill in different kinds of information.
2. Being able to fill in forms for different subject.
3. Being able to see the progress you've made as an user.
4. Being able to put in a rating for different questions.
5. Get feedback when needed (when an input field is invalid, chosen choice).
6. Being able to submit your form.
7. Being able to use the form when Javascript is turned off.
8. Being able to use the form when CSS is turned off.

# Criteria of this project

1. Progressive Disclosure
2. Form validation
3. Submit data and continue
4. Show where to go back to questions
5. Show where to skip questions
6. No visible radio buttons when CSS is enabled
7. Dark & light mode
8. Being able to increase the size of text

# Testing

1. Turning off CSS
2. Turning off Javascript
3. Low internet connection
4. Turn off custom fonts
5. Color and contrast
6. Keyboard accessibility
7. Screenreader test

## Browsers

1. Chrome
2. Safari
3. Firefox
4. Samsung internet
5. PrinceXML

# Reliable, Usable & Pleasurable

It is a good practice to build your app as following:

- Reliable aka functional (HTML), usable (CSS), pleasurable (JS).

I already mentioned the core functionalities of the form, but I just want to adress again the most important functionalities:

The most important functionalities of the form are that the user is able to input their information and to submit this information. It's also important that the user receives feedback when filling in this information and also when they filled in something that was "wrong" or "invalid". The user needs to know what they did wrong, to fix that.

## Reliable layer ✔

These are the following thins I did in my "reliable" layer (also known as "functional" or HTML).

- In the functional layer I used the `form` tag to create a form. I used different `types` of `inputs`, so the user can fill in their information.

- I also used a button with type of `submit`, so that the browser knows to submit the information. This submitting should happen in the back-end, which I will explain in my `back-end notes`.

- To be able to validate my form in this layer, I used different types of `input types`, so that a number can be filled in as a number or a checkbox as a checkbox. I also used `required` in case the user forgets to fill something in. They will get to see when this happens.

- I also grouped questions with inputs together by using `fieldset` and for questions I used `legend`.

- I used different HTML files or pages, to show a user, so I can use this as "progressive disclosure" and the user won't be overwhelmed by seeing too many questions. In order to get to the next page, I made it so that when the user `submits` the form, they will get send to the path of a specific html file that I used in the `form action=""` attribute.

- I also made it so that, depending on which theme you're using on your computer (light or dark mode), you will get to see that theme when going to this survey.

## Usable layer

These are the following thins I did in my "usable" layer (also known as CSS). In this layer, I basically "levelled up" my functional or reliable layer, to something more usable. This is when "progressive enhancement" comes into play.

Progressive enhancement is a design approach where a website should work on all browsers and devices with all its basic functionalities.

- I added custom colors to create my dark and light mode. Users are able to choose wether they want to see a dark or light mode, regardless of their device's theme color.

- I made sure that at least one of my color modes are a higher contrast version and that my light mode is acceptable if we're talking about color contrast.

- I added custom fonts as well as a fall-back font to my survey,

- I made the radio buttons "invisible" and added styling for it instead, so it looks like a button.

- I added hover states as well as focus and active states.

- I also added form validation with `:valid` and `:invalid`.

- My survey is completely responsive. You can use it on bigger screens but also smaller screens.

## Pleasurable layer

In this layer, the user will have the best user experience. In this layer Javascript is applied.

- I added localStorage so that some things can be pre-filled when filling in a similar form like this.

- I validated the form further.

# Back-end notes

This section will cover all the information that the developer working on the back-end of this survey needs to know.

## Multiple submit buttons

During this survey I have multiple anchor links, that also serve as submit button and to go to the next or previous part of the survey. Once the user clicks on the `a` tag with the next in it, on the first part of the form, a new document within the database is created with the information that the user filled in. This is done with a `POST` request via the `a` tag.

Aditionally an user ID has been created within this document. This user ID is automatically generated and unique for every user. We need this user ID so we can reference back to the same document whenever the user submits other parts of the form with the `a` tag.

Once the user goes back to a previous part in the form, the data is taken from the database to display what the user had previously filled in. All we want to do is that the user is able to update or change this information. When clicking on the next button, a `PUT` request is made to update the data of the user. This `PUT` request is only made when data of the user already exists in a certain input field. Otherwise is will be a `POST` request, like I explained earlier.

# Reflection

Things I would do differently if I had more time:

- I would have liked to add more animations or transitions, make it look extra fancy.
- I would've liked to make a progress bar with javascript that looks pretty fancy.
- Instead of explaining about the back-end, I would've liked to make one myself with mongoDB or something to save the user's data in it.
- I would've liked to improve my design because I'm not completely happy with it, but I also spent a lot of time trying to figure out what I wanted. I just wasn't sure if I could pass this subject with a different design and spent more time than I wanted trying to figure out if the contrast was okay.
