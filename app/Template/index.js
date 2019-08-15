import {
  Developer,
  Manager
} from './Classes/index';

const runTemplateExample = () => {
  const dev = new Developer('Developer Robert', 15);
  const manager = new Manager('Manager Vasya', 10);

  dev.calculateSalary();
  manager.calculateSalary();
};

export default runTemplateExample;