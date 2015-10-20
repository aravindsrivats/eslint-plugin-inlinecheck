module.exports = function(context) {
    var DEFAULT_MIN_CHARACTERS = 600;
    var CONSIDERED_MAX_CHARACTERS = 650;

    function checkInlineAbility(node) {
        var sourceLength = context.getSourceCode().getText(node).length;
        if (sourceLength > DEFAULT_MIN_CHARACTERS && sourceLength < CONSIDERED_MAX_CHARACTERS) {
            context.report(node, "Function exceeds default limit by " + eval(sourceLength - DEFAULT_MIN_CHARACTERS) + " characters.");
        }
    };

    return {
        "FunctionDeclaration": function(node) {
            checkInlineAbility(node);
        },
        "FunctionExpression": function(node) {
            checkInlineAbility(node);
        }
    };
};

module.exports.schema = [];
