var esprima = require('esprima');

var resultObject = {
            "type": "Program",
            "body": [
                {
                    "type": "VariableDeclaration",
                    "declarations": [
                        {
                            "type": "VariableDeclarator",
                            "id": {
                                "type": "Identifier",
                                "name": "answer"
                            },
                            "init": {
                                "type": "Literal",
                                "value": 42,
                                "raw": "42"
                            }
                        }
                    ],
                    "kind": "var"
                }
            ],
            "sourceType": "script"
        }


describe("Generate AST from simple code", function () {

    //http://esprima.org/demo/parse.html

    it("AST from string code", function () {
        

        var syntax = esprima.parse('var answer = 42');

        expect(syntax).not.toBe(undefined);
        expect(syntax).toEqual(resultObject);


    });

});