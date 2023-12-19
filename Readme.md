# Description
It's a small project to show how to reproduce a Safari errors:
1. "null is not an object (evaluating ‘window.localStorage.setItem’)".
2. Can't close the window since it was not opened by JavaScript.

## How to reproduce the bug "null is not an object (evaluating ‘window.localStorage.setItem’)".
You can see this error in monitoring systems when Safari user open your site, then JS tries to access to localStorage(in some async function, for example, it might be a request to backend) and simultaneously JS close the window.
It's a floating bug. Sometimes you can get error  "BadRequestError: request aborted..."
You can get this error when users are redirected to another service to link a integration, then user was redirected back to your app and JS tried to access to localStorage and immediately  close the window.

## How to reproduce the bug.
1. Clone this repo
2. Run `npm install`
3. Run `npm run start:app`
4. RUn `npm run start:integrationApp`
5. Open http://localhost:8080/ in Safari
6. Click on the button "to integration".
7. Click on the button "to the main page".
8. You will see the error "null is not an object (evaluating ‘window.localStorage.setItem’)" or "BadRequestError: request aborted..." in the console of command start:app.


## One more interesting Safari bug "Can't close the window since it was not opened by JavaScript".
You can reproduce this bug in the following way:
1. Open http://localhost:8080/?asyncRedirectToIntegration=true in Safari.
2. Click on the button "to integration".
3. Click on the button "to the main page".
4. Open Safari console.
5. To reproduce this bug again you should come back to the main page, reload it and repeat steps 2-4. Reloading of the page is necessary to reproduce the bug again!

Also, if you open new session add open http://localhost:8080/?asyncRedirectToIntegration=true in Safari, you will stay on the page and see the button in Address bar to open the integration page.



