import { Command, Calendar } from './Classes/index';
import methods from './Constants/calendarMethods';

const runCommandExample = () => {
  const calendar = new Calendar(new Date());
  const command = new Command(calendar);

  command.execute(methods.SET_EVENT, 'set_event_name1');
  command.execute(methods.REMOVE_EVENT, 'set_event_name1');
  command.execute(methods.ADD_NOTIFICATION, 'add_notification_name1');
  command.execute(methods.REMOVE_NOTIFICATION, 'add_notification_name1');
};

export default runCommandExample;