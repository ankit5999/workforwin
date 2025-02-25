import { Star, StarHalf, Star as StarOutline } from "lucide-react";

interface RatingStarsProps {
    rating: number; // Pass rating as a prop
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
    const fullStars = Math.floor(rating); // Full stars count
    const hasHalfStar = rating % 1 >= 0.3 && rating % 1 <= 0.7; // Half star condition
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Empty stars count

    return (
        <div className="flex items-center gap-1">
            {[...Array(fullStars)].map((_, i) => (
                <Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
            {hasHalfStar && <StarHalf key="half" className="w-4 h-4 text-yellow-400 fill-current" />}
            {[...Array(emptyStars)].map((_, i) => (
                <StarOutline key={`empty-${i}`} className="w-4 h-4 text-gray-300 stroke-current" />
            ))}
        </div>
    );
};

export default RatingStars;
