module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "amd": true
    },
    "extends": [
        "plugin:vue/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parser: 'vue-eslint-parser',
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module",
        parser: "babel-eslint"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "vue/html-indent": [
            "error",
            4,
            {
                "attribute": 1,
                "closeBracket": 0,
                "alignAttributesVertically": true,
                "ignores": []
            }
        ],
        "vue/require-default-prop": 0,
        "vue/no-v-html": 0
    }
};
