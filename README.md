## Synopsis

Rather a stupid lib for specific need. It executes callbacks based on time given.
You define time in minutes, last given callback is executed when time runs out. 
Others will be executed by pow(2, index). So if there's two functions, and you give
10 minutes, first function is executed when 5 minutes is passed. Last one after 10 minutes
has passed. etc.

## Code Example

  timer.time(10, [function(time left in seconds or minutes) {...}, function(..) {..}, ...]);

## Motivation

Quite fine, thank you.

## Tests

run
  make test

## License

None. Just do what you want
