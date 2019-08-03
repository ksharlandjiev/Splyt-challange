const parseFunction = require('parse-function')

function defaultArguments(wrapped, decoreatedArgs, ecmaVersion = 2017) {
  try {
      const app = parseFunction({
          ecmaVersion: ecmaVersion
      });
      const parsed = app.parse(wrapped);  
      const params = [];
      parsed.args.forEach( (p) => {        
        params.push( 
            decoreatedArgs && decoreatedArgs[p] && p + '=' + decoreatedArgs[p] || 
            parsed.defaults &&  parsed.defaults[p] && p+ '='+  parsed.defaults[p] || 
            p 
        )
      })  
      return new Function(...params, parsed.body);

    }
    catch(err) {
      console.error('Failed to parse function ', wrapped);
    }
}

module.exports = defaultArguments;