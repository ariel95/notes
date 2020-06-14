export function IsMobile() {
    return window.screen.width <= 600;
}

export function Site() {
    let href = document.location.pathname;
    switch (href) {
        case "/home":
            return 0;
        case "/calendar":
            return 1;
        case "/notes":
            return 2;
        case "/habits":
            return 3;
        case "/reminders":
            return 4;
        case "/task":
            return 5;
        default:
            return 0;
    }
}