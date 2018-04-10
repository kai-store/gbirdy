Phaser.Plugin.Softkey = function (parent, game) {
  Phaser.Plugin.call(this, parent, game);
};
Phaser.Plugin.Softkey.prototype = Object.create(Phaser.Plugin.prototype);
Phaser.Plugin.Softkey.prototype.constructor = Phaser.Plugin.SamplePlugin;

Phaser.Plugin.Softkey.prototype.listener = function (arg) {
  self = this;
  window.onkeydown = function (e) {
    self._keyPress(e, arg);
  };
};

Phaser.Plugin.Softkey.prototype.init = function () {
  this.skGroup = game.add.group();
  this.lsk = game.add.text(10, game.height - 12, '', { font: '16px Arial', fill: '#ffffff' });
  this.csk = game.add.text(game.world.centerX, game.height - 12, '', { font: '16px Arial', fill: '#ffffff' });
  this.rsk = game.add.text(190, game.height - 12, '', { font: '16px Arial', fill: '#ffffff' });
  this.adjustMargin();
}
Phaser.Plugin.Softkey.prototype.adjustMargin = function (arg) {
  this.lsk.x = 10 + this.lsk.width / 2;
  this.lsk.anchor.setTo(0.5);

  this.csk.anchor.setTo(0.5);

  this.rsk.anchor.setTo(0.5);
  this.rsk.x = game.width - 10 - this.rsk.width / 2;
}
Phaser.Plugin.Softkey.prototype.config = function (arg) {
  if (!arg) {
    return;
  }
  if (arg.lsk) {
    this.lsk.text = arg.lsk;
    this.lsk.font = game.customConfig.fontStyle.font;
    this.lsk.fill = arg.fontColor || "#FFFFFF";
    this.lsk.fontSize = arg.fontSize || game.customConfig.fontStyle.fontSize;
    this.skGroup.add(this.lsk);
  }
  if (arg.csk) {
    this.csk.text = arg.csk;
    this.csk.font = game.customConfig.fontStyle.font;
    this.csk.fill = arg.fontColor || "#FFFFFF";
    this.csk.fontSize = arg.fontSize || game.customConfig.fontStyle.fontSize;
    this.skGroup.add(this.csk);
  }

  if (arg.rsk) {
    this.rsk.text = arg.rsk;
    this.rsk.font = game.customConfig.fontStyle.font;
    this.rsk.fill = arg.fontColor || "#FFFFFF";
    this.rsk.fontSize = arg.fontSize || game.customConfig.fontStyle.fontSize;
    this.skGroup.add(this.rsk);
  }
  this.adjustMargin();

  return this.skGroup;
};


Phaser.Plugin.Softkey.prototype._keyPress = function (e, arg) {
  switch (e.key) {
    case 'SoftLeft':
      arg.softLeft();
      break;
    case 'Enter':
      arg.enter();
      break;
    case 'SoftRight':
      arg.softRight();
      break;
    case 'Backspace':
      if(arg.backspace){
        e.preventDefault();
        e.stopImmediatePropagation();
        arg.backspace();
      }
      break;
      case 'EndCall':
        if(arg.endCall){
          e.preventDefault();
          e.stopImmediatePropagation();
          arg.endCall();
        }
      break;
  }
  this._debug(e.key, arg);
};

/***
*TODO: debugMode = boolean, SoftLeft = 1, SoftRight = 2
*/
Phaser.Plugin.Softkey.prototype._debug = function (key, arg) {
  // if (game.customConfig.debug) {
  //   console.log('args ', arg);
  //   console.log('key ', key);
  //   switch (key) {
  //     case '1':
  //       arg.softLeft();
  //       break;
  //     case '2':
  //       arg.softRight();
  //       break;
  //     case 'Escape':
  //       arg.endCall();
  //     break;
  //   }
  // }
};