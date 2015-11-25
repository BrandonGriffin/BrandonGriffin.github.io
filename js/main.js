var AboutImage = React.createClass({
    render: function() {
        return <img id="personal-image-round" src="content/images/about-image.jpg" />;
    }
});

var AboutText = React.createClass({
   render: function() {
       return <div id="about-text">
                <p>Oh, hello there. How on earth did you find me? I am a web site made for, and by, Brandon Griffin.</p> 
                <p>
                    Brandon is a software engineer, halo player, and avid redditor. He also enjoys playing the drums
                    when time allows. He spends a good deal of his time tinkering with different technologies and
                    working on projects that he finds use out of. You are actually looking at one of his little projects right now.
                </p>

                <p>
                    Some more of the more basic ones can be found on his github, and in the future in the projects section of this
                    site. You can also look at his resume on the career section.
                </p>

                <p>
                    What was that? You liked what you saw on the career and projects pages? 
                    I will help you get in touch with him, just head on over to the contact page.  
                </p>
            </div>;
   } 
});

var AboutPage = React.createClass({
    render: function() {
        return <div>
                <AboutImage/>
                <AboutText />
               </div>;
    }
});
    
var CareerPage = React.createClass({
    render: function() {
        return <div>The career page</div>;
    }
});

var ProjectsPage = React.createClass({
   render: function() {
       return <div>All them projects and no time</div>;
   } 
});

var ContactPage = React.createClass({
    render: function() {
        return <div>I see you want to contact me. I am working on getting it set up</div>;
    }
});


function renderPage(page) {
    if (page === 'career') 
        ReactDOM.render(<CareerPage />, document.getElementById('content'));
    else if (page === 'projects') 
        ReactDOM.render(<ProjectsPage />, document.getElementById('content'));
    else if (page === 'contact') 
        ReactDOM.render(<ContactPage />, document.getElementById('content'));
    else
        ReactDOM.render(<AboutPage />, document.getElementById('content'));
}

renderPage('about');