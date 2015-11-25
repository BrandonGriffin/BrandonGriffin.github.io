var AboutImage = React.createClass({
    displayName: "AboutImage",

    render: function () {
        return React.createElement("img", { id: "personal-image-round", src: "content/images/about-image.jpg" });
    }
});

var AboutText = React.createClass({
    displayName: "AboutText",

    render: function () {
        return React.createElement(
            "div",
            { id: "about-text" },
            React.createElement(
                "p",
                null,
                "Oh, hello there. How on earth did you find me? I am a web site made for, and by, Brandon Griffin."
            ),
            React.createElement(
                "p",
                null,
                "Brandon is a software engineer, halo player, and avid redditor. He also enjoys playing the drums when time allows. He spends a good deal of his time tinkering with different technologies and working on projects that he finds use out of. You are actually looking at one of his little projets right now."
            ),
            React.createElement(
                "p",
                null,
                "Some more of the more basic ones can be found on his github, and in the future in the projects section of this site. You can also look at his resume on the career section."
            ),
            React.createElement(
                "p",
                null,
                "What was that? You liked what you saw on the career and projects pages? I will help you get in touch with him, just head on over to the contact page."
            )
        );
    }
});

var AboutPage = React.createClass({
    displayName: "AboutPage",

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(AboutImage, null),
            React.createElement(AboutText, null)
        );
    }
});

var CareerPage = React.createClass({
    displayName: "CareerPage",

    render: function () {
        return React.createElement(
            "div",
            null,
            "The career page"
        );
    }
});

var ProjectsPage = React.createClass({
    displayName: "ProjectsPage",

    render: function () {
        return React.createElement(
            "div",
            null,
            "All them projects and no time"
        );
    }
});

var ContactPage = React.createClass({
    displayName: "ContactPage",

    render: function () {
        return React.createElement(
            "div",
            null,
            "I see you want to contact me. I am working on getting it set up"
        );
    }
});

function renderPage(page) {
    if (page === 'career') ReactDOM.render(React.createElement(CareerPage, null), document.getElementById('content'));else if (page === 'projects') ReactDOM.render(React.createElement(ProjectsPage, null), document.getElementById('content'));else if (page === 'contact') ReactDOM.render(React.createElement(ContactPage, null), document.getElementById('content'));else ReactDOM.render(React.createElement(AboutPage, null), document.getElementById('content'));
}

renderPage('about');