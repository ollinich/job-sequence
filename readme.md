# Job Sequence Challenge

To initialise run "yarn" or "npm" then
yarn test/npm test
to run tests.

A few notes on my approach to this challenge.

I decided to go with Javascript over .Net for this challenge as the array management methods are more unfamiliar to me than C#/Linq type methods, 
and I fancied more of a challenge with that logic, and also the script execution is much faster.

I went with a red/green/refactor TDD route, as the challenge is structured in a way which nicely lends itself to this methodology,
each scenario progressively adding more scenarios to handle.
This way of writing code is a little rusty for me so it was refreshing to work in this way.

The initial few steps were very simple, with little bits of logic being added at each stage, I think the commit history shows this in a nice way.

The parts where I struggled were at scenario 5 - "returns a correctly sequenced list of jobs when provided a sequence of a jobs with multiple dependencies"
as this is where the logic for linking jobs and dependencies together really started, and on the final scenario, which I will comment on further in a moment.

I tried to keep myself within a limit of 3 hours for this, and in the end after a little break, I clocked in just over 3:30.

Some things I would've liked to have done differently, or refactored given more time:

Some of the logic in main.js could have been abstracted away into a utils file, I don't like how the cyclic check depends on having an empty array passed in first.

I wasn't too sure on the test assertions, I think they look a little messy but wanted to absolutely nail down that the tests pass each condition at each scenario

I think I should have gone with a recursive method in the end to handle the dependency string construction, and include the cyclic check in there as well, however this logic was 
added in the final scenario, and I didn't think of doing it that way in the previous, less complex scenarios.

I wasn't sure whether I should write the code to take a string seperated by newlines or to accept an array of strings, but I guess this is negligible really, I could have easily done either but in the end trying to do both just made the code a bit more confusing.

Other than that, I had a colleague review my approach after I finished to sanity check, and he understood the code without me having to explain what it was doing, so I'm fairly confident that the code is concise and readable.

