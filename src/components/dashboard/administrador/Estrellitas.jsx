import { useState } from "react";

function Estrellitas({estrellas,setEstrellas}) {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event) => {
    const value = event.target.value;
    setRating(value);
    setEstrellas(value)
  };

  return (
    <div className="flex justify-start items-center space-x-4">
      <p className="mr-2 font-bold uppercase pt-3">Calificación:</p>
      <div className="flex pt-3">
        <input
          id="radio1"
          type="radio"
          name="rating"
          value="1"
          checked={rating === "1"}
          onChange={handleRatingChange}
          className="sr-only"
        />
        <label
          htmlFor="radio1"
          className={`text-5xl mr-1 ${
            rating >= 1 ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </label>
        <input
          id="radio2"
          type="radio"
          name="rating"
          value="2"
          checked={rating === "2"}
          onChange={handleRatingChange}
          className="sr-only"
        />
        <label
          htmlFor="radio2"
          className={`text-5xl mr-1 ${
            rating >= 2 ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </label>
        <input
          id="radio3"
          type="radio"
          name="rating"
          value="3"
          checked={rating === "3"}
          onChange={handleRatingChange}
          className="sr-only"
        />
        <label
          htmlFor="radio3"
          className={`text-5xl mr-1 ${
            rating >= 3 ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </label>
        <input
          id="radio4"
          type="radio"
          name="rating"
          value="4"
          checked={rating === "4"}
          onChange={handleRatingChange}
          className="sr-only"
        />
        <label
          htmlFor="radio4"
          className={`text-5xl mr-1 ${
            rating >= 4 ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </label>
        <input
          id="radio5"
          type="radio"
          name="rating"
          value="5"
          checked={rating === "5"}
          onChange={handleRatingChange}
          className="sr-only"
        />
        <label
          htmlFor="radio5"
          className={`text-5xl mr-1 ${
            rating >= 5 ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </label>
      </div>
    </div>
  );
}
export default Estrellitas;