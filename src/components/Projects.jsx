// Component that displays recent projects, including the location, and list of accomplishments per project
function Projects() {
    return (
        <div>
            <h2>Recent Projects</h2>
            <h3>Open-Source Contributor Intern</h3>
            <p>CodeDay - Auburn, WA</p>
            <ul>
                <li>Coded automated test case for Open Energy Dashboard 
                    using TypeScript, Mocha, and Chai. </li>
                <li>Collaborated with team to set up dev environment 
                    and solved problem with deciphering developer documentation 
                    by consolidating all relevant information in a single, accessible location.</li>
            </ul>

            <h3>Review Website Development</h3>
            <p>Green River - Auburn, WA</p>
            <ul>
                <li>Created Node.js application with 7 unique endpoints 
                    and functionality for posting and searching for TV show reviews.</li>
                <li>Combined back-end and front-end coding to allow interaction with a database using MariaDB.</li>
            </ul>
        </div>
    )
}

export default Projects;