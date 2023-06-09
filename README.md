# What is the issue we get?

-  We are facing a very complicated issue with chart performance.
-  We have 14 serial data on the chart (5761 data points/serial data).
-  Our app performance is running very well on the local (Local is a developer's laptop - Macbook PRO - M1 MAX - 64GB RAM). But supper lagging on the server.
-  So, we try to reproduce that issue on my local and get the same performance issue.

==> To reproduce it on your side, please follow step by steps below.

## Step by step to test this project

1. Pull this repository to your local

2. Open this project and run `yarn install`

3. Compare the build with the local start (need run on 2 terminals)
   a. Terminal 1: run `yarn build` -> wait for that build (5-10 mins) and run `npx serve -s build` -> the app will on localhost:3000
   b. Terminal 2: run `yarn start` -> the app will ask you to let it run on another port (port 3000 is already used for terminal 1 above) -> choose `yes` -> app will immediately launch on localhost:3001 (or another port which you can set)
   c. Now you can open 2 browser tabs: localhost:3000 vs localhost:3001 to compare those chart performance

For more information:

-  The build process is compile our code into the javascript bundle and using inside of the docker, server using that docker image to run our app.
-  The start process is just compile and running on local.

### Node18-Issue: To run `yarn build` and `yarn start` on Node 18 (recommend version on this project is Node 16)

1. For Windows, use the below command in cmd:
   `set NODE_OPTIONS=--openssl-legacy-provider`

   For Unix/MAC, use:
   `export NODE_OPTIONS=--openssl-legacy-provider`

2. In package.json
   Change: "start": "react-scripts start" --> "start": "react-scripts --openssl-legacy-provider start"

-  Preferences: https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported

### Remove `--openssl-legacy-provider` if you are using Node under 18

#### How to run SciChart on your local

Each developer can use this key to activate the software on their development machine(s).

1. Create an account with EOG email address at http://scichart.com/login
2. Download and install SciChart WPF Installer v4 (must be run on your local)
3. Windows Start Menu -> Type SciChart Licensing Wizard -> Start the wizard
   Select ‘I would like to Activate a License Via the Internet’
   Enter your www.scichart.com Username (not email), Password and Serial Key. Serials can be found at www.scichart.com/profile or in your LicenseCertificate Email.

Serial Key: 7507a833-a8e0-4227-ba53-8df7a3de0442

5. Click ‘Activate’ to claim your license
