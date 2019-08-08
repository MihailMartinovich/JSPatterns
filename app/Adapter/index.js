import {
  AdapterSorter,
  NewSorter,
  OldSorter,
} from './Classes/index.js';
import sortTypes from './Constants/sortTypes.js';

const runAdapterExample = () => {
  const testArray = [1, 6, 4, 8, 2, 5, 1, 3];

  console.log('Initial array:', testArray);

  const newSorter = new NewSorter();
  const oldSorter = new OldSorter();
  const adapterSorter = new AdapterSorter();

  console.log('Old Sorter ASC: ', oldSorter.sort(testArray, sortTypes.ASC));
  console.log('Old Sorter DESC: ', oldSorter.sort(testArray, sortTypes.DESC));

  console.log('New Sorter ASC: ', newSorter.sortAsc(testArray));
  console.log('New Sorter DESC: ', newSorter.sortDesc(testArray));

  console.log('Adapter Sorter ASC: ', adapterSorter.sort(testArray, sortTypes.ASC));
  console.log('Adapter Sorter DESC: ', adapterSorter.sort(testArray, sortTypes.DESC));
}

export default runAdapterExample;