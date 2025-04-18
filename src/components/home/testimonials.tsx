import TestimonialCard from "../shared/testimonialCard";

export default function Testimonials() {
    return (
        <div className="custom-container">
            <h1 className="text-center text-text-dark-clr font-poppins font-medium text-4xl leading-none tracking-normal">
                What our{" "}
                <span className="text-primary text-2xl font-light font-dancing relative top-[-6px] italic">
                    Clients
                </span>{" "}
                say
            </h1>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        rating={testimonial.rating}
                        testimony={testimonial.testimony}
                        image={testimonial.image}
                        name={testimonial.name}
                        role={testimonial.role}
                    />
                ))}
            </section>
        </div>
    );
}

const testimonials = [
    {
        rating: 5,
        testimony: "This is the best service I've ever used! Highly recommend.",
        image: "https://picsum.photos/seed/john/150/150",
        name: "John Doe",
        role: "Customer",
    },
    {
        rating: 2,
        testimony: "Very good experience, but there's room for improvement.",
        image: "https://picsum.photos/seed/jane/150/150",
        name: "Jane Smith",
        role: "Customer",
    },
    {
        rating: 5,
        testimony: "It's okay, but I've seen better.",
        image: "https://picsum.photos/seed/bob/150/150",
        name: "Bob Johnson",
        role: "Customer",
    },
];