"use strict";
const React = require("react");

const createListener = (target, type, handler, options) => {
    if (target) {
        target.addEventListener(type, handler, options);
    }
    return () => {
        if (target) {
            target.removeEventListener(type, handler, options);
        }
    };
};

// hook that passes new events of type for target
const useEvent = (target, type, options) => {
    // use placeholder Event as initial state
    const [event, setEvent] = React.useState(null);

    // only (un)register event listener once
    React.useEffect(() => createListener(target, type, setEvent, options), [
        target,
        type,
        options,
    ]);

    return event;
};

module.exports = {
    createListener,
    useEvent,
};
