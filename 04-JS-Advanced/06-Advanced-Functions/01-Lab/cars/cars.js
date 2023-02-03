function cars(array) {
    const inheritance = {};
    const obj = {
        store: {},
        create: (name, command2 = undefined, name2 = undefined) => {
            if (command2 === undefined) {
                obj.store[name] = {}
            } else {
                obj.store[name] = JSON.parse(JSON.stringify(obj.store[name2]))
                obj.addInheritance(name, name2)
            }
        },
        addInheritance: (name, parentName) => {
            inheritance[name] = parentName;
        },
        inheritFor: (name) => {
            let parentName = inheritance[name];
            let origName = name;
            let origParent = parentName;
            while (inheritance.hasOwnProperty(parentName)) {
                name = parentName;
                parentName = inheritance[parentName];
                obj.inherit(name, parentName)
            }
            obj.inherit(origName, origParent);

        },
        inherit: (name, parentName) => {
            for (const key in obj.store[parentName]) {
                obj.store[name][key] = obj.store[parentName][key];
            }
        },
        set: (name, key, value) => {
            obj.store[name][key] = value;
        },
        print: (name) => {
            obj.inheritFor(name)
            string = '';
            for (const key in obj.store[name]) {
                string += `${key}:${obj.store[name][key]},`
            }
            string = string.slice(0, -1);
            console.log(string)
        }
    };
    array.forEach(row => {
        const [command, name, command2, name2] = row.split(' ');
        obj[command](name, command2, name2)
    });
}

// cars(['create c1',
//     'create c2 inherit c1',
//     'set c1 color red',
//     'set c2 model new',
//     'print c1',
//     'print c2']
// );
cars(['create pesho',
    'create gosho inherit pesho',
    'create stamat inherit gosho',
    'set pesho rank number1',
    'set gosho nick goshko',
    'print stamat']
);


// store = {
//     c1: {
//         key: value
//     }
// }