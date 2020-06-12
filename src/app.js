const {Button, TextView, contentView} = require('tabris');

new Button({
  centerX: true, top: 100,
  text: 'Show message'
}).onSelect(() => {
  const msg = 'typeof: ' + typeof(Media);
  textView.text = msg;
}).appendTo(contentView);

const textView = new TextView({
  centerX: true, top: 'prev() 50',
  font: '24px'
}).appendTo(contentView);
