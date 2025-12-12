/*
We are given an array asteroids of integers representing asteroids in a row. The indices of the asteroid in the array represent their relative position in space.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
*/

function asteroidCollision(asteroids) {
    const stack = [];

    for (let a of asteroids) {
        // If 'a' is positive, or stack is empty, or top of stack is negative (moving left),
        // then 'a' cannot collide with anything on the stack -> push.
        if (a > 0) {
            stack.push(a);
            continue;
        }

        // a is negative: it may collide with right-moving asteroids on stack
        let alive = true; // does 'a' survive after collisions?
        while (alive && stack.length > 0 && stack[stack.length - 1] > 0) {
            const top = stack[stack.length - 1];
            if (Math.abs(top) < Math.abs(a)) {
                // top explodes; pop and continue checking earlier right-moving asteroids
                stack.pop();
                continue;
            } else if (Math.abs(top) === Math.abs(a)) {
                // both explode: remove top, and 'a' also destroyed
                stack.pop();
                alive = false;
                break;
            } else {
                // top is larger; 'a' explodes
                alive = false;
                break;
            }
        }

        if (alive) {
            // either stack empty / top <= 0 (no right-moving asteroid to collide)
            stack.push(a);
        }
    }

    return stack;
}
