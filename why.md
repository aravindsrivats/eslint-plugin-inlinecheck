### Why this plugin?

V8 engine's optimizer (Crankshaft) inlines a function if the sourcecode length is less than **600 characters (including blankspaces)** or **196 AST nodes** [crankshaft inlining] (http://jayconrod.com/posts/54/a-tour-of-v8-crankshaft-the-optimizing-compiler "crankshaft inlining").

[Reference Article] (https://top.fse.guru/nodejs-a-quick-optimization-advice-7353b820c92e "#NodeJS : A quick optimization advice") that explains how the crankshaft works.
