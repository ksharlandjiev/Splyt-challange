const parseFunction = require('parse-function')

function defaultArguments(wrapped, decoreatedArgs) {
  try {
      const app = parseFunction({
          ecmaVersion: 2017
      });
      const parsed = app.parse(wrapped);  
      const params = [];
      parsed.args.forEach( (p, i) => {        
          params.push( decoreatedArgs && decoreatedArgs[p] && p + '=' + decoreatedArgs[p] || p )
      })  
      
      return new Function(...params, parsed.body);

    }
    catch(err) {
      console.error('Failed to parse function ', wrapped);
    }
}

module.exports = defaultArguments;