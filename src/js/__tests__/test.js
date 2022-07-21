import sortingHealth from '../sortingHealth';

test('sort health in descending order', () => {
  const result = sortingHealth([
    { name: 'мечник', health: 17 },
    { name: 'маг', health: 93 },
    { name: 'лучник', health: 51 },
  ]);
  const exp = [
    { name: 'маг', health: 93 },
    { name: 'лучник', health: 51 },
    { name: 'мечник', health: 17 },
  ];

  expect(result).toEqual(exp);
});
