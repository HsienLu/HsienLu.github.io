export default function SkillCard({ name, image }) {
    return (
        <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="bg-service flex flex-col justify-center items-center rounded-2xl">
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <img className="mb-4" width="300" src={image} alt={name} />
                    <h3 className="text-primary-50 text-xl font-bold">{name}</h3>
                </div>
            </div>
        </div>
    )
}
