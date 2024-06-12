import React, { useState } from "react";
import Project from "./Project";
import { useEffect } from "react";

function Projects() {
    const [project_list, setProjectList] = useState([])

    useEffect(() => {
        const temp_list = []

        temp_list.push({
            name: "Kappa",
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7db34de8-7b56-465c-b2f4-0b46c1be1e95/de1rj44-b1af1880-9283-4ce0-8c0b-6b0b6eeb4197.jpg/v1/fill/w_1280,h_720,q_75,strp/chungus_evelution_by_lolwutxoxo_de1rj44-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvN2RiMzRkZTgtN2I1Ni00NjVjLWIyZjQtMGI0NmMxYmUxZTk1XC9kZTFyajQ0LWIxYWYxODgwLTkyODMtNGNlMC04YzBiLTZiMGI2ZWViNDE5Ny5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.U90ICP3Nc1-GWonQ2v1AhsA517lbNevRrya6Y3wmEcg"
        })
        temp_list.push({
            name: "Kappa",
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7db34de8-7b56-465c-b2f4-0b46c1be1e95/de1rj44-b1af1880-9283-4ce0-8c0b-6b0b6eeb4197.jpg/v1/fill/w_1280,h_720,q_75,strp/chungus_evelution_by_lolwutxoxo_de1rj44-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvN2RiMzRkZTgtN2I1Ni00NjVjLWIyZjQtMGI0NmMxYmUxZTk1XC9kZTFyajQ0LWIxYWYxODgwLTkyODMtNGNlMC04YzBiLTZiMGI2ZWViNDE5Ny5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.U90ICP3Nc1-GWonQ2v1AhsA517lbNevRrya6Y3wmEcg"
        })
        temp_list.push({
            name: "Kappa",
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7db34de8-7b56-465c-b2f4-0b46c1be1e95/de1rj44-b1af1880-9283-4ce0-8c0b-6b0b6eeb4197.jpg/v1/fill/w_1280,h_720,q_75,strp/chungus_evelution_by_lolwutxoxo_de1rj44-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvN2RiMzRkZTgtN2I1Ni00NjVjLWIyZjQtMGI0NmMxYmUxZTk1XC9kZTFyajQ0LWIxYWYxODgwLTkyODMtNGNlMC04YzBiLTZiMGI2ZWViNDE5Ny5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.U90ICP3Nc1-GWonQ2v1AhsA517lbNevRrya6Y3wmEcg"
        })

        setProjectList(temp_list)
    }, []);
    
    return(
        <div>
            <div className="projects" id="b">
                {project_list.map(item => (
                    <Project item={item} />
                ))}
            </div>
            <div className="projects-summary">
                <span className="text">These are my favourite projects and I'm really proud of them</span>
            </div>
        </div>
    )
}

export default Projects;