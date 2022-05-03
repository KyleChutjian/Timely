const recipes = [
            { id:1,
			        name: 'Pasta al Pesto',
              type: 'Italian',
              summary: 'A quick and simple dish for any Italian household.' },
            { id:2,
			        name: 'Garlic Chicken',
              type: 'Thai',
              summary: 'A quick and simple chicken dish for any Thai table.' },
            { id:3,
			        name: 'Garlic Broccoli',
              type: 'Chinese',
              summary: 'Healthy and full of flavour, a simple dish.' },
            { id:4,
			        name: 'Black Pepper Beef',
              type: 'Chinese',
              summary: 'Delicious and rich in flavour. A Chinese classic.' }
        ];
export function getRecipes() {
  return recipes;
}
