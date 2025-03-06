import DashBoard from "./views/DashBoard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";


const navigationTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: DashBoard },
        { path: "/posts", view: Posts },
        { path: "/settings", view: Settings },
    ];

    // Test each route for potential match
    const potentialMatchs = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path,
        };
    });

    let match = potentialMatchs.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true, // Default to the first route if no match is found
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigationTo(e.target.href);
        }
    });
    router();
});
