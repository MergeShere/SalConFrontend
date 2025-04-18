type Props = {
    rating: number; // Rating out of 5
    testimony: string;
    image: string; // URL of the person's image
    name: string;
    role: string; // Role of the person, e.g., "Customer"
};

export default function TestimonialCard({ rating, testimony, image, name, role }: Props) {
    return (
        <div className="w-full max-w-md border border-gray-300 p-6 rounded-lg flex flex-col gap-4">
            {/* Rating at the top */}
            <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                ))}
            </div>

            {/* Testimony below rating */}
            <p className="text-sm text-gray-700">{testimony}</p>

            {/* Image + Name + Role section */}
            <div className="flex items-center gap-4 mt-2">
                <img src={image} alt={name} className="w-12 h-12 rounded-full" />
                <div>
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="text-sm text-gray-500">{role}</p>
                </div>
            </div>
        </div>
    );
}