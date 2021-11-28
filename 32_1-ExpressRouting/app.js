const express = require('express');
const ExpressError = require('./expressError')

const app = express();

app.get('/mean', (req, resp, next) => {
    try {
        const mean = {operation: "mean"};
        if (!('nums' in req.query)) {
            throw new ExpressError(`nums are required`, 400);
        }
        let nums = req.query.nums.split(',');
        let sum = 0;
        for (let n of nums) {
            let num = parseFloat(n);
            if (!num) {
                throw new ExpressError(`"${n}" is not a valid number.`, 400);
            }
            sum += parseFloat(num);
        };
        mean.value = sum/nums.length;
        return resp.json(mean);
    } catch (e) {
        next(e);
    };
});

app.get('/median', (req, resp, next) => {
    try {
        const median = {operation: "median"};
        if (!('nums' in req.query)) {
            throw new ExpressError(`nums are required`, 400);
        };
        let nums = req.query.nums.split(',');
        for (let n of nums) {
            let num = parseFloat(n);
            if (!num) {
                throw new ExpressError(`"${n}" is not a valid number.`, 400);
            }
        };
        let halfway = (nums.length-1)/2;
        if (halfway % 2 !== 0) {
            let i = parseInt(halfway);
            let value = (parseFloat(nums[i]) + parseFloat(nums[i+1])) / 2;
            median.value = value;
        } else {
            median.value = nums[halfway];
        };
        return resp.json(median);
    } catch(e) {
        next(e);
    };
});

app.get('/mode', (req, resp, next) => {
    try {
        const mode = {operation: "mode"};
        if (!('nums' in req.query)) {
            throw new ExpressError(`nums are required`, 400);
        }
        let nums = req.query.nums.split(',');
        nums.sort();
        let highest = 1;
        let count = 1;
        let modes = nums[0];
        for (let i=1; i<nums.length; i++) {
            if (nums[i] === nums[i-1]) {
                count ++;

                if (count > highest) {
                    highest = count;
                    modes = nums[i];
                } else if (count === highest) {
                    modes += `,${nums[i]}`
                };
            } else {
                count = 1;
            };
        };
        mode.value = modes;
        return resp.json(mode);
    } catch (e) {
        console.log(e);
        next(e);
    };
});f

app.use((req, res, next) => {
    console.log("four-uh-oh-four");
    const e = new ExpressError("invalid URL", 404);
    next(e);
});

app.use((err, req, resp, next) => {
    const status = err.status || 500;
    const msg = err.msg || "it's-not-you-it's-me error";
    return resp.status(status).send(msg);
});

app.listen(3000, () => {
    console.log('App on port 3000');
});