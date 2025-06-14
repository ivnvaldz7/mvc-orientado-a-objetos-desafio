import minimist from 'minimist';
import { ContactsController, ContactsControllerOptions } from './controllers';

function parseArgs():ContactsControllerOptions {
  const args = minimist(process.argv.slice(2), {});
  const {action,_,...params} = args;
  return{action, params};
}


function main() {
  const options = parseArgs();
  const controller = new ContactsController();    
  const result = controller.processOptions(options);
  console.log(result);
}
main();