module.exports = function(context) {
    return {
        "Program": function(node) {
            var source = context.getSourceCode().getText(node);
            if (source.length > 600 && source.length < 650) {
                context.report(node, "This wont be an inline function.");
            }
        }
    };
};

module.exports.schema = [];
