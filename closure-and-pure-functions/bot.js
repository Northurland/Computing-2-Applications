// This is a example of the module pattern
// where you use closure to create a 'class-like'
// object with its private properties and methods.

/* const module = function () {
    let privateProperty = "foo";
    function privateMethod(args) {
        // do something
    }

    return {
        publicProperty: "",
        publicMethod: function(args){
            // do something
        },
        privilegedMethod: function(args) {
            privateMethod(args);
        }
    };
} */

// here is a more practical example

const bot = function () {
    const status = {
    // private properties
        energyPoint: 10,
        location: [0, 0, 0]
    };

    const rescueTargets = {
    // private properties
        "pool": [1, 1, 1],
        "school":[0, 2, 0],
        "tower": [1, 0, 2]
    };

    const useEnergy = function (amt) {
    // private method that can get access to private properties
        status.energyPoint -= amt;
        if (status.energyPoint <= 0) {
            console.log("out of energy");
            status.energyPoint = 0;
        } else if (status.energyPoint >= 10) {
            console.log("Fully charged Now");
            status.energyPoint = 10;
        } else {
            console.log(status.energyPoint);
        }
    };

    const relocate = function (coordinates) {
    // private method that updates the bot location status
        status.location = coordinates;
        console.log(status.location);
    };

    const getCoordinates = function (arr) {
        let coordinates = [];
        arr.forEach((x) => {
            coordinates.push(x);
        });
        return coordinates;
    };

    return {
    // these are public properties and methods
        checkStatus: function () {
        // public method to log status
            return status;
        },

        newTargets: function(target, coordinates){
        // public method to set a new rescue target
            rescueTargets[target] = coordinates;
            return rescueTargets;
        },

        rescue: function() {
        // priviledged methods can calls a private method to
        // manipulate the private property
            useEnergy(3);

            // implement your own code to remove the rescue target
            // after the rescue common is called
        },

        recharge: function () {
        // priviledged methods can calls a private method to
        // manipulate the private property
            useEnergy(-5);
        },

        currentLocation: function () {
        // priviledged method that will access private methods
            return console.log(getCoordinates(status.location));
        },

        moveTo: function (coordinates) {
        // takes an array [x,y,z] and update the Bot status
        // the bot will move to the input coordinates
        // and consume energy point equal to shortest distance traveled
            const now = getCoordinates(status.location);
            /* const x1 = coordinates[0];
            const y1 = coordinates[1];
            const z1 = coordinates[2];
            const distance = ((x1-now[0])**2 + (y1-now[1])**2 + (z1-now[2])**2) ** 0.5; */
            let distanceSqure = 0;
            coordinates.forEach((axis, i) => {
                distanceSqure += (axis - now[i])**2;
            });
            relocate(coordinates);
            useEnergy(distanceSqure**0.5);
        }
    };
};

export default Object.freeze(bot);