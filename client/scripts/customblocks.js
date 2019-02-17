var arr = [];


Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "move_left",
      "message0": "Left %1",
      "args0": [
        {
          "type": "input_value",
          "name": "Left",
        },
      ],
      "args1": [
        {
          "type": "field_image",
          "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
          "width": 15,
          "height": 15,
          "alt": "*"
        }
      ],
      "previousStatement": true,
      "nextStatement": true,
      "colour": 355,
      "tooltip": "Left",
      "helpUrl": ""
    },
    {
        "type": "move_right",
        "message0": "Right %1",
        "args0": [
          {
            "type": "input_value",
            "name": "Right",
          }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": 355,
        "tooltip": "Right",
        "helpUrl": ""
      },
      {
        "type": "move_up",
        "message0": "Up %1",
        "args0": [
          {
            "type": "input_value",
            "name": "Up",
          }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": 355,
        "tooltip": "Up",
        "helpUrl": ""
      },
      {
        "type": "move_down",
        "message0": "Down %1",
        "args0": [
          {
            "type": "input_value",
            "name": "Down"
          }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": 355,
        "tooltip": "Down",
        "helpUrl": ""
      },
      {
        "type": "custom_repeat",
        "message0": "repeat %1 times",
        "args0": [
          {"type": "input_value", "name": "TIMES", "check": "Number"}
        ],
        "message1": "do %1",
        "args1": [
          {"type": "input_statement", "name": "DO"}
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 355
      }
  ]);
  
  Blockly.JavaScript['move_left'] = function(block) {
    return "Left,";
  };

  Blockly.JavaScript['move_right'] = function(block) {
    return "Right,";
  };
  Blockly.JavaScript['move_up'] = function(block) {
    return "Up,";
  };

  Blockly.JavaScript['move_down'] = function(block) {
    //var value = Blockly.JavaScript.valueToCode(block, '')
    //var value = '5';
    return "Down,";
  };

  Blockly.JavaScript['custom_repeat'] = function(block) {
    var timesVal = Blockly.JavaScript.valueToCode(block, 'TIMES', Blockly.JavaScript.ORDER_ATOMIC);
    var doVal = Blockly.JavaScript.statementToCode(block, 'DO');
    doVal=doVal.replace(" ",'')
    //alert(doVal)
    doVal=doVal.substr(0,doVal.length-1)
    var splitVal = doVal.split(',');
    var result = '';
    splitVal[0]=splitVal[0].replace(" ","")
    //console.log(splitVal)
    //For Loop
    for(var i = 0; i< timesVal; i++)
    {
        for(var j=0; j< splitVal.length;j++)
        {
        //console.log(splitVal[j])
        result=result+splitVal[j]+","
        }
    }
    return result;

  };






/*

{
        "type": "move_down",
        "message0": "Down %1",
        "args0": [
          {
            "type": "input_value",
            "name": "Down"
          }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": 355,
        "tooltip": "Down",
        "helpUrl": ""
      }



*/





/*Blockly.Blocks['move_left'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Left")
          .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"));
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
};

Blockly.Blocks['move_right'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Right")
          .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"));
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
};

Blockly.Blocks['move_up'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Up")
          .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"));
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
};

Blockly.Blocks['move_down'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Down")
          .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
          ;
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
};*/

