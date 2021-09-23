
const IP = 'localhost';
const PORT = '50541';

const CTRL_C = '\u0003';
const MOVE_UP = 'Move: up';
const MOVE_LEFT = 'Move: left';
const MOVE_DOWN = 'Move: down';
const MOVE_RIGHT = 'Move: right';
const SAY_HI_SNAKES = 'Say: Hi Snakes';
const SAY_BYE_SNAKES = 'Say: Bye Snakes';
let KEY_TO_SERVER_MSG_MAP = {
  'w': MOVE_UP,
  'a': MOVE_LEFT,
  's': MOVE_DOWN,
  'd': MOVE_RIGHT,
  'W': MOVE_UP,
  'A': MOVE_LEFT,
  'S': MOVE_DOWN,
  'D': MOVE_RIGHT,
  '\u001B\u005B\u0041': MOVE_UP, // up arrow
  '\u001B\u005B\u0044': MOVE_LEFT, // left arrow
  '\u001B\u005B\u0042': MOVE_DOWN, // down arrow
  '\u001B\u005B\u0043': MOVE_RIGHT, // right arrow
  'h': SAY_HI_SNAKES,
  'H': SAY_HI_SNAKES,
  'b': SAY_BYE_SNAKES,
  'B': SAY_BYE_SNAKES
};

module.exports = {
  IP,
  PORT,
  KEY_TO_SERVER_MSG_MAP,
  CTRL_C
};