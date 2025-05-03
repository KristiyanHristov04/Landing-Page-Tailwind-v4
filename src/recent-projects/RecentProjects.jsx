import ProjectCard from "./project-card/ProjectCard";

const RecentProjects = () => {
    return (
        <section className="p-20 bg-white" id="projects">
            <h3 className="text-center text-[40px] font-montserrat font-bold mb-2">Recent Projects</h3>
            <div className="w-16 h-1 rounded-full bg-secondary mx-auto mb-12"></div>
            <div data-aos="zoom-in" data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <ProjectCard 
                    title="Pacific Cleanup Initiative"
                    description="Removing plastic debris from the Great Pacific Garbage Patch using advanced collection systems."
                    image="/images/project1.jpg"
                    achievement="2.5M tons removed"
                />
                <ProjectCard 
                    title="Coral Reef Restoration"
                    description="Restoring damaged coral ecosystems through debris removal and reef regeneration techniques."
                    image="/images/project2.jpg"
                    achievement="350 acres restored"
                />
                <ProjectCard 
                    title="Coastal Communities Program"
                    description="Working with local communities to prevent plastic pollution through education and infrastructure."
                    image="/images/project3.jpg"
                    achievement="125 communities served"
                />
            </div>
        </section>
    )
}

export default RecentProjects;

