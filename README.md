## Getting started

1. Install `VSCode` (https://code.visualstudio.com/)
2. Install `GitKraken` (https://www.gitkraken.com/)
3. Clone this repo using `GitKraken`. I strongly suggest using `GitKraken` for all your `git` related interactions (branching, pushing, fetching, committing, etc). I can help answer any questions you have about it, or git itself.
4. Install `nvm` and `node` (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
5. Open a terminal/command prompt
6. Verify `nvm` and `node` are installed by running `nvm -v` and `node -v` (should output the versions)
7. Run `nvm install 16` to install node version 16. By default, node will install at version 18 I believe, which sometimes causes problems.
8. Run `nvm use 16`. `nvm` stands for `node version manager`, and is a way to switch your system between versions of `node`. `node` is what `Typescript` and `Javascript` use to run locally, and enable you to use them like a back-end language. (https://www.codecademy.com/article/what-is-node)
9. Navigate to the repo folder (pro tip, opening the terminal in `VSCode` while you're in the repo will default the terminal location to the repo)
10. Run `npm i` to install all the `node modules`.
11. Run `npm start`. When you get to this step, whether the app works or not, let me know. We can pair up for a bit and go over the goals below, as well as fix whatever is broken.

## Goals for Stopwatch app

1. Should have start/stop functionality
2. Should have reset functionality
3. Should make use of whatever React hooks are needed (https://reactjs.org/docs/hooks-overview.html)(hint: `useState`, `useEffect` are ones I'd look at).
