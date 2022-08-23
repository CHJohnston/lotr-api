export const About = (props) => {
  return (
    <main className="full-page-view">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <h1 className="header-font">The LOTR API</h1>
            <h2>The ONE API to rule them ALL!!</h2> 
            <h3>
              This project utilizes the Lord of the Rings API. It was developed as a learning exercise to demostrate several React.js components, including:
            </h3>
            <ul className="list-group bg-color">
              <li className="list-group-item bg-color">Restful APIs</li>
              <li className="list-group-item bg-color">Custom React Hooks</li>
              <li className="list-group-item bg-color">
                Narrowing Search 
              </li>
              <li className="list-group-item bg-color">
                React Router DOM for Multiple Views
              </li>
              <li className="list-group-item bg-color">
                Integration of Bootstrap
              </li>
            </ul>
            <p>
              The LOTR API was selected because its documentation was written
              especially for new developers and easily understood. You can find
              out more at {" "}
              <a 
                href="https://the-one-api.dev/"
                target="_blank"
                rel="noreferrer"
              >
                the-one-api
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
