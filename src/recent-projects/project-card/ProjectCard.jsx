const ProjectCard = ({
    title,
    description,
    image,
    achievement
}) => {
    return (
        <div className="group shadow-md rounded-[8px] overflow-hidden hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-full h-[200px]">
                <img src={image} className="w-full h-full object-cover will-change-transform group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-6">
                <h3 className="text-primary font-montserrat font-bold text-[1.5rem] md:text-[28px] mb-4">{title}</h3>
                <p className="mb-6">{description}</p>
                <span className="inline-block px-4 py-1 mt-4 text-white bg-secondary-light rounded-[4px]">{achievement}</span>
            </div>
        </div>
    )
}

export default ProjectCard;