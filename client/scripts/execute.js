function runCode(){
    Blockly.JavaScript.addReservedWords('code');
    var code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());

    try {
        //eval(code);
        
        // passed the test, now what...
        alert(code);
       
    } catch (e) {
        // failed so show the error
        alert(e);
    }
    
}