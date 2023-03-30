# Survey Minor Web Development ✔

This project is a survey for students who participated in the Minor in Web Development and is focused on web accesibility. The goal of this survey is to provide teachers with insight into how students experienced the minor and its different subjects and to make the survey accesible for everyone.

- It is important to note that this survey has no back-end and is therefore not fully functional. It is simply a concept and a project for the subject 'Browser Technologies' in the Minor in Web Development.

## Problems

- smthn about accesibility
- think of the features thing

* Keyboard friendly:

* Adjusting font-size:

* Color blindness:

* Custom fonts: The reason why people usually come to your page is to see its content. A huge part of a page content is usually the text, so if the text fails to load or it takes too long to load, chances are that your users will leave the page.

## Solutions

- functional, reliable, usable, pleasurable

* Keyboard friendly:

* Adjusting font-size:

* Color blindness:

* Custom fonts: To address the issue of text failing to load or taking too long to load, a fallback font can be used. The fallback font will load first, and once the custom font has been loaded, the browser will display the custom font. Another thing you can do is import your font with priority, so it will be one of the first things that gets imported into your projct. This just makes your website more reliable and usable to use.

## ReadMe

- [x] description of project
- [] problem description -
- [] solution to problem (functional/reliable, usable, pleasurable) -
- [] code explanation -

## Features

- The survey is keyboard friendly. ❌

- You can adjust the font-size. ❌

- There is a high enough contrast. People with color blindness are able to fill in the survey. ❌

- There is a light mode & a dark mode ❌

- Custom font is imported with priortity ❌
- Custom font has a fallback font, in case the font fails or takes too long to load ❌

- The features work in all browsers ❌

* [] Explain feature detection
* [] think of fallbacks
* [] features work in all browsers

## User experience

- [] contrast / color blindness
- [] fallback font
- [] font priority imported
- [] adjust font-size
- [] keyboard friendly
- [] uses of affordance
- [] feedback for interactive elements
- [] look at other principles

## Progressive enhancement ✔

Progressive enhancement is a design approach where a website should work on all browsers and devices with all its basic functionalities. Please look at the 'core functionalities' and 'features' that are necessary for my project, specifically regarding surveys and accessibility.

## Core functionalities of the survey ✔

Surveys are used to gain knowledge. I made a list of this survey's core functionalities to help me decide which features to add. The core functionalities of this survey are:

1. Being able to fill in your personal information, such as your name and your student ID.
2. Being able to fill in forms for different subject.
3. Being able to fill in who your teachers were in each subject.
4. Being able to choose which semester you followed the minor.
5. Being able to rate the subject from 1 to 10.
6. Being able to rate the lectures from 1 to 10.
7. Being able to rate your personal understanding of the subject from 1 to 10.
8. Being able to submit your form.
9. Being able to see user feedback, when the user needs feedback (e.g. when something isn't filled in, but needs to be filled in).
10. Being able to see your progress when filling in the form.
11. Being able to use the form when Javascript is turned off.
12. Being able to use the form when CSS is turned off.

## Process

In this section, I will talk about the process of this whole project.

### Sketching

For this survey, I started with sketching out my form and thinking how I wanted the questions to be grouped or split up, with the thought of progressive disclosure. Here you can see my sketches below:

[SKETCHES]

- [] wireflow sketch or breakdown sketch
- [] thought about psuedo classes

# Back-end notes

This section will cover all the information that the developer working on the back-end of this survey needs to know.

## Multiple submit buttons

During this survey I have multiple submit buttons, that also serve as button to go to the next or previous part of the survey. Once the user clicks on next on the first part of the form, a new document within the database is created with the information that the user filled in. This is done with a `POST` request via the `a` tag.

Aditionally an user ID has been created within this document. This user ID is automatically generated and unique for every user. We need this user ID so we can reference back to the same document whenever the user submits other parts of the form with the `a` tag.

Once the user goes back to a previous part in the form, the data is taken from the database to display what the user had previously filled in. All we want to do is that the user is able to update or change this information. When clicking on the next button, a `PUT` request is made to update the data of the user. This `PUT` request is only made when data of the user already exists in a certain input field. Otherwise is will be a `POST` request, like I explained earlier.

# Code explanation

# License ✔

This project is licensed under the MIT License. See the LICENSE file for more details.
