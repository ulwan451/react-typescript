import { factory, primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';

export const db = factory({
    product: {
        id: primaryKey(faker.number.int),
        title: faker.commerce.productName,
        price: () => faker.number.float({ min: 5, max: 500, fractionDigits: 2 }),
        description: faker.commerce.productDescription,
        category: faker.commerce.department,
        image: faker.image.url,
    }
});
