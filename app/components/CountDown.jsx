var React = require('react');
var Clock = require('Clock');

var CountDown = () => {
  return (
    <div >
        <Clock totalSeconds={129}></Clock>
    </div>
  );
};

module.exports = CountDown;
