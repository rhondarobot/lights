var five = require('johnny-five'),
    board = new five.Board(),
    Matrix8x8 = require('node-led').Matrix8x8;
 
board.on('ready', function() {
  console.log('Connected to Arduino, ready.');
 
  var opts = {
    address: 0x70
  };
 
  var matrix = new Matrix8x8(board, opts);
 
  var star = [
    0b00001000,
    0b00001000,
    0b01110111,
    0b00011100,
    0b00110110,
    0b01000001,
    0b00000000,
    0b00000000
  ];
 
  matrix.drawBitmap(star);

  // var matrix = new Matrix8x8(board, opts);
 
  // var apple = [
  //   0b00010000,
  //   0b01111110,
  //   0b10000010,
  //   0b01000010,
  //   0b10000010,
  //   0b10000010,
  //   0b01000010,
  //   0b00111100
  // ];
 
  // matrix.drawBitmap(apple);
 
});