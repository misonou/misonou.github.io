import { countriesOptions } from "src/data/examples/countries";

export const choiceItems = [
    { value: 'dataOne', label: 'Countries' },
    { value: 'dataTwo', label: 'User data' },
    { value: 'custom', label: 'Custom' },
];

export const data = {
    dataOne: {
        expression: 'countries where [ value ^= A ]',
        input: { countries: countriesOptions },
        globals: {}
    },
    dataTwo: {
        expression: 'user.posts map [ timestamp :date DATE_FORMAT ]',
        input: {
            "user": {
                "id": 123,
                "profile": {
                    "name": "John Doe",
                    "age": 30,
                    "preferences": {
                        "theme": "dark",
                        "notifications": true
                    }
                },
                "posts": [
                    {
                        "id": 1,
                        "content": "Hello world!",
                        "timestamp": 1672531200000
                    },
                    {
                        "id": 2,
                        "content": "Nested arrays are fun.",
                        "timestamp": 1672617600000
                    },
                    {
                        "id": 3,
                        "content": "More sample data.",
                        "timestamp": 1672704000000
                    }
                ],
                "comments": [
                    {
                        "postId": 1,
                        "text": "Great post!",
                        "timestamp": 1672534800000
                    },
                    {
                        "postId": 2,
                        "text": "Agreed.",
                        "timestamp": 1672621200000
                    }
                ]
            },
            "metadata": {
                "createdAt": 1672531200000,
                "updatedAt": 1672704000000
            }
        },
        globals: {
            DATE_FORMAT: 'yyyy-MM-dd'
        }
    },
    custom: {
        expression: '',
        input: null,
        globals: {}
    }
};
