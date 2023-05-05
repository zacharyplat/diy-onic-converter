# # DIY-onic-converter!

DIY-onic is a tool that takes a css-selector and converts the 'p' tags into a more [bionic reading](https://bionic-reading.com) style text. It currently only runs locally on a staticly generated file

## Setup

1.  Clone the repository locally on your computer
2.  Install dependencies by invoking `yarn` or `npm install`
3.  Start the local web server via `yarn start` or `npm start` (`http://localhost:8080/`)
4.  Try out the function by calling it from the console of the test web page (see below)

### Testing out the function

on the console of the webpage enter the following command:

    diyOnicConverter("body");

and you should see the text transform from something like :

> The **James Webb Space Telescope** (**JWST**) is a [space
> telescope](/wiki/Space_telescope "Space telescope") designed primarily
> to conduct [infrared astronomy](/wiki/Infrared_astronomy "Infrared
astronomy"). As the largest optical telescope in space, its greatly
> improved [infrared](/wiki/Infrared "Infrared") resolution and
> sensitivity allow it to view objects too....

to:

> **The** **Jam**es **Web**b **Spa**ce **Tel**escope **(JW**ST) **is** **a** **spa**ce **tel**escope **des**igned **pri**marily **to** **con**duct **inf**rared **ast**ronomy. **As** **the** **lar**gest **opt**ical **tel**escope **in** **spa**ce, **its** **gre**atly **imp**roved **inf**rared **res**olution **and** **sen**sitivity **all**ow **it** **to** **vie**w **obj**ects **too**...
